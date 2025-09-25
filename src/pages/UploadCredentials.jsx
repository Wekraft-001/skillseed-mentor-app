import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faTrash,
  faImage,
  faIdCard,
  faShieldAlt,
  faUpload,
  faCertificate,
  faClock,
  faSpinner,
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

const UploadCredentials = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const token = localStorage.getItem("mentorToken");
  const queryClient = useQueryClient();
  const [uploadStatus, setUploadStatus] = useState({});
  const idFileRef = useRef(null);
  const credentialsFileRef = useRef(null);

  // Get uploaded documents
  const {
    data: uploadedDocuments = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["uploadedCredentials"],
    queryFn: async () => {
      const response = await axios.get(
        `${apiURL}/mentor/dashboard/credentials`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data, "checking credentials");
      return response.data;
    },
    enabled: !!token,
  });

  // Upload mutation
  const uploadMutation = useMutation({
    mutationFn: async ({ file, category }) => {
      const formData = new FormData();

      // Append files based on category
      if (category === "id") {
        formData.append("governmentId", file);
      } else if (category === "credentials") {
        formData.append("professionalCredentials", file);
      }

      formData.append(
        "description",
        "Government ID & Professional Credentials"
      );

      const response = await axios.post(
        `${apiURL}/mentor/dashboard/credentials/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    },
    onSuccess: (data, variables) => {
      // Invalidate and refetch the credentials query
      queryClient.invalidateQueries(["uploadedCredentials"]);

      // Update upload status to success
      const fileId = variables.fileId;
      setUploadStatus((prev) => ({ ...prev, [fileId]: "success" }));

      // Clear the status after 3 seconds
      setTimeout(() => {
        setUploadStatus((prev) => {
          const newStatus = { ...prev };
          delete newStatus[fileId];
          return newStatus;
        });
      }, 3000);
    },
    onError: (error, variables) => {
      console.error("Upload failed:", error);
      const fileId = variables.fileId;
      setUploadStatus((prev) => ({ ...prev, [fileId]: "error" }));

      const errorMessage =
        error.response?.data?.message || "Upload failed. Please try again.";
      alert(errorMessage);
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (documentId) => {
      const response = await axios.delete(
        `${apiURL}/mentor/dashboard/credentials/${documentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      // Invalidate and refetch the credentials query
      queryClient.invalidateQueries(["uploadedCredentials"]);
    },
    onError: (error) => {
      console.error("Delete error:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Failed to delete document. Please try again.";
      alert(errorMessage);
    },
  });

  // Submit for review mutation
  const submitMutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post(
        `${apiURL}/mentor/dashboard/credentials/submit`,
        {
          documents: uploadedDocuments.map((doc) => ({
            id: doc.id,
            category: doc.category,
          })),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      alert(
        "Documents submitted successfully! You will be notified once the review is complete."
      );
      // Optionally refetch to update status
      queryClient.invalidateQueries(["uploadedCredentials"]);
    },
    onError: (error) => {
      console.error("Submit error:", error);
      const errorMessage =
        error.response?.data?.message || "Submission failed. Please try again.";
      alert(errorMessage);
    },
  });

  // File upload handler
  const handleFileUpload = async (file, category) => {
    if (!file) return;

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB");
      return;
    }

    // Validate file type
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "application/pdf",
    ];
    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, PNG, and PDF files are allowed");
      return;
    }

    const fileId = Date.now();
    setUploadStatus((prev) => ({ ...prev, [fileId]: "uploading" }));

    // Trigger the upload mutation
    uploadMutation.mutate({ file, category, fileId });
  };

  // Handle file selection
  const handleFileSelect = (event, category) => {
    const file = event.target.files[0];
    if (file) {
      handleFileUpload(file, category);
    }
    // Reset file input
    event.target.value = "";
  };

  // Delete document handler
  const handleDeleteDocument = async (documentId) => {
    if (!confirm("Are you sure you want to delete this document?")) {
      return;
    }

    deleteMutation.mutate(documentId);
  };

  // Submit all documents for review
  const handleSubmitForReview = async () => {
    if (uploadedDocuments.length === 0) {
      alert("Please upload at least one document before submitting.");
      return;
    }

    submitMutation.mutate();
  };

  // Utility function to format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  // Helper function to get file type from document
  const getFileType = (document) => {
    if (document.fileType) {
      return document.fileType.includes("pdf") ? "pdf" : "image";
    }
    if (document.name) {
      return document.name.toLowerCase().includes(".pdf") ? "pdf" : "image";
    }
    return "image";
  };

  // Helper function to get file size display
  const getFileSize = (document) => {
    if (document.size) {
      return typeof document.size === "string"
        ? document.size
        : formatFileSize(document.size);
    }
    return "Unknown size";
  };

  // Show loading state
  if (isLoading) {
    return (
      <main className="bg-[#F5F7FA] min-h-[900px] py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <FontAwesomeIcon
                icon={faSpinner}
                className="text-4xl text-[#1A73E8] animate-spin mb-4"
              />
              <p className="text-gray-600">Loading your credentials...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Show error state
  if (error) {
    return (
      <main className="bg-[#F5F7FA] min-h-[900px] py-6">
        <div className="container mx-auto px-6">
          <div className="bg-red-50 p-6 rounded-xl">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="text-red-500 text-xl"
              />
              <div>
                <h3 className="font-medium text-red-800">
                  Error loading credentials
                </h3>
                <p className="text-sm text-red-600">
                  {error.response?.data?.message ||
                    error.message ||
                    "Failed to load credentials"}
                </p>
                <button
                  onClick={() => refetch()}
                  className="mt-2 text-sm text-red-700 underline hover:text-red-800"
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F5F7FA] min-h-[900px] py-6">
      <div className="container mx-auto px-6">
        {/* Hidden file inputs */}
        <input
          ref={idFileRef}
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => handleFileSelect(e, "id")}
          style={{ display: "none" }}
        />
        <input
          ref={credentialsFileRef}
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => handleFileSelect(e, "credentials")}
          style={{ display: "none" }}
        />

        {/* Verification Status */}
        <section id="verification-status" className="mb-6">
          <div className="bg-yellow-50 p-6 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-white text-xl"
                />
              </div>
              <div>
                <h3 className="font-medium text-[#212121]">
                  Current Status: Pending Approval
                </h3>
                <p className="text-sm text-gray-600">
                  Our team will review your documents within 2-3 business days
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Upload Form */}
        <div
          id="credentials-upload"
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h1 className="text-3xl font-bold text-[#212121] mb-6">
            Upload Your Credentials
          </h1>

          {/* Upload Documents */}
          <section id="document-upload" className="mb-10">
            <h2 className="text-xl font-semibold mb-6">
              Upload Your Documents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ID Verification */}
              <div className="p-6 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 hover:border-[#1A73E8] transition-colors">
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={faIdCard}
                    className="text-4xl text-[#1A73E8] mb-4"
                  />
                  <h3 className="font-medium mb-2">Government ID</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Upload a clear photo of your ID (JPG, PNG, PDF - Max 10MB)
                  </p>
                  <button
                    onClick={() => idFileRef.current?.click()}
                    disabled={uploadMutation.isPending}
                    className="bg-[#1A73E8] text-white px-6 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    <FontAwesomeIcon
                      icon={uploadMutation.isPending ? faSpinner : faUpload}
                      className={`mr-2 ${
                        uploadMutation.isPending ? "animate-spin" : ""
                      }`}
                    />
                    Upload ID
                  </button>
                </div>
              </div>

              {/* Professional Credentials */}
              <div className="p-6 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 hover:border-[#1A73E8] transition-colors">
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={faCertificate}
                    className="text-4xl text-[#1A73E8] mb-4"
                  />
                  <h3 className="font-medium mb-2">Professional Credentials</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Certifications or degrees (JPG, PNG, PDF - Max 10MB)
                  </p>
                  <button
                    onClick={() => credentialsFileRef.current?.click()}
                    disabled={uploadMutation.isPending}
                    className="bg-[#1A73E8] text-white px-6 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    <FontAwesomeIcon
                      icon={uploadMutation.isPending ? faSpinner : faUpload}
                      className={`mr-2 ${
                        uploadMutation.isPending ? "animate-spin" : ""
                      }`}
                    />
                    Upload Documents
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Uploaded Documents */}
          <section id="uploaded-documents" className="mb-10">
            <h2 className="text-xl font-semibold mb-6">
              Uploaded Documents ({uploadedDocuments.length})
            </h2>
            <div className="space-y-4">
              {uploadedDocuments.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <FontAwesomeIcon icon={faUpload} className="text-4xl mb-4" />
                  <p>No documents uploaded yet</p>
                </div>
              ) : (
                uploadedDocuments.map((document) => (
                  <div
                    key={document.id}
                    className="flex items-center justify-between p-4 bg-blue-50 rounded-xl"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={
                            getFileType(document) === "pdf"
                              ? faFilePdf
                              : faImage
                          }
                          className="text-[#1A73E8]"
                        />
                      </div>
                      <div>
                        <p className="font-medium">
                          {document.name || document.fileName || "Unknown file"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {getFileSize(document)} •{" "}
                          {document.category || document.type || "Unknown"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* Upload status indicator */}
                      {uploadStatus[document.id] === "uploading" && (
                        <FontAwesomeIcon
                          icon={faSpinner}
                          className="text-blue-500 animate-spin"
                        />
                      )}
                      {uploadStatus[document.id] === "success" && (
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-green-500"
                        />
                      )}
                      {uploadStatus[document.id] === "error" && (
                        <FontAwesomeIcon
                          icon={faExclamationCircle}
                          className="text-red-500"
                        />
                      )}

                      <button
                        onClick={() => handleDeleteDocument(document.id)}
                        disabled={deleteMutation.isPending}
                        className="text-red-500 hover:text-red-600 transition-colors disabled:text-gray-400"
                      >
                        <FontAwesomeIcon
                          icon={deleteMutation.isPending ? faSpinner : faTrash}
                          className={
                            deleteMutation.isPending ? "animate-spin" : ""
                          }
                        />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Form Actions */}
          <div id="form-actions" className="flex justify-end space-x-4">
            <button
              onClick={handleSubmitForReview}
              disabled={
                submitMutation.isPending || uploadedDocuments.length === 0
              }
              className="px-6 py-2 rounded-full bg-[#1A73E8] text-white hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {submitMutation.isPending && (
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              )}
              <span>
                {submitMutation.isPending
                  ? "Submitting..."
                  : "Submit for Review"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UploadCredentials;
