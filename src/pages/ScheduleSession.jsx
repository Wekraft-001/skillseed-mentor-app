import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarPlus,
  faArrowLeft,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ScheduleSession = () => {
  const navigate = useNavigate();
  const [selectedMentee, setSelectedMentee] = useState("Sarah"); // Default selected mentee
  const formRef = useRef(null);
  const menteeButtonsRef = useRef(null);

  const mentees = [
    {
      name: "Sarah",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
      statusColor: "bg-green-300",
    },
    {
      name: "Mike",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
      statusColor: "bg-blue-300",
    },
    {
      name: "Mona",
      avatar:
        "https://images.pexels.com/photos/5148662/pexels-photo-5148662.jpeg?auto=compress&w=128&q=80",
      statusColor: "bg-pink-200",
    },
  ];

  useEffect(() => {
    const handleFormSubmit = (e) => {
      e.preventDefault();
      alert("Session Scheduled! 🌱");
      navigate("/"); // Navigate to dashboard or a confirmation page
    };

    const currentFormRef = formRef.current;
    if (currentFormRef) {
      currentFormRef.addEventListener("submit", handleFormSubmit);
    }

    return () => {
      if (currentFormRef) {
        currentFormRef.removeEventListener("submit", handleFormSubmit);
      }
    };
  }, [navigate]);

  const handleMenteeSelect = (menteeName) => {
    setSelectedMentee(menteeName);
  };

  return (
    <>
      {/* Bubbles Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div
          className="absolute left-12 top-40 w-24 h-24 bg-[#1A73E8] opacity-20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "500ms" }}
        ></div>
        <div className="absolute right-36 top-10 w-14 h-14 bg-[#FFC107] opacity-30 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute right-16 bottom-72 w-20 h-20 bg-[#1A73E8] opacity-10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute left-1/2 bottom-16 w-32 h-32 bg-[#FFC107] opacity-10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute left-1/3 top-1/4 w-10 h-10 bg-[#1A73E8] opacity-20 rounded-full blur-sm animate-bounce"></div>
      </div>

      <main
        id="main-schedule-session"
        className="relative z-10 bg-[#F5F7FA] min-h-screen"
      >
        <div className="container mx-auto px-6 py-12 max-w-3xl">
          <div
            id="schedule-session-header"
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-14 h-14 bg-[#1A73E8] rounded-full flex items-center justify-center shadow-lg border-4 border-[#FFC107]">
              <FontAwesomeIcon
                icon={faCalendarPlus}
                className="text-white text-2xl"
              />
            </div>
            <div>
              <h1
                className="text-3xl font-extrabold text-[#212121] leading-tight mb-1"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Schedule a Session
              </h1>
              <p className="text-md text-gray-600 font-medium">
                Plan your next fun learning adventure!
              </p>
            </div>
          </div>

          <form
            ref={formRef}
            id="schedule-session-form"
            className="bg-white rounded-3xl shadow-xl px-10 py-10 space-y-8 relative overflow-visible"
          >
            {/* "Baby" avatar floating on card */}
            <div className="absolute -right-16 -top-8 z-20">
              <img
                src="https://images.pexels.com/photos/416161/pexels-photo-416161.jpeg?auto=compress&w=128&q=80"
                alt="Decorative Avatar"
                className="w-24 h-24 rounded-full border-4 border-[#FFC107] shadow-lg object-cover ring ring-[#1A73E8] ring-offset-4"
              />
            </div>

            <div id="select-mentee-block" className="flex flex-col gap-1">
              <label
                htmlFor="mentee"
                className="font-semibold text-lg text-[#1A73E8] mb-1"
              >
                Select Student
              </label>
              <div ref={menteeButtonsRef} className="flex gap-4 flex-wrap">
                {mentees.map((mentee) => (
                  <button
                    key={mentee.name}
                    type="button"
                    onClick={() => handleMenteeSelect(mentee.name)}
                    className={`rounded-full border-4 hover:border-[#FFC107] transition p-0 bg-white shadow-md flex flex-col items-center w-20 h-20 focus:outline-none focus:ring-2 focus:ring-[#FFC107] relative ${
                      selectedMentee === mentee.name
                        ? "border-[#1A73E8]"
                        : "border-gray-100"
                    }`}
                  >
                    <img
                      src={mentee.avatar}
                      alt={mentee.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <span className="text-xs text-[#212121] font-medium mt-1">
                      {mentee.name}
                    </span>
                    <span
                      className={`absolute top-2 right-2 w-3 h-3 ${mentee.statusColor} rounded-full border border-white`}
                    ></span>
                  </button>
                ))}
              </div>
            </div>

            <div id="subject-topic-block" className="flex flex-col gap-1">
              <label
                htmlFor="subject"
                className="font-semibold text-lg text-[#1A73E8] mb-1"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="rounded-full py-3 px-5 border border-gray-200 focus:border-[#1A73E8] text-[#212121] font-medium text-base shadow transition w-full outline-none bg-gray-50"
              >
                <option>Mathematics</option>
                <option>Science</option>
                <option>Reading</option>
                <option>Arts & Crafts</option>
                <option>Music</option>
              </select>
            </div>

            <div
              id="session-details-block"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label
                  htmlFor="date"
                  className="font-semibold text-lg text-[#1A73E8] mb-1"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="rounded-full py-3 px-5 border border-gray-200 focus:border-[#1A73E8] text-[#212121] font-medium text-base shadow transition w-full outline-none bg-gray-50"
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="font-semibold text-lg text-[#1A73E8] mb-1"
                >
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="rounded-full py-3 px-5 border border-gray-200 focus:border-[#1A73E8] text-[#212121] font-medium text-base shadow transition w-full outline-none bg-gray-50"
                />
              </div>
            </div>

            <div id="duration-block" className="flex flex-col gap-1">
              <label
                htmlFor="duration"
                className="font-semibold text-lg text-[#1A73E8] mb-1"
              >
                Duration
              </label>
              <select
                id="duration"
                name="duration"
                className="rounded-full py-3 px-5 border border-gray-200 focus:border-[#1A73E8] text-[#212121] font-medium text-base shadow transition w-full outline-none bg-gray-50"
              >
                <option>30 mins</option>
                <option>45 mins</option>
                <option>60 mins</option>
              </select>
            </div>

            <div id="session-note-block" className="flex flex-col gap-1">
              <label
                htmlFor="notes"
                className="font-semibold text-lg text-[#1A73E8] mb-1"
              >
                Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={2}
                placeholder="Share ideas for a fun session, e.g., 'Let's play a numbers game!'"
                className="rounded-2xl py-3 px-5 border border-gray-200 focus:border-[#1A73E8] text-[#212121] font-medium text-base shadow transition w-full outline-none bg-gray-50 resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[#1A73E8] text-[#1A73E8] font-bold bg-white hover:bg-blue-50 transition-all shadow-sm text-lg w-full sm:w-auto justify-center"
              >
                <FontAwesomeIcon icon={faArrowLeft} /> Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-10 py-3 rounded-full bg-[#1A73E8] text-white font-bold text-lg shadow-xl hover:bg-blue-700 transition-all w-full sm:w-auto justify-center"
              >
                <FontAwesomeIcon icon={faPaperPlane} /> Schedule Session
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Decorative Bubbles Bottom Right */}
      <div
        id="footer-bubbles"
        className="fixed bottom-0 right-0 pointer-events-none z-0"
      >
        <div className="w-72 h-72 relative">
          <div className="absolute bottom-0 right-0 w-36 h-36 bg-[#FFC107] rounded-full opacity-10 animate-bounce"></div>
          <div
            className="absolute bottom-12 right-16 w-20 h-20 bg-[#1A73E8] rounded-full opacity-10 animate-bounce"
            style={{ animationDelay: "200ms" }}
          ></div>
          <div
            className="absolute bottom-24 right-8 w-16 h-16 bg-green-400 rounded-full opacity-10 animate-bounce"
            style={{ animationDelay: "400ms" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ScheduleSession;
