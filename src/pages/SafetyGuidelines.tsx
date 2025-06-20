import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHeart,
  faComments,
  faBan,
  faRobot,
  faCheckCircle,
  faShieldAlt,
  faBell,
  faHeart,
  faHandPeace,
  faFlag,
  faUserShield,
  faVolumeMute,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const SafetyGuidelines = () => {
  return (
    <main className="bg-[#F5F7FA] min-h-[900px] py-12">
      <div className="container mx-auto px-6">
        {/* Progress Bar */}
        <div id="progress-tracker" className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[#212121]">
              Safety Guidelines Progress
            </span>
            <span className="text-sm text-[#1A73E8]">60% Complete</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full">
            <div className="w-[60%] h-full bg-[#1A73E8] rounded-full relative">
              <div className="absolute -right-2 -top-1 w-5 h-5 bg-white rounded-full border-2 border-[#1A73E8]"></div>
            </div>
          </div>
        </div>

        {/* Safety Guidelines Form */}
        <div
          id="safety-guidelines-form"
          className="bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full -mr-20 -mt-20 z-0 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-50 rounded-full -ml-16 -mb-16 z-0 animate-pulse"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#FFC107] rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faShieldHeart}
                  className="text-white text-3xl"
                />
              </div>
              <h1 className="text-3xl font-bold text-[#212121]">
                Safety Guidelines
              </h1>
            </div>

            {/* Communication Rules */}
            <section id="communication-rules" className="mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1A73E8] rounded-full flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faComments}
                        className="text-white text-xl"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Platform Communication Only
                      </h3>
                      <p className="text-sm text-gray-600">
                        All interactions must happen within SkillSeed's secure
                        environment
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-red-50 rounded-2xl border-2 border-red-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faBan}
                        className="text-white text-xl"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        No Personal Contact
                      </h3>
                      <p className="text-sm text-gray-600">
                        Sharing personal contact details is strictly prohibited
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Moderation */}
            <section id="ai-moderation" className="mb-10">
              <div className="p-6 bg-purple-50 rounded-2xl border-2 border-purple-100">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faRobot}
                      className="text-white text-2xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">AI-Powered Safety</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Our AI system monitors all conversations to ensure a safe
                      learning environment
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-white rounded-full text-sm text-purple-600 border border-purple-200">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="mr-2"
                        />
                        Message Monitoring
                      </span>
                      <span className="px-4 py-2 bg-white rounded-full text-sm text-purple-600 border border-purple-200">
                        <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
                        Behavior Analysis
                      </span>
                      <span className="px-4 py-2 bg-white rounded-full text-sm text-purple-600 border border-purple-200">
                        <FontAwesomeIcon icon={faBell} className="mr-2" />
                        Instant Alerts
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Community Guidelines */}
            <section id="community-guidelines" className="mb-10">
              <h2 className="text-xl font-semibold mb-6">
                Community Guidelines
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-green-50 rounded-2xl border-2 border-green-100">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-green-500 text-2xl mb-4"
                  />
                  <h3 className="font-medium mb-2">Be Kind & Respectful</h3>
                  <p className="text-sm text-gray-600">
                    Treat everyone with respect and courtesy
                  </p>
                </div>

                <div className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-100">
                  <FontAwesomeIcon
                    icon={faHandPeace}
                    className="text-[#1A73E8] text-2xl mb-4"
                  />
                  <h3 className="font-medium mb-2">Stay Professional</h3>
                  <p className="text-sm text-gray-600">
                    Maintain appropriate behavior and language
                  </p>
                </div>

                <div className="p-6 bg-yellow-50 rounded-2xl border-2 border-yellow-100">
                  <FontAwesomeIcon
                    icon={faFlag}
                    className="text-[#FFC107] text-2xl mb-4"
                  />
                  <h3 className="font-medium mb-2">Report Issues</h3>
                  <p className="text-sm text-gray-600">
                    Flag any concerns immediately
                  </p>
                </div>
              </div>
            </section>

            {/* Safety Controls */}
            <section id="safety-controls" className="mb-10">
              <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-100">
                <div className="flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#1A73E8] rounded-full flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faUserShield}
                        className="text-white text-xl"
                      />
                    </div>
                    <span className="font-medium">Safety Controls</span>
                  </div>
                  <div className="flex-1 flex flex-wrap gap-4">
                    <button className="px-6 py-2 rounded-full bg-white border border-gray-200 text-sm flex items-center gap-2">
                      <FontAwesomeIcon icon={faBan} className="text-red-500" />
                      Block User
                    </button>
                    <button className="px-6 py-2 rounded-full bg-white border border-gray-200 text-sm flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faFlag}
                        className="text-yellow-500"
                      />
                      Report Issue
                    </button>
                    <button className="px-6 py-2 rounded-full bg-white border border-gray-200 text-sm flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faVolumeMute}
                        className="text-purple-500"
                      />
                      Mute Chat
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div id="form-actions" className="flex justify-end space-x-4">
              <button className="px-8 py-3 rounded-full border-2 border-[#1A73E8] text-[#1A73E8] hover:bg-blue-50">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                Back
              </button>
              <button className="px-8 py-3 rounded-full bg-[#1A73E8] text-white hover:bg-blue-600">
                I Understand
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorations */}
      <div className="fixed top-20 right-10 pointer-events-none animate-bounce">
        <div className="w-16 h-16 bg-[#FFC107] rounded-full opacity-10"></div>
      </div>
      <div className="fixed bottom-20 left-10 pointer-events-none animate-bounce">
        <div className="w-24 h-24 bg-[#1A73E8] rounded-full opacity-10"></div>
      </div>
      <div className="fixed bottom-40 right-20 pointer-events-none animate-bounce">
        <div className="w-20 h-20 bg-[#FFC107] rounded-full opacity-10"></div>
      </div>
    </main>
  );
};

export default SafetyGuidelines;
