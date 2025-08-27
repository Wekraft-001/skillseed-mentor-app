import React, { useState } from "react";
import { X, Calendar, Clock, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

const CreateAvailabilityModal = ({ isOpen, onClose }) => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");
  const [timezone, setTimezone] = useState("UTC-5");

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving availability:", {
      selectedDays,
      startTime,
      endTime,
      timezone,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl font-bold text-[#212121]">
            <div className="w-8 h-8 bg-[#1A73E8] rounded-full flex items-center justify-center">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            Create Availability
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 p-2">
          {/* Days Selection */}
          <div>
            <h3 className="font-semibold text-[#212121] mb-3">
              Select Available Days
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`px-4 py-3 rounded-2xl border-2 transition-all ${
                    selectedDays.includes(day)
                      ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                      : "bg-white text-gray-700 border-gray-200 hover:border-[#1A73E8]"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#212121] mb-2">
                Start Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#212121] mb-2">
                End Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Timezone */}
          <div>
            <label className="block text-sm font-medium text-[#212121] mb-2">
              Timezone
            </label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1A73E8] focus:outline-none"
            >
              <option value="UTC-5">UTC-5 (Eastern Time)</option>
              <option value="UTC-8">UTC-8 (Pacific Time)</option>
              <option value="UTC+0">UTC+0 (GMT)</option>
            </select>
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
              className="flex-1 rounded-full py-3 bg-[#1A73E8] hover:bg-blue-600 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Save Availability
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAvailabilityModal;
