import React, { useState } from "react";
import {
  ChevronRight,
  Filter,
  Plus,
  FileText,
  Calendar,
  Star,
  Clock,
  Edit,
  Trash,
  Palette,
  Brush,
  Pencil,
  Heart,
  ChevronDown,
} from "lucide-react";
import { PageMetadata } from "../components/PageMetadata";
import { useNavigate } from "react-router-dom";
import AddNoteModal from "../components/modals/AddNoteModal";

const MenteeNoteDetails = () => {
  const [showAddNote, setShowAddNote] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filterBy, setFilterBy] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const navigate = useNavigate();

  const allNotes = [
    {
      id: "1",
      title: "Color Mixing Progress",
      date: "March 15, 2025 • 4:30 PM",
      session: "Session #12",
      content:
        "Emma showed excellent progress in color mixing today. She created a beautiful landscape painting and demonstrated good understanding of warm and cool colors. Her brush control has improved significantly since our last session. She was particularly excited about creating purple by mixing red and blue.",
      tags: ["Excellent Progress", "Color Theory", "Brush Control"],
      rating: 5,
      duration: "45 minutes",
      icon: <Palette className="text-pink-500 w-5 h-5" />,
      bgColor: "bg-pink-100",
    },
    {
      id: "2",
      title: "First Watercolor Attempt",
      date: "March 12, 2025 • 3:15 PM",
      session: "Session #11",
      content:
        "Today Emma tried watercolors for the first time. She was initially hesitant but quickly became fascinated with how the colors blend on wet paper. She painted a simple flower and was amazed by the transparency effects. Need to work on water control in next session.",
      tags: ["Good Progress", "Watercolor", "First Time"],
      rating: 4,
      duration: "40 minutes",
      icon: <Brush className="text-purple-500 w-5 h-5" />,
      bgColor: "bg-purple-100",
    },
    {
      id: "3",
      title: "Drawing Fundamentals",
      date: "March 8, 2025 • 4:00 PM",
      session: "Session #10",
      content:
        "Emma practiced basic shapes and shading techniques. She's getting better at understanding light and shadow. Her circle drawing has improved dramatically - they're much rounder now! She completed 3 still life sketches of fruits.",
      tags: ["Great Improvement", "Shading", "Still Life"],
      rating: 4,
      duration: "40 minutes",
      icon: <Pencil className="text-green-500 w-5 h-5" />,
      bgColor: "bg-green-100",
    },
    {
      id: "4",
      title: "Creative Expression Session",
      date: "March 5, 2025 • 3:30 PM",
      session: "Session #9",
      content:
        "Free drawing session where Emma could express her creativity. She drew her family and pets with lots of details and colors. Her storytelling through art is developing well. She explained each character's personality through her drawings.",
      tags: ["Creative", "Storytelling", "Family Art"],
      rating: 5,
      duration: "45 minutes",
      icon: <Heart className="text-blue-500 w-5 h-5" />,
      bgColor: "bg-blue-100",
    },
    {
      id: "5",
      title: "Basic Sketching Techniques",
      date: "March 1, 2025 • 4:15 PM",
      session: "Session #8",
      content:
        "Introduced Emma to basic pencil sketching techniques. She learned about different pencil grades and how to use them effectively. Her line work is becoming more confident.",
      tags: ["Basic Skills", "Pencil Work", "Techniques"],
      rating: 4,
      duration: "40 minutes",
      icon: <Pencil className="text-gray-500 w-5 h-5" />,
      bgColor: "bg-gray-100",
    },
  ];

  const filteredAndSortedNotes = () => {
    let filtered = allNotes;

    // Apply filters
    if (filterBy === "high-rating") {
      filtered = filtered.filter((note) => note.rating >= 5);
    } else if (filterBy === "recent") {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      filtered = filtered.filter((note) => new Date(note.date) >= oneWeekAgo);
    } else if (filterBy === "excellent") {
      filtered = filtered.filter((note) =>
        note.tags.some((tag) => tag.toLowerCase().includes("excellent"))
      );
    }

    // Apply sorting
    if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "duration") {
      filtered.sort((a, b) => {
        const aDuration = parseInt(a.duration);
        const bDuration = parseInt(b.duration);
        return bDuration - aDuration;
      });
    }
    // Default is by date (already sorted)

    return filtered;
  };

  const handleFilterChange = (newFilter) => {
    setFilterBy(newFilter);
    setShowFilter(false);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setShowFilter(false);
  };

  return (
    <>
      <PageMetadata
        title="Emma Johnson's Notes | SkillSeed"
        description="Detailed notes for Emma Johnson's learning sessions"
      />
      <main className="bg-[#F5F7FA] py-12">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <div id="breadcrumb" className="flex items-center gap-2 mb-6">
            <button
              onClick={() => navigate("/mentee-notes")}
              className="text-[#1A73E8] cursor-pointer hover:underline"
            >
              Notes
            </button>
            <ChevronRight className="text-gray-400 w-4 h-4" />
            <span className="text-gray-600">Emma Johnson</span>
          </div>

          {/* Page Header */}
          <div
            id="page-header"
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8"
          >
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                  alt="Emma"
                  className="w-24 h-24 rounded-full border-4 border-pink-200"
                />
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center">
                  <Heart className="text-white w-5 h-5" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-[#212121] mb-2">
                  Emma Johnson's Notes
                </h1>
                <p className="text-gray-600 mb-2">Grade 3 • Creative Arts</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-pink-100 text-xs text-pink-700 font-medium">
                    Drawing
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-xs text-purple-700">
                    Painting
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className="px-6 py-3 rounded-full bg-white text-[#212121] border hover:border-[#1A73E8] shadow-sm"
                >
                  <Filter className="w-4 h-4 mr-2 inline" />
                  Filter
                </button>

                {showFilter && (
                  <div className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-lg border p-4 z-10 min-w-[200px]">
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-[#212121] mb-2">
                        Filter by:
                      </h4>
                      <div className="space-y-2">
                        <button
                          onClick={() => handleFilterChange("all")}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                            filterBy === "all"
                              ? "bg-blue-100 text-blue-700"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          All Notes
                        </button>
                        <button
                          onClick={() => handleFilterChange("high-rating")}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                            filterBy === "high-rating"
                              ? "bg-blue-100 text-blue-700"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          High Rating (5★)
                        </button>
                        <button
                          onClick={() => handleFilterChange("recent")}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                            filterBy === "recent"
                              ? "bg-blue-100 text-blue-700"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          Recent (Last Week)
                        </button>
                        <button
                          onClick={() => handleFilterChange("excellent")}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                            filterBy === "excellent"
                              ? "bg-blue-100 text-blue-700"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          Excellent Progress
                        </button>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-[#212121] mb-2">
                        Sort by:
                      </h4>
                      <div className="space-y-2">
                        <button
                          onClick={() => handleSortChange("date")}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                            sortBy === "date"
                              ? "bg-blue-100 text-blue-700"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          Date (Newest)
                        </button>
                        <button
                          onClick={() => handleSortChange("rating")}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                            sortBy === "rating"
                              ? "bg-blue-100 text-blue-700"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          Rating (Highest)
                        </button>
                        <button
                          onClick={() => handleSortChange("duration")}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                            sortBy === "duration"
                              ? "bg-blue-100 text-blue-700"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          Duration (Longest)
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => setShowAddNote(true)}
                className="px-6 py-3 rounded-full bg-[#1A73E8] text-white hover:bg-blue-600 shadow-sm"
              >
                <Plus className="w-4 h-4 mr-2 inline" />
                Add Note
              </button>
            </div>
          </div>

          {/* Stats */}
          <div
            id="stats-section"
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <FileText className="text-pink-500 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#212121]">15</h3>
                  <p className="text-sm text-gray-600">Total Notes</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Calendar className="text-green-500 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#212121]">8</h3>
                  <p className="text-sm text-gray-600">This Month</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="text-blue-500 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#212121]">4.8</h3>
                  <p className="text-sm text-gray-600">Avg Rating</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="text-yellow-500 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#212121]">12h</h3>
                  <p className="text-sm text-gray-600">Total Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Notes Timeline */}
          <div id="notes-timeline" className="space-y-6">
            {filteredAndSortedNotes().map((note) => (
              <div
                key={note.id}
                className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${note.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    {note.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-[#212121]">
                          {note.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {note.date} • {note.session}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                          <Edit className="text-gray-600 w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                          <Trash className="text-gray-600 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div
                      className={`p-4 rounded-2xl mb-4 ${note.bgColor.replace(
                        "100",
                        "50"
                      )}`}
                    >
                      <p className="text-gray-700">{note.content}</p>
                    </div>
                    <div className="flex gap-2 mb-3">
                      {note.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            tag.includes("Excellent")
                              ? "bg-green-100 text-green-700"
                              : tag.includes("Good") || tag.includes("Great")
                              ? "bg-yellow-100 text-yellow-700"
                              : tag.includes("Color") ||
                                tag.includes("Creative")
                              ? "bg-pink-100 text-pink-700"
                              : tag.includes("Theory") ||
                                tag.includes("Storytelling")
                              ? "bg-purple-100 text-purple-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-400 w-4 h-4" />
                        <span>Rating: {note.rating}/5</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="text-gray-400 w-4 h-4" />
                        <span>{note.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div id="load-more" className="text-center mt-8">
            <button className="px-8 py-3 rounded-full bg-white text-[#1A73E8] border-2 border-[#1A73E8] hover:bg-blue-50 shadow-sm font-medium">
              <ChevronDown className="w-4 h-4 mr-2 inline" />
              Load More Notes
            </button>
          </div>
        </div>
      </main>

      {/* Add Note Modal */}
      <AddNoteModal
        isOpen={showAddNote}
        onClose={() => setShowAddNote(false)}
        studentName="Emma Johnson"
        studentAvatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
      />
    </>
  );
};

export default MenteeNoteDetails;
