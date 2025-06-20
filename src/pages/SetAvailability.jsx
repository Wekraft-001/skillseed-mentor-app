import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faSun, faClock, faMoon } from "@fortawesome/free-regular-svg-icons";

const SetAvailability = () => {
  // A more dynamic calendar would require state and logic for dates, month navigation, etc.
  // For now, this is a static representation based on the provided HTML.
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1); // Example for a 31-day month

  return (
    <main className="bg-[#F5F7FA] min-h-[900px] py-12">
      <div className="container mx-auto px-6">
        <div
          id="availability-card"
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#212121]">
              Set Your Availability
            </h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Time Zone:</span>
              <select className="px-4 py-2 rounded-full border focus:border-[#1A73E8] outline-none text-sm">
                <option>UTC (GMT+0)</option>
                <option>EST (GMT-5)</option>
                <option>PST (GMT-8)</option>
              </select>
            </div>
          </div>

          <div id="calendar-section" className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-gray-600"
                />
              </button>
              <h2 className="text-xl font-semibold">May 2025</h2>{" "}
              {/* This would be dynamic */}
              <button className="p-2 rounded-full hover:bg-gray-100">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-gray-600"
                />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-4 mb-8">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div
                  key={day}
                  className="text-center text-sm text-gray-600 font-medium"
                >
                  {day}
                </div>
              ))}
            </div>

            <div id="calendar-days" className="grid grid-cols-7 gap-4">
              {/* Placeholder for empty days at the start of the month */}
              {/* This needs logic to correctly place days based on the start day of the month */}
              {calendarDays.map((day) => (
                <div key={day} className="aspect-square">
                  <button
                    className={`w-full h-full rounded-full 
                                ${
                                  day === 2
                                    ? "bg-[#1A73E8] text-white"
                                    : "bg-blue-50 text-[#1A73E8] hover:bg-[#1A73E8] hover:text-white"
                                }
                                transition-colors`}
                  >
                    {day}
                  </button>
                </div>
              ))}
              {/* More calendar days... (Filled with example up to 31) */}
            </div>
          </div>

          <div id="time-slots" className="mb-10">
            <h3 className="text-lg font-semibold mb-6">Available Time Slots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border rounded-xl bg-blue-50">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[#1A73E8] font-medium">Morning</span>
                  <FontAwesomeIcon icon={faSun} className="text-[#FFC107]" />
                </div>
                <div className="space-y-2">
                  <button className="w-full py-2 rounded-full bg-white text-[#1A73E8] border border-[#1A73E8] hover:bg-[#1A73E8] hover:text-white transition-colors">
                    9:00 AM
                  </button>
                  <button className="w-full py-2 rounded-full bg-[#1A73E8] text-white transition-colors">
                    10:00 AM
                  </button>
                  <button className="w-full py-2 rounded-full bg-white text-[#1A73E8] border border-[#1A73E8] hover:bg-[#1A73E8] hover:text-white transition-colors">
                    11:00 AM
                  </button>
                </div>
              </div>

              <div className="p-4 border rounded-xl bg-blue-50">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[#1A73E8] font-medium">Afternoon</span>
                  <FontAwesomeIcon icon={faClock} className="text-[#FFC107]" />
                </div>
                <div className="space-y-2">
                  <button className="w-full py-2 rounded-full bg-[#1A73E8] text-white transition-colors">
                    1:00 PM
                  </button>
                  <button className="w-full py-2 rounded-full bg-white text-[#1A73E8] border border-[#1A73E8] hover:bg-[#1A73E8] hover:text-white transition-colors">
                    2:00 PM
                  </button>
                  <button className="w-full py-2 rounded-full bg-white text-[#1A73E8] border border-[#1A73E8] hover:bg-[#1A73E8] hover:text-white transition-colors">
                    3:00 PM
                  </button>
                </div>
              </div>

              <div className="p-4 border rounded-xl bg-blue-50">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[#1A73E8] font-medium">Evening</span>
                  <FontAwesomeIcon icon={faMoon} className="text-[#FFC107]" />
                </div>
                <div className="space-y-2">
                  <button className="w-full py-2 rounded-full bg-white text-[#1A73E8] border border-[#1A73E8] hover:bg-[#1A73E8] hover:text-white transition-colors">
                    4:00 PM
                  </button>
                  <button className="w-full py-2 rounded-full bg-[#1A73E8] text-white transition-colors">
                    5:00 PM
                  </button>
                  <button className="w-full py-2 rounded-full bg-white text-[#1A73E8] border border-[#1A73E8] hover:bg-[#1A73E8] hover:text-white transition-colors">
                    6:00 PM
                  </button>
                </div>
              </div>

              <div className="p-4 border rounded-xl border-dashed">
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <FontAwesomeIcon icon={faPlus} className="text-2xl mb-2" />
                  <span className="text-sm">Add Custom Time Slot</span>
                </div>
              </div>
            </div>
          </div>

          <div id="recurring-settings" className="mb-10">
            <h3 className="text-lg font-semibold mb-4">Recurring Schedule</h3>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-[#1A73E8] focus:ring-[#1A73E8]"
                />
                <span>Repeat weekly</span>
              </label>
              <select className="px-4 py-2 rounded-full border focus:border-[#1A73E8] outline-none text-sm">
                <option>For 4 weeks</option>
                <option>For 8 weeks</option>
                <option>For 12 weeks</option>
              </select>
            </div>
          </div>

          <div id="form-actions" className="flex justify-end space-x-4">
            <button className="px-6 py-2 rounded-full border border-[#1A73E8] text-[#1A73E8] hover:bg-blue-50 transition-colors">
              Reset
            </button>
            <button className="px-6 py-2 rounded-full bg-[#1A73E8] text-white hover:bg-blue-600 transition-colors">
              Save Schedule
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SetAvailability;
