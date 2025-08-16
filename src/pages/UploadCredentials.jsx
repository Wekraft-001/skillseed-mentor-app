import React, { useEffect, useRef } from "react";
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
} from "@fortawesome/free-solid-svg-icons";

const UploadCredentials = () => {
  const dropzoneRef = useRef(null);

  useEffect(() => {
    const dropzone = dropzoneRef.current;
    if (!dropzone) return;

    const handleDragOver = (e) => {
      e.preventDefault();
      dropzone.classList.add("border-[#1A73E8]");
    };

    const handleDragLeave = () => {
      dropzone.classList.remove("border-[#1A73E8]");
    };

    const handleDrop = (e) => {
      e.preventDefault();
      dropzone.classList.remove("border-[#1A73E8]");
      // Handle file drop logic here
      if (e.dataTransfer && e.dataTransfer.files) {
        console.log("Dropped files:", e.dataTransfer.files);
        // You would typically set these files to a state variable
      }
    };

    dropzone.addEventListener("dragover", handleDragOver);
    dropzone.addEventListener("dragleave", handleDragLeave);
    dropzone.addEventListener("drop", handleDrop);

    return () => {
      dropzone.removeEventListener("dragover", handleDragOver);
      dropzone.removeEventListener("dragleave", handleDragLeave);
      dropzone.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <main className="bg-[#F5F7FA] min-h-[900px] py-6">
      <div className="container mx-auto px-6">
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
                    Upload a clear photo of your ID
                  </p>
                  <button className="bg-[#1A73E8] text-white px-6 py-2 rounded-full text-sm">
                    <FontAwesomeIcon icon={faUpload} className="mr-2" />
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
                    Certifications or degrees
                  </p>
                  <button className="bg-[#1A73E8] text-white px-6 py-2 rounded-full text-sm">
                    <FontAwesomeIcon icon={faUpload} className="mr-2" />
                    Upload Documents
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Uploaded Documents */}
          <section id="uploaded-documents" className="mb-10">
            <h2 className="text-xl font-semibold mb-6">Uploaded Documents</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      className="text-[#1A73E8]"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Teaching_Certificate.pdf</p>
                    <p className="text-sm text-gray-500">2.3 MB</p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-600">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faImage}
                      className="text-[#1A73E8]"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Professional_ID.jpg</p>
                    <p className="text-sm text-gray-500">1.1 MB</p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-600">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </section>

          {/* Form Actions */}
          <div id="form-actions" className="flex justify-end space-x-4">
            <button className="px-6 py-2 rounded-full bg-[#1A73E8] text-white hover:bg-blue-600">
              Submit for Review
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UploadCredentials;
