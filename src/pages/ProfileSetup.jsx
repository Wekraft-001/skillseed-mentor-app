import React from "react";
import { useNavigate } from "react-router-dom";
import { PageMetadata } from "../components/PageMetadata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faPlus,
  faTimes,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

const ProfileSetup = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageMetadata
        title="Mentor's Profile Setup"
        description="Create & update your profile for easy access to kids"
      />
      <main className="bg-[#F5F7FA] min-h-[800px] py-8">
        <div className="container mx-auto px-6">
          {/* Progress Bar */}
          {/* <div id="progress-tracker" className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-[#212121]">
                Profile Setup Progress
              </span>
              <span className="text-sm text-[#1A73E8]">60% Complete</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="w-[60%] h-full bg-[#1A73E8] rounded-full"></div>
            </div>
          </div> */}

          {/* Profile Form */}
          <div
            id="mentor-profile-form"
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h1 className="text-lg md:text-2xl font-semibold text-[#212121] mb-6">
              Create Your Mentor Profile
            </h1>

            {/* Personal Info Section */}
            <section id="personal-info" className="mb-10">
              <h2 className="md:text-xl font-semibold mb-6">
                Personal Information
              </h2>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-32 h-32 relative">
                  <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
                    <FontAwesomeIcon
                      icon={faCamera}
                      className="text-gray-400 text-2xl"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-[#1A73E8] p-2 rounded-full text-white">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-full border focus:border-[#1A73E8] outline-none"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Professional Title
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-full border focus:border-[#1A73E8] outline-none"
                        placeholder="e.g., Senior Software Engineer"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Bio (100-150 words)
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl border focus:border-[#1A73E8] outline-none h-32"
                      placeholder="Tell us about yourself and your expertise..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </section>

            {/* Expertise Section */}
            <section id="expertise" className="mb-10">
              <h2 className="md:text-xl font-semibold mb-6">Areas of Expertise</h2>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-blue-50 text-[#1A73E8] rounded-full flex items-center">
                    A.I. Engineer
                    <button className="ml-2 text-sm">
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </span>
                  <span className="px-4 py-2 bg-blue-50 text-[#1A73E8] rounded-full flex items-center">
                    Machine Learning
                    <button className="ml-2 text-sm">
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </span>
                  <button className="px-4 py-2 border border-dashed border-gray-300 rounded-full text-gray-500 hover:border-[#1A73E8] hover:text-[#1A73E8]">
                    + Add Tag
                  </button>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-10">
              <h2 className="md:text-xl font-semibold mb-6">
                Experience & Education
              </h2>
              <div className="space-y-6">
                <div className="p-4 border rounded-xl bg-gray-50">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">Work Experience</h3>
                      <p className="text-sm text-gray-600">
                        Add your relevant work experience
                      </p>
                    </div>
                    <button className="bg-[#1A73E8] text-white md:px-4 py-2 rounded-full text-sm">
                      <FontAwesomeIcon icon={faPlus} className="mr-2" />
                      Add Experience
                    </button>
                  </div>
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className="text-gray-400"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-full border focus:border-[#1A73E8] outline-none mb-2"
                          placeholder="Company Name"
                        />
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-full border focus:border-[#1A73E8] outline-none mt-3"
                          placeholder="Position"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-xl bg-gray-50">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">Education</h3>
                      <p className="text-sm text-gray-600">
                        Add your educational background
                      </p>
                    </div>
                    <button className="bg-[#1A73E8] text-white md:px-4 py-2 rounded-full text-sm">
                      <FontAwesomeIcon icon={faPlus} className="mr-2" />
                      Add Education
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Availability Section */}
            {/* <section id="availability" className="mb-10">
              <h2 className="text-xl font-semibold mb-6">
                Set Your Availability
              </h2>
              <div className="grid grid-cols-7 gap-4 mb-6">
                <div className="text-center">
                  <button className="w-12 h-12 rounded-full bg-blue-50 text-[#1A73E8] font-medium hover:bg-[#1A73E8] hover:text-white">
                    Mon
                  </button>
                </div>
                <div className="text-center">
                  <button className="w-12 h-12 rounded-full bg-blue-50 text-[#1A73E8] font-medium hover:bg-[#1A73E8] hover:text-white">
                    Tue
                  </button>
                </div>
                <div className="text-center">
                  <button className="w-12 h-12 rounded-full bg-[#1A73E8] text-white font-medium">
                    Wed
                  </button>
                </div>
                <div className="text-center">
                  <button className="w-12 h-12 rounded-full bg-blue-50 text-[#1A73E8] font-medium hover:bg-[#1A73E8] hover:text-white">
                    Thu
                  </button>
                </div>
                <div className="text-center">
                  <button className="w-12 h-12 rounded-full bg-[#1A73E8] text-white font-medium">
                    Fri
                  </button>
                </div>
                <div className="text-center">
                  <button className="w-12 h-12 rounded-full bg-gray-100 text-gray-400">
                    Sat
                  </button>
                </div>
                <div className="text-center">
                  <button className="w-12 h-12 rounded-full bg-gray-100 text-gray-400">
                    Sun
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Start Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 rounded-full border focus:border-[#1A73E8] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    End Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 rounded-full border focus:border-[#1A73E8] outline-none"
                  />
                </div>
              </div>
            </section> */}

            {/* Submit Button */}
            <div id="form-actions" className="flex justify-end space-x-4">
              {/* <button className="px-6 py-2 rounded-full border border-[#1A73E8] text-[#1A73E8] hover:bg-blue-50">
                Save as Draft
              </button> */}
              <button
                onClick={() => navigate("/verification")}
                className="px-6 py-2 rounded-full bg-[#1A73E8] text-white hover:bg-blue-600"
              >
                Complete Profile
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfileSetup;
