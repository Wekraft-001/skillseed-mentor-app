import React, { useState } from "react";
import { X, Plus, Star, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

const AddNoteModal = ({
  isOpen,
  onClose,
  studentName = "Student",
  studentAvatar = "",
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  const [duration, setDuration] = useState("45");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSave = () => {
    const noteData = {
      title,
      content,
      rating,
      duration: `${duration} minutes`,
      tags,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    console.log("Saving note:", noteData);
    onClose();

    // Reset form
    setTitle("");
    setContent("");
    setRating(5);
    setDuration("45");
    setTags([]);
    setNewTag("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl font-bold text-[#212121]">
            <div className="w-8 h-8 bg-[#1A73E8] rounded-full flex items-center justify-center">
              <Plus className="w-4 h-4 text-white" />
            </div>
            Add Session Note {studentName && `for ${studentName}`}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 p-2">
          {/* Session Title */}
          <div>
            <label className="block text-sm font-medium text-[#212121] mb-2">
              Session Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Color Mixing Practice"
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none"
            />
          </div>

          {/* Session Content */}
          <div>
            <label className="block text-sm font-medium text-[#212121] mb-2">
              Session Notes
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Describe what happened during the session, progress made, areas for improvement..."
              rows={5}
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none resize-none"
            />
          </div>

          {/* Rating and Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#212121] mb-2">
                Session Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`w-8 h-8 ${
                      star <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    <Star className="w-full h-full fill-current" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#212121] mb-2">
                Duration (minutes)
              </label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                min="15"
                max="120"
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-[#212121] mb-2">
              Tags
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-[#1A73E8] text-white text-sm flex items-center gap-2"
                >
                  {tag}
                  <button
                    onClick={() => removeTag(tag)}
                    className="w-4 h-4 hover:bg-blue-600 rounded-full flex items-center justify-center"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTag()}
                placeholder="Add a tag"
                className="flex-1 px-4 py-2 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none"
              />
              <Button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-2xl"
              >
                Add
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 rounded-full py-3"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="flex-1 rounded-full py-3 bg-[#1A73E8] hover:bg-blue-600"
            >
              <Plus className="w-4 h-4 mr-2" />
              Save Note
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddNoteModal;
