import React, { useState } from "react";
import {
  Calendar,
  Plus,
  Clock,
  Check,
  Video,
  FileText,
  ChevronDown,
  CalendarDays,
  Heart,
  Calculator,
  Book,
  Beaker,
} from "lucide-react";
import { PageMetadata } from "../components/PageMetadata";
import CreateAvailabilityModal from "../components/modals/CreateAvailability";
import ViewNotesModal from "../components/modals/ViewNotesModal";

const ScheduleSession = () => {
  const [showCreateAvailability, setShowCreateAvailability] = useState(false);
  const [showViewNotes, setShowViewNotes] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [visibleBookings, setVisibleBookings] = useState(4);
  const [weekFilter, setWeekFilter] = useState("This Week");

  const allBookings = [
    {
      id: "1",
      studentName: "Emma Johnson",
      studentAvatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      subject: "Creative Arts",
      grade: "Grade 3",
      date: "March 18, 2025 (Tuesday)",
      time: "3:00 PM - 4:00 PM",
      topic: "Drawing & Painting Basics",
      status: "pending",
      note: "Emma loves drawing and would like to learn proper techniques. She's excited about this session!",
      tags: ["New Request"],
    },
    {
      id: "2",
      studentName: "Sophie Chen",
      studentAvatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
      subject: "Mathematics",
      grade: "Grade 4",
      date: "March 16, 2025 (Tomorrow)",
      time: "2:00 PM - 3:00 PM",
      topic: "Multiplication Tables Practice",
      status: "confirmed",
      note: "Review 6-9 times tables and introduce division concepts through fun games and activities.",
      tags: ["Tomorrow"],
    },
    {
      id: "3",
      studentName: "Lily Parker",
      studentAvatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
      subject: "English Literature",
      grade: "Grade 2",
      date: "March 20, 2025 (Thursday)",
      time: "4:30 PM - 5:30 PM",
      topic: "Story Reading & Comprehension",
      status: "pending",
      note: "Part of a weekly reading program. Lily is working on improving her reading fluency and vocabulary.",
      tags: ["Recurring"],
    },
    {
      id: "4",
      studentName: "Max Thompson",
      studentAvatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
      subject: "Science",
      grade: "Grade 5",
      date: "March 14, 2025 (Yesterday)",
      time: "1:00 PM - 2:00 PM",
      topic: "Solar System Exploration",
      status: "completed",
      note: "Great session! Max learned about planets and their characteristics. Notes have been shared with parents.",
      tags: ["Yesterday"],
    },
    {
      id: "5",
      studentName: "Oliver Davis",
      studentAvatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
      subject: "Physics",
      grade: "Grade 6",
      date: "March 22, 2025 (Friday)",
      time: "5:00 PM - 6:00 PM",
      topic: "Basic Physics Concepts",
      status: "confirmed",
      note: "Introduction to forces and motion through interactive experiments.",
      tags: ["This Week"],
    },
    {
      id: "6",
      studentName: "Ava Wilson",
      studentAvatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
      subject: "History",
      grade: "Grade 4",
      date: "March 19, 2025 (Wednesday)",
      time: "3:30 PM - 4:30 PM",
      topic: "Ancient Civilizations",
      status: "pending",
      note: "Exploring ancient Egypt and its fascinating culture.",
      tags: ["New Request"],
    },
  ];

  const filteredBookings = allBookings.filter((booking) => {
    if (activeTab === "all") return true;
    return booking.status === activeTab;
  });

  const displayedBookings = filteredBookings.slice(0, visibleBookings);

  const handleViewNotes = (studentData) => {
    setSelectedStudent(studentData);
    setShowViewNotes(true);
  };

  const handleAccept = (bookingId) => {
    alert(
      `Booking ${bookingId} has been accepted! The student and parent will be notified.`
    );
  };

  const handleReschedule = (bookingId) => {
    alert(
      `Rescheduling booking ${bookingId}. A calendar will open to select new time slots.`
    );
  };

  const handleJoinSession = (bookingId) => {
    alert(`Joining session ${bookingId}. Opening video call platform...`);
  };

  const handleLoadMore = () => {
    setVisibleBookings((prev) => prev + 4);
  };

  const toggleWeekFilter = () => {
    const options = ["This Week", "Next Week", "This Month", "All Time"];
    const currentIndex = options.indexOf(weekFilter);
    const nextIndex = (currentIndex + 1) % options.length;
    setWeekFilter(options[nextIndex]);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="text-white w-3 h-3" />;
      case "confirmed":
        return <Check className="text-white w-3 h-3" />;
      case "completed":
        return <Check className="text-white w-3 h-3" />;
      default:
        return <Clock className="text-white w-3 h-3" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-orange-400";
      case "confirmed":
        return "bg-green-500";
      case "completed":
        return "bg-gray-500";
      default:
        return "bg-orange-400";
    }
  };

  const getSubjectIcon = (subject) => {
    switch (subject.toLowerCase()) {
      case "creative arts":
        return <Heart className="text-pink-500 w-4 h-4" />;
      case "mathematics":
        return <Calculator className="text-[#FFC107] w-4 h-4" />;
      case "english literature":
        return <Book className="text-purple-500 w-4 h-4" />;
      case "science":
        return <Beaker className="text-green-500 w-4 h-4" />;
      case "physics":
        return <Beaker className="text-blue-500 w-4 h-4" />;
      case "history":
        return <Book className="text-orange-500 w-4 h-4" />;
      default:
        return <Book className="text-gray-500 w-4 h-4" />;
    }
  };

  return (
    <>
      <PageMetadata
        title="Session Bookings | SkillSeed"
        description="View and manage your session bookings"
      />
      <main className="bg-[#F5F7FA] py-12">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div
            id="page-header"
            className="flex justify-between items-center mb-8"
          >
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold text-[#212121]">
                Session Bookings
              </h1>
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
              <button
                onClick={toggleWeekFilter}
                className="px-6 py-3 rounded-full bg-white text-[#212121] border hover:border-[#1A73E8] shadow-sm"
              >
                <Calendar className="w-4 h-4 mr-2 inline" />
                {weekFilter}
              </button>
              <button
                onClick={() => setShowCreateAvailability(true)}
                className="px-6 py-3 rounded-full bg-[#1A73E8] text-white hover:bg-blue-600 shadow-sm"
              >
                <Plus className="w-4 h-4 mr-2 inline" />
                Create Availability
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div id="filter-tabs" className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-3 rounded-full shadow-sm ${
                activeTab === "all"
                  ? "bg-[#1A73E8] text-white"
                  : "bg-white text-[#212121] hover:bg-blue-50"
              }`}
            >
              All Bookings
            </button>
            <button
              onClick={() => setActiveTab("pending")}
              className={`px-6 py-3 rounded-full shadow-sm ${
                activeTab === "pending"
                  ? "bg-[#1A73E8] text-white"
                  : "bg-white text-[#212121] hover:bg-blue-50"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab("confirmed")}
              className={`px-6 py-3 rounded-full shadow-sm ${
                activeTab === "confirmed"
                  ? "bg-[#1A73E8] text-white"
                  : "bg-white text-[#212121] hover:bg-blue-50"
              }`}
            >
              Confirmed
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-6 py-3 rounded-full shadow-sm ${
                activeTab === "completed"
                  ? "bg-[#1A73E8] text-white"
                  : "bg-white text-[#212121] hover:bg-blue-50"
              }`}
            >
              Completed
            </button>
          </div>

          {/* Booking Cards Grid */}
          <div
            id="bookings-grid"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {displayedBookings.map((booking) => (
              <div
                key={booking.id}
                className={`bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all ${
                  booking.status === "completed" ? "opacity-75" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={booking.studentAvatar}
                        alt={booking.studentName}
                        className={`w-16 h-16 rounded-full border-4 ${
                          booking.status === "pending"
                            ? "border-pink-100"
                            : booking.status === "confirmed"
                            ? "border-green-100"
                            : "border-gray-200"
                        }`}
                      />
                      <div
                        className={`absolute -top-1 -right-1 w-6 h-6 ${getStatusColor(
                          booking.status
                        )} rounded-full flex items-center justify-center`}
                      >
                        {getStatusIcon(booking.status)}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#212121]">
                        {booking.studentName.split(" ")[0]}'s{" "}
                        {booking.subject.includes("Arts")
                          ? "Art Session"
                          : booking.subject.includes("Math")
                          ? "Math Fun"
                          : booking.subject.includes("English")
                          ? "Reading Club"
                          : booking.subject.includes("Science") ||
                            booking.subject.includes("Physics")
                          ? "Science Lab"
                          : "Learning Session"}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {booking.grade} • {booking.subject}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            booking.status === "pending"
                              ? "bg-orange-100 text-orange-700"
                              : booking.status === "confirmed"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {booking.status.charAt(0).toUpperCase() +
                            booking.status.slice(1)}
                        </span>
                        {booking.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-xs ${
                              tag === "New Request"
                                ? "bg-pink-100 text-pink-700"
                                : tag === "Tomorrow"
                                ? "bg-blue-100 text-blue-700"
                                : tag === "Recurring"
                                ? "bg-purple-100 text-purple-700"
                                : tag === "Yesterday"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CalendarDays
                      className={`w-4 h-4 ${
                        booking.status === "completed"
                          ? "text-gray-500"
                          : "text-[#1A73E8]"
                      }`}
                    />
                    <span className="text-sm text-gray-700">
                      {booking.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock
                      className={`w-4 h-4 ${
                        booking.status === "completed"
                          ? "text-gray-500"
                          : "text-[#1A73E8]"
                      }`}
                    />
                    <span className="text-sm text-gray-700">
                      {booking.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {getSubjectIcon(booking.subject)}
                    <span className="text-sm text-gray-700">
                      {booking.topic}
                    </span>
                  </div>
                </div>

                <div
                  className={`p-4 rounded-2xl mb-4 ${
                    booking.status === "pending"
                      ? "bg-blue-50"
                      : booking.status === "confirmed"
                      ? "bg-green-50"
                      : "bg-gray-50"
                  }`}
                >
                  <h4 className="font-semibold text-sm text-[#212121] mb-2">
                    {booking.status === "pending"
                      ? "Parent's Note:"
                      : booking.status === "confirmed"
                      ? "Session Focus:"
                      : "Session Summary:"}
                  </h4>
                  <p className="text-sm text-gray-600">{booking.note}</p>
                </div>

                <div className="flex gap-3">
                  {booking.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleAccept(booking.id)}
                        className="flex-1 px-4 py-3 rounded-full bg-[#1A73E8] text-white hover:bg-blue-600 shadow-sm font-medium"
                      >
                        <Check className="w-4 h-4 mr-2 inline" />
                        Accept
                      </button>
                      <button
                        onClick={() => handleReschedule(booking.id)}
                        className="flex-1 px-4 py-3 rounded-full border-2 border-[#1A73E8] text-[#1A73E8] hover:bg-blue-50 font-medium"
                      >
                        <Calendar className="w-4 h-4 mr-2 inline" />
                        Reschedule
                      </button>
                    </>
                  )}
                  {booking.status === "confirmed" && (
                    <>
                      <button
                        onClick={() => handleJoinSession(booking.id)}
                        className="flex-1 px-4 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 shadow-sm font-medium"
                      >
                        <Video className="w-4 h-4 mr-2 inline" />
                        Join Session
                      </button>
                      <button
                        onClick={() =>
                          handleViewNotes({
                            name: booking.studentName,
                            avatar: booking.studentAvatar,
                            subject: booking.subject,
                            grade: booking.grade,
                          })
                        }
                        className="flex-1 px-4 py-3 rounded-full border-2 border-green-500 text-green-600 hover:bg-green-50 font-medium"
                      >
                        <FileText className="w-4 h-4 mr-2 inline" />
                        View Notes
                      </button>
                    </>
                  )}
                  {booking.status === "completed" && (
                    <>
                      <button className="flex-1 px-4 py-3 rounded-full bg-gray-200 text-gray-600 font-medium cursor-not-allowed">
                        <Check className="w-4 h-4 mr-2 inline" />
                        Completed
                      </button>
                      <button
                        onClick={() =>
                          handleViewNotes({
                            name: booking.studentName,
                            avatar: booking.studentAvatar,
                            subject: booking.subject,
                            grade: booking.grade,
                          })
                        }
                        className="flex-1 px-4 py-3 rounded-full border-2 border-gray-300 text-gray-600 hover:bg-gray-50 font-medium"
                      >
                        <FileText className="w-4 h-4 mr-2 inline" />
                        View Notes
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleBookings < filteredBookings.length && (
            <div id="load-more" className="text-center mt-8">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 rounded-full bg-white text-[#1A73E8] border-2 border-[#1A73E8] hover:bg-blue-50 shadow-sm font-medium"
              >
                <ChevronDown className="w-4 h-4 mr-2 inline" />
                Load More Bookings
              </button>
            </div>
          )}
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
      </main>

      {/* Modals */}
      <CreateAvailabilityModal
        isOpen={showCreateAvailability}
        onClose={() => setShowCreateAvailability(false)}
      />

      {selectedStudent && (
        <ViewNotesModal
          isOpen={showViewNotes}
          onClose={() => setShowViewNotes(false)}
          studentName={selectedStudent.name}
          studentAvatar={selectedStudent.avatar}
          subject={selectedStudent.subject}
          grade={selectedStudent.grade}
        />
      )}
    </>
  );
};

export default ScheduleSession;
