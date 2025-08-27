import React, { useState } from "react";
import {
  Search,
  Plus,
  Users,
  FileText,
  Star,
  Calendar,
  Heart,
  Calculator,
  Book,
  Beaker,
  Eye,
} from "lucide-react";
import { PageMetadata } from "../components/PageMetadata";
import { useNavigate } from "react-router-dom";
import AddNoteModal from "../components/modals/AddNoteModal";

const Notes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddNote, setShowAddNote] = useState(false);
  const navigate = useNavigate();

  const menteeData = [
    {
      id: "emma-johnson",
      name: "Emma Johnson",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      grade: "Grade 3",
      subject: "Creative Arts",
      tags: ["Drawing", "Painting"],
      lastSession: "March 14, 2025",
      latestNote:
        "Emma showed excellent progress in color mixing today. She created a beautiful landscape painting and demonstrated good understanding of warm and cool colors...",
      noteDate: "March 14, 2025 • 4:30 PM",
      icon: Heart,
      color: "pink",
    },
    {
      id: "sophie-chen",
      name: "Sophie Chen",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
      grade: "Grade 4",
      subject: "Mathematics",
      tags: ["Multiplication", "Division"],
      lastSession: "March 15, 2025",
      latestNote:
        "Sophie mastered the 7 and 8 times tables today! She's ready to move on to 9s. Her confidence in math is growing significantly...",
      noteDate: "March 15, 2025 • 2:15 PM",
      icon: Calculator,
      color: "green",
    },
    {
      id: "lily-martinez",
      name: "Lily Martinez",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
      grade: "Grade 2",
      subject: "English Literature",
      tags: ["Reading", "Vocabulary"],
      lastSession: "March 13, 2025",
      latestNote:
        'Lily read "The Little Red Hen" fluently today. She\'s improving her comprehension skills and can answer questions about the story...',
      noteDate: "March 13, 2025 • 4:45 PM",
      icon: Book,
      color: "purple",
    },
    {
      id: "max-thompson",
      name: "Max Thompson",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
      grade: "Grade 5",
      subject: "Science",
      tags: ["Physics", "Biology"],
      lastSession: "March 14, 2025",
      latestNote:
        "Max showed great curiosity about the solar system. He asked insightful questions about planet sizes and distances. Recommend space documentaries...",
      noteDate: "March 14, 2025 • 1:30 PM",
      icon: Beaker,
      color: "blue",
    },
  ];

  const filteredMentees = menteeData.filter(
    (mentee) =>
      mentee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentee.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentee.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const handleViewAllNotes = (menteeId) => {
    navigate(`/mentee-notes/${menteeId}`);
  };

  const getColorClasses = (color) => {
    const colorMap = {
      pink: {
        bg: "bg-pink-50",
        border: "border-pink-100",
        button: "bg-pink-500 hover:bg-pink-600",
        buttonBorder: "border-pink-500 text-pink-600 hover:bg-pink-50",
        iconBg: "bg-pink-400",
        tag1: "bg-pink-100 text-pink-700",
        tag2: "bg-purple-100 text-purple-700",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-100",
        button: "bg-green-500 hover:bg-green-600",
        buttonBorder: "border-green-500 text-green-600 hover:bg-green-50",
        iconBg: "bg-green-500",
        tag1: "bg-green-100 text-green-700",
        tag2: "bg-blue-100 text-blue-700",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-100",
        button: "bg-purple-500 hover:bg-purple-600",
        buttonBorder: "border-purple-500 text-purple-600 hover:bg-purple-50",
        iconBg: "bg-purple-500",
        tag1: "bg-purple-100 text-purple-700",
        tag2: "bg-yellow-100 text-yellow-700",
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-100",
        button: "bg-blue-500 hover:bg-blue-600",
        buttonBorder: "border-blue-500 text-blue-600 hover:bg-blue-50",
        iconBg: "bg-blue-500",
        tag1: "bg-blue-100 text-blue-700",
        tag2: "bg-green-100 text-green-700",
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <>
      <PageMetadata
        title="My Mentee Notes | SkillSeed"
        description="Manage and view notes for all your mentees"
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
                My Mentee Notes
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
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-6 py-3 pl-10 rounded-full bg-white text-[#212121] border hover:border-[#1A73E8] shadow-sm focus:outline-none focus:border-[#1A73E8]"
                />
              </div>
              <button
                onClick={() => setShowAddNote(true)}
                className="px-6 py-3 rounded-full bg-[#1A73E8] text-white hover:bg-blue-600 shadow-sm"
              >
                <Plus className="w-4 h-4 mr-2 inline" />
                Add New Note
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div
            id="stats-section"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                  <Users className="text-pink-500 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#212121]">
                    {filteredMentees.length}
                  </h3>
                  <p className="text-gray-600">
                    {searchQuery ? "Matching Mentees" : "Active Mentees"}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="text-[#1A73E8] w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#212121]">47</h3>
                  <p className="text-gray-600">Total Notes</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="text-[#FFC107] w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#212121]">8</h3>
                  <p className="text-gray-600">This Week</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredMentees.length} result
                {filteredMentees.length !== 1 ? "s" : ""} found for "
                {searchQuery}"
              </p>
            </div>
          )}

          {/* Mentee Cards Grid */}
          <div
            id="mentees-grid"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {filteredMentees.map((mentee) => {
              const colors = getColorClasses(mentee.color);
              const IconComponent = mentee.icon;

              return (
                <div
                  key={mentee.id}
                  className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      <img
                        src={mentee.avatar}
                        alt={mentee.name}
                        className={`w-20 h-20 rounded-full border-4 ${colors.border}`}
                      />
                      <div
                        className={`absolute -top-2 -right-2 w-8 h-8 ${colors.iconBg} rounded-full flex items-center justify-center`}
                      >
                        <IconComponent className="text-white w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#212121]">
                        {mentee.name}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {mentee.grade} • {mentee.subject}
                      </p>
                      <div className="flex gap-2 mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${colors.tag1}`}
                        >
                          {mentee.tags[0]}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${colors.tag2}`}
                        >
                          {mentee.tags[1]}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="text-[#FFC107] w-4 h-4" />
                        <span>Last session: {mentee.lastSession}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`${colors.bg} p-4 rounded-2xl mb-4`}>
                    <h4 className="font-semibold text-sm text-[#212121] mb-2">
                      Latest Note:
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {mentee.latestNote}
                    </p>
                    <div className="text-xs text-gray-500">
                      {mentee.noteDate}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowAddNote(true)}
                      className={`flex-1 px-4 py-3 rounded-full ${colors.button} text-white shadow-sm font-medium`}
                    >
                      <Plus className="w-4 h-4 mr-2 inline" />
                      Add Note
                    </button>
                    <button
                      onClick={() => handleViewAllNotes(mentee.id)}
                      className={`flex-1 px-4 py-3 rounded-full border-2 ${colors.buttonBorder} font-medium`}
                    >
                      <Eye className="w-4 h-4 mr-2 inline" />
                      View All Notes
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredMentees.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-[#212121] mb-2">
                No mentees found
              </h3>
              <p className="text-gray-600">
                Try searching with different keywords or check your spelling.
              </p>
            </div>
          )}

          {/* Load More Button */}
          {!searchQuery && filteredMentees.length > 0 && (
            <div id="load-more" className="text-center mt-8">
              <button className="px-8 py-3 rounded-full bg-white text-[#1A73E8] border-2 border-[#1A73E8] hover:bg-blue-50 shadow-sm font-medium">
                <Users className="w-4 h-4 mr-2 inline" />
                Show More Mentees
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

      {/* Add Note Modal */}
      <AddNoteModal
        isOpen={showAddNote}
        onClose={() => setShowAddNote(false)}
      />
    </>
  );
};

export default Notes;
