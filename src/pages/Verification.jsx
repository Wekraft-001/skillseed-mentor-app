import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faUpload,
  faCertificate,
  faShieldAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Verification = () => {
  return (
    <main className="bg-[#F5F7FA] min-h-[900px] py-12">
      <div className="container mx-auto px-6">
        {/* Progress Bar */}
        <div id="progress-tracker" className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[#212121]">
              Verification Progress
            </span>
            <span className="text-sm text-[#1A73E8]">40% Complete</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="w-[40%] h-full bg-[#1A73E8] rounded-full"></div>
          </div>
        </div>

        {/* Verification Form */}
        <div
          id="verification-form"
          className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -mr-20 -mt-20 z-0"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-50 rounded-full -ml-16 -mb-16 z-0"></div>

          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-[#212121] mb-6">
              Verification Details
            </h1>

            {/* Document Upload Section */}
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
                    <h3 className="font-medium mb-2">
                      Professional Credentials
                    </h3>
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

            {/* LinkedIn Verification */}
            <section id="linkedin-verification" className="mb-10">
              <h2 className="text-xl font-semibold mb-6">
                LinkedIn Verification
              </h2>
              <div className="p-6 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-3xl text-[#1A73E8]"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">
                      Connect Your LinkedIn Profile
                    </h3>
                    <p className="text-sm text-gray-600">
                      This helps us verify your professional experience
                    </p>
                  </div>
                  <button className="bg-[#1A73E8] text-white px-6 py-2 rounded-full">
                    Connect
                  </button>
                </div>
              </div>
            </section>

            {/* Background Check */}
            <section id="background-check" className="mb-10">
              <h2 className="text-xl font-semibold mb-6">
                Background Verification
              </h2>
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faShieldAlt}
                      className="text-[#FFC107] text-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">
                      Optional Background Check
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Required for certain regions and programs
                    </p>
                    <div className="flex items-center gap-4">
                      <button className="px-6 py-2 rounded-full bg-[#1A73E8] text-white">
                        Start Check
                      </button>
                      <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-600">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Verification Status */}
            <section id="verification-status" className="mb-10">
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
                      Our team will review your documents within 2-3 business
                      days
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div id="form-actions" className="flex justify-end space-x-4">
              <button className="px-6 py-2 rounded-full border border-[#1A73E8] text-[#1A73E8] hover:bg-blue-50">
                Save Progress
              </button>
              <button className="px-6 py-2 rounded-full bg-[#1A73E8] text-white hover:bg-blue-600">
                Submit for Review
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorations */}
      <div className="fixed top-20 right-10 pointer-events-none">
        <div className="w-16 h-16 bg-[#FFC107] rounded-full opacity-10"></div>
      </div>
      <div className="fixed bottom-20 left-10 pointer-events-none">
        <div className="w-24 h-24 bg-[#1A73E8] rounded-full opacity-10"></div>
      </div>
      <div className="fixed bottom-40 right-20 pointer-events-none">
        <div className="w-20 h-20 bg-[#FFC107] rounded-full opacity-10"></div>
      </div>
    </main>
  );
};

export default Verification;
