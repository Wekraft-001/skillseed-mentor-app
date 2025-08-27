import React from "react";
import { X, Calendar, Clock, Star, User, BookOpen } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const ViewNotesModal = ({
  isOpen,
  onClose,
  studentName,
  studentAvatar,
  subject,
  grade,
}) => {
  const notes = [
    {
      date: "March 14, 2025",
      time: "4:30 PM",
      session: "#12",
      title: "Color Mixing Progress",
      content:
        "Emma showed excellent progress in color mixing today. She created a beautiful landscape painting and demonstrated good understanding of warm and cool colors.",
      rating: 5,
      duration: "45 minutes",
      tags: ["Excellent Progress", "Color Theory", "Brush Control"],
    },
    {
      date: "March 12, 2025",
      time: "3:15 PM",
      session: "#11",
      title: "First Watercolor Attempt",
      content:
        "Today Emma tried watercolors for the first time. She was initially hesitant but quickly became fascinated with how the colors blend on wet paper.",
      rating: 4,
      duration: "40 minutes",
      tags: ["Good Progress", "Watercolor", "First Time"],
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* <DialogHeader> */}
          <DialogTitle className="flex items-center gap-4 text-xl font-bold text-[#212121]">
            <img
              src={studentAvatar}
              alt={studentName}
              className="w-12 h-12 rounded-full border-2 border-pink-200"
            />
            <div>
              <div>{studentName}'s Session Notes</div>
              <div className="text-sm text-gray-600 font-normal">
                {grade} • {subject}
              </div>
            </div>
          </DialogTitle>
        {/* </DialogHeader> */}

        <div className="space-y-6 p-2">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-pink-50 p-4 rounded-2xl text-center">
              <div className="text-2xl font-bold text-[#212121]">
                {notes.length}
              </div>
              <div className="text-sm text-gray-600">Total Notes</div>
            </div>
            <div className="bg-green-50 p-4 rounded-2xl text-center">
              <div className="text-2xl font-bold text-[#212121]">4.5</div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-2xl text-center">
              <div className="text-2xl font-bold text-[#212121]">85m</div>
              <div className="text-sm text-gray-600">Total Time</div>
            </div>
          </div>

          {/* Notes Timeline */}
          <div className="space-y-4">
            {notes.map((note, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-3xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-pink-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-[#212121]">
                          {note.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {note.date} • {note.time} • Session {note.session}
                        </p>
                      </div>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-2xl mb-4">
                      <p className="text-gray-700">{note.content}</p>
                    </div>
                    <div className="flex gap-2 mb-3">
                      {note.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full bg-blue-100 text-xs text-blue-700 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>Rating: {note.rating}/5</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{note.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewNotesModal;
