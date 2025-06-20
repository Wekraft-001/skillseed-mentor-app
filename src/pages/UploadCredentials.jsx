import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faTrash,
  faImage,
  faIdCard,
  faShieldAlt,
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
    <main className="bg-[#F5F7FA] min-h-[900px] py-12">
      <div className="container mx-auto px-6">
        {/* Progress Bar */}
        <div id="progress-tracker" className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[#212121]">
              Credentials Upload Progress
            </span>
            <span className="text-sm text-[#1A73E8]">80% Complete</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="w-[80%] h-full bg-[#1A73E8] rounded-full"></div>
          </div>
        </div>

        {/* Credentials Upload Form */}
        <div
          id="credentials-upload"
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h1 className="text-3xl font-bold text-[#212121] mb-6">
            Upload Your Credentials
          </h1>

          {/* Professional Certifications */}
          <section id="certifications" className="mb-10">
            <h2 className="text-xl font-semibold mb-6">
              Professional Certifications
            </h2>
            <div
              ref={dropzoneRef}
              id="certification-dropzone"
              className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#1A73E8] transition-colors"
            >
              <div className="space-y-4">
                <div className="w-20 h-20 bg-blue-50 rounded-full mx-auto flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="text-[#1A73E8] text-3xl"
                  />
                </div>
                <div>
                  <p className="text-lg font-medium">
                    Drag & Drop your certificates here
                  </p>
                  <p className="text-sm text-gray-500">or</p>
                  <button className="mt-2 px-6 py-2 bg-[#1A73E8] text-white rounded-full hover:bg-blue-600">
                    Browse Files
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  Supported formats: PDF, JPG, PNG (Max size: 5MB)
                </p>
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

          {/* Additional Verification */}
          <section id="additional-verification" className="mb-10">
            <h2 className="text-xl font-semibold mb-6">
              Additional Verification
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFC107] bg-opacity-20 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faIdCard}
                      className="text-[#FFC107]"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Government ID</h3>
                    <p className="text-sm text-gray-500">
                      Upload a valid ID for verification
                    </p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 border border-[#1A73E8] text-[#1A73E8] rounded-full hover:bg-blue-50">
                  Upload ID
                </button>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFC107] bg-opacity-20 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faShieldAlt}
                      className="text-[#FFC107]"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Background Check</h3>
                    <p className="text-sm text-gray-500">
                      Consent for background verification
                    </p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 border border-[#1A73E8] text-[#1A73E8] rounded-full hover:bg-blue-50">
                  Start Process
                </button>
              </div>
            </div>
          </section>

          {/* Form Actions */}
          <div id="form-actions" className="flex justify-end space-x-4">
            <button className="px-6 py-2 rounded-full border border-[#1A73E8] text-[#1A73E8] hover:bg-blue-50">
              Save as Draft
            </button>
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
