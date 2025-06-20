import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faStar,
  faPenToSquare,
  faComments,
  faPlus,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const Reports = () => {
  return (
    <main id="main" className="relative z-10 py-12 min-h-[900px]">
      {/* Decorative Bubbles Top Left */}
      <div
        className="absolute -top-14 -left-20 pointer-events-none z-0"
        id="bubble-decoration-1"
      >
        <div className="w-36 h-36 bg-[#FFC107]/20 rounded-full blur-md"></div>
        <div className="w-14 h-14 bg-[#1A73E8]/20 rounded-full absolute top-16 left-28 blur-sm"></div>
      </div>
      <div
        className="absolute top-20 left-8 pointer-events-none z-0"
        id="bubble-decoration-2"
      >
        <div className="w-9 h-9 bg-[#1A73E8]/30 rounded-full"></div>
      </div>
      {/* Page Title and Actions */}
      <div className="container mx-auto px-6 relative z-10">
        <div
          className="flex justify-between items-center mb-10"
          id="reports-header-block"
        >
          <div className="flex items-center gap-4">
            <h1
              className="text-3xl md:text-4xl font-black text-[#212121] tracking-tight"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Mentors Report
            </h1>
            <div className="w-8 h-8 bg-[#FFC107] rounded-full opacity-30 animate-pulse"></div>
            <div
              className="w-6 h-6 bg-[#1A73E8] rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center px-5 py-2 rounded-full bg-white border border-[#1A73E8] text-[#1A73E8] font-semibold hover:bg-blue-50 shadow-sm transition text-base">
              <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
              May 2025
            </button>
            <button className="flex items-center px-5 py-2 rounded-full bg-[#1A73E8] text-white font-bold shadow-lg hover:bg-[#166fd9] transition text-base">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Export Report
            </button>
          </div>
        </div>

        {/* Report Cards List */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mb-16"
          id="mentor-report-cards-list"
        >
          {/* Report Card 1 */}
          <div
            id="mentor-report-card-1"
            className="bg-white rounded-3xl p-7 shadow-md hover:shadow-lg transition relative overflow-hidden"
          >
            {/* Top Bubbles */}
            <div className="absolute -top-7 -right-7 z-0">
              <div className="w-16 h-16 bg-[#FFC107]/30 rounded-full"></div>
            </div>
            <div className="flex items-center gap-5 mb-5 z-10 relative">
              <img
                src="https://randomuser.me/api/portraits/lego/1.jpg"
                alt="Mentor Avatar"
                className="w-16 h-16 rounded-full border-4 border-[#1A73E8] shadow-md bg-white object-cover"
              />
              <div>
                <h2 className="text-xl font-bold text-[#212121]">
                  Sarah Johnson
                </h2>
                <p className="text-sm text-gray-500">Mathematics • Grade 4</p>
              </div>
              <span className="ml-auto px-3 py-1 rounded-full text-xs font-bold bg-[#1A73E8]/10 text-[#1A73E8] flex items-center gap-1">
                <FontAwesomeIcon icon={faStar} className="text-[#FFC107]" /> 4.9
              </span>
            </div>
            <div className="mb-4" id="mentor-report-progress-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 font-semibold">
                  Progress
                </span>
                <span className="text-sm font-bold text-green-500">85%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-green-400 transition-all"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="mb-5" id="mentor-report-tags-1">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FFC107]/20 text-xs text-[#FFC107] font-bold mr-2 mb-2">
                Multiplication
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-[#1A73E8]/10 text-xs text-[#1A73E8] font-bold mr-2 mb-2">
                Attendance: 98%
              </span>
            </div>
            <div className="mb-4" id="mentor-report-note-1">
              <div className="p-4 rounded-xl bg-blue-50/70 text-sm text-[#212121] font-medium leading-snug">
                <span className="font-semibold text-[#1A73E8]">
                  Mentor Note:
                </span>
                Sarah has shown remarkable improvement in multiplication. She’s
                attentive and participates actively.
              </div>
            </div>
            <div
              className="flex justify-between items-center mt-6"
              id="mentor-report-actions-1"
            >
              <button className="flex gap-2 items-center px-5 py-2 rounded-full bg-[#FFC107] text-[#0A1F44] font-bold shadow hover:bg-yellow-300 transition text-sm">
                <FontAwesomeIcon icon={faPenToSquare} /> Give Feedback
              </button>
              <button className="flex gap-2 items-center px-5 py-2 rounded-full bg-white text-[#1A73E8] border border-[#1A73E8] font-bold shadow hover:bg-blue-50 transition text-sm">
                <FontAwesomeIcon icon={faComments} /> Message Parent
              </button>
            </div>
          </div>
          {/* Report Card 2 */}
          <div
            id="mentor-report-card-2"
            className="bg-white rounded-3xl p-7 shadow-md hover:shadow-lg transition relative overflow-hidden"
          >
            <div className="absolute -top-7 -right-7 z-0">
              <div className="w-14 h-14 bg-[#1A73E8]/20 rounded-full"></div>
            </div>
            <div className="flex items-center gap-5 mb-5 z-10 relative">
              <img
                src="https://randomuser.me/api/portraits/lego/2.jpg"
                alt="Mentor Avatar"
                className="w-16 h-16 rounded-full border-4 border-[#FFC107] shadow bg-white object-cover"
              />
              <div>
                <h2 className="text-xl font-bold text-[#212121]">Mike Chen</h2>
                <p className="text-sm text-gray-500">Science • Grade 5</p>
              </div>
              <span className="ml-auto px-3 py-1 rounded-full text-xs font-bold bg-[#FFC107]/20 text-[#FFC107] flex items-center gap-1">
                <FontAwesomeIcon icon={faStar} className="text-[#FFC107]" /> 4.7
              </span>
            </div>
            <div className="mb-4" id="mentor-report-progress-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 font-semibold">
                  Progress
                </span>
                <span className="text-sm font-bold text-[#1A73E8]">60%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-[#1A73E8] transition-all"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="mb-5" id="mentor-report-tags-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#1A73E8]/10 text-xs text-[#1A73E8] font-bold mr-2 mb-2">
                Solar System
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-[#FFC107]/20 text-xs text-[#FFC107] font-bold mr-2 mb-2">
                Attendance: 90%
              </span>
            </div>
            <div className="mb-4" id="mentor-report-note-2">
              <div className="p-4 rounded-xl bg-yellow-50/80 text-sm text-[#212121] font-medium leading-snug">
                <span className="font-semibold text-[#1A73E8]">
                  Mentor Note:
                </span>
                Mike is curious and asks insightful questions, but needs to
                review the Solar System for better mastery.
              </div>
            </div>
            <div
              className="flex justify-between items-center mt-6"
              id="mentor-report-actions-2"
            >
              <button className="flex gap-2 items-center px-5 py-2 rounded-full bg-[#FFC107] text-[#0A1F44] font-bold shadow hover:bg-yellow-300 transition text-sm">
                <FontAwesomeIcon icon={faPenToSquare} /> Give Feedback
              </button>
              <button className="flex gap-2 items-center px-5 py-2 rounded-full bg-white text-[#1A73E8] border border-[#1A73E8] font-bold shadow hover:bg-blue-50 transition text-sm">
                <FontAwesomeIcon icon={faComments} /> Message Parent
              </button>
            </div>
          </div>
          {/* Report Card 3 */}
          <div
            id="mentor-report-card-3"
            className="bg-white rounded-3xl p-7 shadow-md hover:shadow-lg transition relative overflow-hidden"
          >
            <div className="absolute -top-7 -right-7 z-0">
              <div className="w-12 h-12 bg-green-400/20 rounded-full"></div>
            </div>
            <div className="flex items-center gap-5 mb-5 z-10 relative">
              <img
                src="https://randomuser.me/api/portraits/lego/3.jpg"
                alt="Mentor Avatar"
                className="w-16 h-16 rounded-full border-4 border-green-400 shadow bg-white object-cover"
              />
              <div>
                <h2 className="text-xl font-bold text-[#212121]">
                  Aisha Bello
                </h2>
                <p className="text-sm text-gray-500">English • Grade 3</p>
              </div>
              <span className="ml-auto px-3 py-1 rounded-full text-xs font-bold bg-green-400/10 text-green-500 flex items-center gap-1">
                <FontAwesomeIcon icon={faStar} className="text-green-500" /> 5.0
              </span>
            </div>
            <div className="mb-4" id="mentor-report-progress-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 font-semibold">
                  Progress
                </span>
                <span className="text-sm font-bold text-green-500">98%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-green-400 transition-all"
                  style={{ width: "98%" }}
                ></div>
              </div>
            </div>
            <div className="mb-5" id="mentor-report-tags-3">
              <span className="inline-block px-3 py-1 rounded-full bg-green-400/10 text-xs text-green-500 font-bold mr-2 mb-2">
                Phonics
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-[#1A73E8]/10 text-xs text-[#1A73E8] font-bold mr-2 mb-2">
                Attendance: 100%
              </span>
            </div>
            <div className="mb-4" id="mentor-report-note-3">
              <div className="p-4 rounded-xl bg-green-50/80 text-sm text-[#212121] font-medium leading-snug">
                <span className="font-semibold text-[#1A73E8]">
                  Mentor Note:
                </span>
                Aisha reads fluently and participates joyfully. She’s a class
                leader and helps her peers.
              </div>
            </div>
            <div
              className="flex justify-between items-center mt-6"
              id="mentor-report-actions-3"
            >
              <button className="flex gap-2 items-center px-5 py-2 rounded-full bg-green-400 text-[#0A1F44] font-bold shadow hover:bg-green-300 transition text-sm">
                <FontAwesomeIcon icon={faPenToSquare} /> Give Feedback
              </button>
              <button className="flex gap-2 items-center px-5 py-2 rounded-full bg-white text-green-500 border border-green-400 font-bold shadow hover:bg-green-100 transition text-sm">
                <FontAwesomeIcon icon={faComments} /> Message Parent
              </button>
            </div>
          </div>
        </div>
        {/* End Mentor Report Cards List */}

        {/* Decorative Bubble Bottom Right */}
        <div
          className="absolute bottom-0 right-0 pointer-events-none z-0"
          id="bubble-decoration-3"
        >
          <div className="w-64 h-64 relative">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#FFC107] rounded-full opacity-20 animate-bounce"></div>
            <div
              className="absolute bottom-16 right-16 w-24 h-24 bg-[#1A73E8] rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "160ms" }}
            ></div>
            <div
              className="absolute bottom-28 right-8 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "320ms" }}
            ></div>
          </div>
        </div>

        {/* CTA Section */}
        <section
          id="cta-section"
          className="relative flex justify-center mt-10 z-10"
        >
          <div className="bg-[#1A73E8] rounded-3xl shadow-lg px-10 py-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden w-full md:w-[60%]">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Ready to inspire more learners?
              </h2>
              <p className="text-white/90 text-lg mb-4">
                Share your insights and help more children grow with SkillSeed
                Reports!
              </p>
            </div>
            <button className="flex items-center px-8 py-3 rounded-full bg-[#FFC107] text-[#0A1F44] font-extrabold shadow-lg hover:bg-yellow-300 transition text-lg mt-2 md:mt-0">
              <FontAwesomeIcon icon={faPlus} className="mr-3" />
              Start New Report
            </button>
            <div className="absolute -top-7 -left-10 w-16 h-16 bg-[#FFC107]/20 rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#FFF]/20 rounded-full pointer-events-none"></div>
          </div>
        </section>
      </div>

      {/* Floating Decorative Bubbles */}
      <div
        className="fixed bottom-0 left-0 pointer-events-none z-0"
        id="floating-bubbles-left"
      >
        <div className="w-44 h-44 relative">
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FFC107] rounded-full opacity-20 animate-bounce"></div>
          <div
            className="absolute bottom-10 left-12 w-14 h-14 bg-[#1A73E8] rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "100ms" }}
          ></div>
          <div
            className="absolute bottom-20 left-8 w-10 h-10 bg-green-400 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "200ms" }}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default Reports;
