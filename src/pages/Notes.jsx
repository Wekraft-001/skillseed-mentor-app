import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faShareNodes,
  faPlus,
  faCalendarDay,
  faClock,
  faStar,
  faStarHalfAlt,
  faBookOpen,
  faCheckCircle,
  faPencilAlt,
  faTrashAlt,
  faLightbulb,
  faExclamationTriangle,
  faTrophy,
  faArrowUp,
  faEye,
  faLock,
  faInfoCircle,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const navigate = useNavigate();

  const studentInfo = {
    name: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&q=80&facepad=2",
    subject: "Mathematics",
    grade: "Grade 4",
    sessionDate: "30 May 2025",
    sessionTime: "2:00 PM - 3:00 PM",
    avgReview: 4.8,
    stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
  };

  const notesData = [
    {
      id: "note-card-1",
      icon: faBookOpen,
      iconBg: "bg-[#1A73E8]",
      iconRing: "ring-[#FFC107]",
      title: "Multiplication Tables Practice",
      status: "Completed",
      statusIcon: faCheckCircle,
      statusColor: "bg-green-100 text-green-700",
      content:
        "Sarah was enthusiastic and eager to learn. She solved 9 out of 10 multiplication problems correctly and even helped her friend with one of the exercises. Her focus and curiosity stood out during this session.",
    },
    {
      id: "note-card-2",
      icon: faLightbulb,
      iconBg: "bg-[#FFC107]",
      iconRing: "ring-[#1A73E8]",
      title: "Areas for Improvement",
      status: "Action Needed",
      statusIcon: faExclamationTriangle,
      statusColor: "bg-yellow-100 text-yellow-800",
      content:
        "Sarah sometimes gets confused with 7 and 8 times tables. Recommend more colorful flashcards and 5-minute daily practice to boost confidence and retention.",
    },
    {
      id: "note-card-3",
      icon: faTrophy,
      iconBg: "bg-green-400",
      iconRing: "ring-[#FFC107]",
      title: "Recommendations",
      status: "Progress",
      statusIcon: faArrowUp,
      statusColor: "bg-blue-100 text-blue-700",
      content:
        "Play multiplication bingo and reward correct answers with stickers. Encourage Sarah to create her own multiplication storybook for extra fun.",
    },
  ];

  return (
    <main
      id="view-notes-main"
      className="relative min-h-[900px] pb-20 pt-12 bg-[#F5F7FA]"
    >
      {/* Floating bubble decorations */}
      <div className="absolute -top-10 -left-12 z-0">
        <div className="w-40 h-40 bg-[#FFC107] rounded-full opacity-20 blur-xl"></div>
      </div>
      <div className="absolute top-24 left-16 z-0">
        <div className="w-20 h-20 bg-[#1A73E8] rounded-full opacity-20 blur-md"></div>
      </div>
      <div className="absolute top-1/2 left-0 z-0">
        <div className="w-14 h-14 bg-[#1A73E8] rounded-full opacity-10 blur"></div>
      </div>
      <div className="absolute bottom-36 right-16 z-0">
        <div className="w-24 h-24 bg-[#FFC107] rounded-full opacity-10 blur"></div>
      </div>
      <div className="absolute bottom-0 right-0 z-0">
        <div className="w-36 h-36 bg-[#1A73E8] rounded-full opacity-10 blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Page Heading */}
        <div
          id="view-notes-header"
          className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 sm:gap-0"
        >
          <div className="flex items-center gap-4">
            <button
              className="rounded-full bg-white shadow-md px-4 py-2 text-[#1A73E8] hover:bg-blue-50 transition-all"
              onClick={() => navigate(-1)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <h1
              className="text-3xl font-bold text-[#212121] leading-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Session Notes
            </h1>
            <div className="w-8 h-8 bg-[#FFC107] rounded-full opacity-25 animate-bounce"></div>
            <div
              className="w-6 h-6 bg-[#1A73E8] rounded-full opacity-25 animate-bounce"
              style={{ animationDelay: "180ms" }}
            ></div>
          </div>
          <div className="flex gap-3">
            <button className="rounded-full px-5 py-2 bg-[#FFC107] text-[#212121] font-semibold shadow-md hover:bg-yellow-200 transition-all flex items-center gap-2">
              <FontAwesomeIcon icon={faShareNodes} /> Share
            </button>
            <button className="rounded-full px-5 py-2 bg-[#1A73E8] text-white font-semibold shadow-md hover:bg-blue-600 transition-all flex items-center gap-2">
              <FontAwesomeIcon icon={faPlus} /> Add Note
            </button>
          </div>
        </div>

        {/* Student Info Card */}
        <div
          id="student-info-card"
          className="p-6 rounded-3xl bg-white shadow mb-8 flex flex-col md:flex-row items-center gap-8 border border-gray-100"
        >
          <img
            src={studentInfo.avatar}
            alt={`${studentInfo.name} Avatar`}
            className="w-24 h-24 rounded-full border-4 border-[#1A73E8] object-cover"
          />
          <div className="flex-1 min-w-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#212121]">
              {studentInfo.name}
            </h3>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-2">
              <span className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-xs font-semibold">
                {studentInfo.subject}
              </span>
              <span className="bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 text-xs font-semibold">
                {studentInfo.grade}
              </span>
              <span className="bg-pink-100 text-pink-600 rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1">
                <FontAwesomeIcon icon={faCalendarDay} />{" "}
                {studentInfo.sessionDate}
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <FontAwesomeIcon icon={faClock} className="text-[#1A73E8]" />
              <span className="text-gray-600 text-sm font-medium">
                {studentInfo.sessionTime}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 mt-4 md:mt-0">
            <div className="flex gap-1 mb-1">
              {studentInfo.stars.map((starIcon, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={starIcon}
                  className="text-[#FFC107]"
                />
              ))}
            </div>
            <span className="text-lg font-bold text-[#212121]">
              {studentInfo.avgReview.toFixed(1)}
            </span>
            <span className="text-xs text-gray-400 font-semibold">
              Avg. Review
            </span>
          </div>
        </div>

        {/* Notes Timeline */}
        <section
          id="notes-timeline-section"
          className="grid grid-cols-12 gap-8 relative"
        >
          <div className="col-span-12 md:col-span-8">
            <div id="notes-timeline" className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-2 bg-gradient-to-b from-[#1A73E8]/20 to-[#FFC107]/10 rounded-full"></div>
              <div className="space-y-10 pl-16">
                {notesData.map((note) => (
                  <div
                    key={note.id}
                    id={note.id}
                    className="relative flex gap-5"
                  >
                    <div className="absolute -left-[2.55rem] top-2.5">
                      <div
                        className={`w-10 h-10 ${note.iconBg} rounded-full flex items-center justify-center shadow-md border-4 border-white ring-2 ${note.iconRing}`}
                      >
                        <FontAwesomeIcon
                          icon={note.icon}
                          className="text-white text-xl"
                        />
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-2xl shadow p-6 border border-gray-100">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-[#212121] text-lg">
                          {note.title}
                        </h4>
                        <span
                          className={`text-xs ${note.statusColor} rounded-full px-3 py-1 font-semibold flex items-center gap-1`}
                        >
                          <FontAwesomeIcon icon={note.statusIcon} />{" "}
                          {note.status}
                        </span>
                      </div>
                      <p className="text-gray-600 my-2">{note.content}</p>
                      <div className="flex items-center gap-2 mt-4">
                        <button className="rounded-full px-4 py-2 bg-[#1A73E8] text-white text-sm font-semibold flex items-center gap-2 shadow hover:bg-blue-600 transition-all">
                          <FontAwesomeIcon icon={faPencilAlt} /> Edit
                        </button>
                        <button className="rounded-full px-4 py-2 bg-white text-[#1A73E8] border border-[#1A73E8] text-sm font-semibold flex items-center gap-2 hover:bg-blue-50 transition-all">
                          <FontAwesomeIcon icon={faTrashAlt} /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Add New Note Bubble Button */}
                <div id="add-note-bubble" className="flex justify-center mt-10">
                  <button className="w-16 h-16 rounded-full bg-[#1A73E8] flex items-center justify-center text-white text-3xl font-bold shadow-lg border-4 border-white hover:bg-[#FFC107] hover:text-[#212121] transition-all duration-200 ease-in-out">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Parent/School Visibility & Quick Info */}
          <aside id="quick-info-card" className="col-span-12 md:col-span-4">
            <div className="bg-white rounded-3xl shadow p-6 border border-gray-100 mb-8">
              <h3 className="font-bold text-[#212121] mb-2 text-lg flex items-center gap-2">
                <FontAwesomeIcon icon={faEye} className="text-[#1A73E8]" />{" "}
                Visibility
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-400"
                  />
                  <span>Visible to Student</span>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-400"
                  />
                  <span>Visible to Parent</span>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-400"
                  />
                  <span>Visible to School</span>
                </li>
              </ul>
              <div className="mt-6 text-sm text-gray-400">
                <FontAwesomeIcon icon={faLock} className="mr-1" /> Notes are
                only accessible to Sarah, her parents, and her school.
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow p-6 border border-gray-100">
              <h3 className="font-bold text-[#212121] mb-2 text-lg flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="text-[#FFC107]"
                />{" "}
                Session Details
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faClock} className="text-[#1A73E8]" />
                  <span>Duration: 1 hour</span>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCalendarDay}
                    className="text-[#FFC107]"
                  />
                  <span>Date: 30 May 2025</span>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faUserGraduate}
                    className="text-green-400"
                  />
                  <span>Mentor: Dr. James Wilson</span>
                </li>
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
};

export default Notes;
