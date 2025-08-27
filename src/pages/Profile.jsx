import React from "react";
import {
  Eye,
  Save,
  Camera,
  Check,
  User,
  Briefcase,
  GraduationCap,
  Clock,
  Trash,
  Plus,
  X,
} from "lucide-react";
import { PageMetadata } from "../components/PageMetadata";

const Profile = () => {
  return (
    <>
      <PageMetadata
        title="My Profile | SkillSeed"
        description="Manage your mentor profile and settings"
      />
      <main className="bg-[#F5F7FA] py-12">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div
            id="page-header"
            className="flex justify-between items-center mb-8"
          >
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold text-[#212121]">My Profile</h1>
              <div className="w-8 h-8 bg-[#FFC107] rounded-full animate-bounce opacity-20"></div>
              <div
                className="w-6 h-6 bg-[#1A73E8] rounded-full animate-bounce opacity-20"
                style={{ animationDelay: "200ms" }}
              ></div>
              <div
                className="w-4 h-4 bg-pink-400 rounded-full animate-bounce opacity-20"
                style={{ animationDelay: "400ms" }}
              ></div>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-full bg-white text-[#212121] border hover:border-[#1A73E8] shadow-sm">
                <Eye className="w-4 h-4 mr-2 inline" />
                Preview Profile
              </button>
              <button className="px-6 py-3 rounded-full bg-[#1A73E8] text-white hover:bg-blue-600 shadow-sm">
                <Save className="w-4 h-4 mr-2 inline" />
                Save Changes
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Picture & Basic Info */}
            <div id="profile-picture-section" className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl shadow-sm mb-6">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                      alt="Dr. James Wilson"
                      className="w-32 h-32 rounded-full border-4 border-[#FFC107] mx-auto"
                    />
                    <button className="absolute bottom-2 right-2 w-10 h-10 bg-[#1A73E8] rounded-full flex items-center justify-center text-white hover:bg-blue-600">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <h2 className="text-2xl font-bold text-[#212121] mb-2">
                    Dr. James Wilson
                  </h2>
                  <p className="text-gray-600 mb-4">AI Engineer & Educator</p>
                  <div className="flex justify-center gap-2 mb-6">
                    <span className="px-4 py-2 rounded-full bg-[#FFC107] text-white text-sm font-medium">
                      Verified Mentor
                    </span>
                  </div>
                  <div className="flex justify-center gap-4 text-sm text-gray-600">
                    <div className="text-center">
                      <div className="font-bold text-[#212121] text-lg">47</div>
                      <div>Students</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-[#212121] text-lg">
                        4.9
                      </div>
                      <div>Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-[#212121] text-lg">
                        2.5k
                      </div>
                      <div>Hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verification Status */}
              <div
                id="verification-status"
                className="bg-white p-6 rounded-3xl shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#212121] mb-4">
                  Verification Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="text-white w-3 h-3" />
                    </div>
                    <span className="text-sm text-gray-600">
                      Identity Verified
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="text-white w-3 h-3" />
                    </div>
                    <span className="text-sm text-gray-600">
                      Background Check
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="text-white w-3 h-3" />
                    </div>
                    <span className="text-sm text-gray-600">
                      Credentials Approved
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Form */}
            <div id="profile-form-section" className="lg:col-span-2">
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <form className="space-y-8">
                  {/* Basic Information */}
                  <div id="basic-info-section">
                    <h3 className="text-xl font-bold text-[#212121] mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                        <User className="text-pink-500 w-4 h-4" />
                      </div>
                      Basic Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#212121] mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          value="James"
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#212121] mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value="Wilson"
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#212121] mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value="james.wilson@skillseed.com"
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#212121] mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value="+1 (555) 123-4567"
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div id="professional-info-section">
                    <h3 className="text-xl font-bold text-[#212121] mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Briefcase className="text-[#1A73E8] w-4 h-4" />
                      </div>
                      Professional Information
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-[#212121] mb-2">
                          Professional Title
                        </label>
                        <input
                          type="text"
                          value="AI Engineer & Educator"
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#212121] mb-2">
                          Bio (100-150 words)
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none"
                          placeholder="Tell children and parents about yourself..."
                          defaultValue="Dr. James Wilson is a passionate AI Engineer with over 10 years of experience in machine learning and educational technology. He holds a PhD in Computer Science from MIT and has worked with leading tech companies to develop innovative learning solutions. James believes in making complex concepts simple and fun for young minds to understand."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#212121] mb-2">
                          Expertise Tags
                        </label>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-4 py-2 rounded-full bg-[#1A73E8] text-white text-sm flex items-center gap-2">
                            AI Engineering
                            <X className="w-3 h-3 cursor-pointer" />
                          </span>
                          <span className="px-4 py-2 rounded-full bg-green-500 text-white text-sm flex items-center gap-2">
                            Programming
                            <X className="w-3 h-3 cursor-pointer" />
                          </span>
                          <span className="px-4 py-2 rounded-full bg-purple-500 text-white text-sm flex items-center gap-2">
                            Mathematics
                            <X className="w-3 h-3 cursor-pointer" />
                          </span>
                        </div>
                        <input
                          type="text"
                          placeholder="Add new tag and press Enter"
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Education & Experience */}
                  <div id="education-section">
                    <h3 className="text-xl font-bold text-[#212121] mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <GraduationCap className="text-green-500 w-4 h-4" />
                      </div>
                      Education & Experience
                    </h3>
                    <div className="space-y-6">
                      <div className="border border-gray-200 rounded-2xl p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-semibold text-[#212121]">
                              PhD in Computer Science
                            </h4>
                            <p className="text-gray-600">
                              Massachusetts Institute of Technology
                            </p>
                            <p className="text-sm text-gray-500">2015 - 2019</p>
                          </div>
                          <button className="text-red-500 hover:text-red-600">
                            <Trash className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <button className="w-full px-4 py-3 rounded-2xl border-2 border-dashed border-gray-300 text-gray-600 hover:border-[#1A73E8] hover:text-[#1A73E8]">
                        <Plus className="w-4 h-4 mr-2 inline" />
                        Add Education/Experience
                      </button>
                    </div>
                  </div>

                  {/* Availability */}
                  <div id="availability-section">
                    <h3 className="text-xl font-bold text-[#212121] mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Clock className="text-[#FFC107] w-4 h-4" />
                      </div>
                      Availability
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#212121] mb-2">
                          Timezone
                        </label>
                        <select className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none">
                          <option>UTC-5 (Eastern Time)</option>
                          <option>UTC-8 (Pacific Time)</option>
                          <option>UTC+0 (GMT)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#212121] mb-2">
                          Preferred Session Length
                        </label>
                        <select className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none">
                          <option>30 minutes</option>
                          <option>45 minutes</option>
                          <option>60 minutes</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div id="form-actions" className="flex gap-4 pt-6">
                    <button
                      type="button"
                      className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 text-gray-600 hover:border-[#1A73E8] hover:text-[#1A73E8] font-medium"
                    >
                      Cancel Changes
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-4 rounded-full bg-[#1A73E8] text-white hover:bg-blue-600 shadow-sm font-medium"
                    >
                      <Save className="w-4 h-4 mr-2 inline" />
                      Save Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Bubbles Decoration */}
        <div className="fixed bottom-0 right-0 pointer-events-none">
          <div className="w-64 h-64 relative">
            <div
              className="absolute bottom-0 right-0 w-32 h-32 bg-[#FFC107] rounded-full opacity-10 animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="absolute bottom-16 right-16 w-24 h-24 bg-[#1A73E8] rounded-full opacity-10 animate-bounce"
              style={{ animationDelay: "200ms" }}
            ></div>
            <div
              className="absolute bottom-28 right-8 w-16 h-16 bg-pink-400 rounded-full opacity-10 animate-bounce"
              style={{ animationDelay: "400ms" }}
            ></div>
            <div
              className="absolute bottom-40 right-20 w-12 h-12 bg-green-400 rounded-full opacity-10 animate-bounce"
              style={{ animationDelay: "600ms" }}
            ></div>
            <div
              className="absolute bottom-52 right-4 w-8 h-8 bg-purple-400 rounded-full opacity-10 animate-bounce"
              style={{ animationDelay: "800ms" }}
            ></div>
          </div>
        </div>

        {/* Left Side Bubbles */}
        <div className="fixed bottom-0 left-0 pointer-events-none">
          <div className="w-48 h-48 relative">
            <div
              className="absolute bottom-8 left-8 w-20 h-20 bg-pink-300 rounded-full opacity-10 animate-bounce"
              style={{ animationDelay: "100ms" }}
            ></div>
            <div
              className="absolute bottom-24 left-20 w-16 h-16 bg-yellow-300 rounded-full opacity-10 animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
            <div
              className="absolute bottom-36 left-4 w-12 h-12 bg-blue-300 rounded-full opacity-10 animate-bounce"
              style={{ animationDelay: "500ms" }}
            ></div>
          </div>
        </div>

        {/* Top Floating Elements */}
        <div className="fixed top-20 right-20 pointer-events-none">
          <div
            className="w-6 h-6 bg-yellow-300 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "1000ms" }}
          ></div>
        </div>

        <div className="fixed top-32 left-16 pointer-events-none">
          <div
            className="w-4 h-4 bg-pink-300 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "1200ms" }}
          ></div>
        </div>
      </main>
    </>
  );
};

export default Profile;
