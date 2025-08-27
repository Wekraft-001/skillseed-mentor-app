import React, { useState } from "react";
import {
  Calendar,
  Plus,
  Users,
  GraduationCap,
  Star,
  Heart,
  ArrowRight,
  ChartLine,
  Lightbulb,
  MessageSquare,
  Trophy,
  Award,
  X,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showStudentImpactModal, setShowStudentImpactModal] = useState(false);
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  return (
    <main className="bg-[#F5F7FA] min-h-[800px] py-6 sm:py-8 md:py-12">
      <div className="w-full px-2 sm:px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 md:mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-[#212121]">
              Mentor Dashboard
            </h1>
            <div className="w-8 h-8 bg-[#FFC107] rounded-full animate-bounce opacity-20"></div>
            <div
              className="w-6 h-6 bg-[#1A73E8] rounded-full animate-bounce opacity-20"
              style={{ animationDelay: "200ms" }}
            ></div>
          </div>
          <div className="flex gap-2 sm:gap-4 mt-4 md:mt-0">
            <button className="px-6 py-2 rounded-full bg-white text-[#212121] shadow-sm flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {month} {year}
            </button>
            <Link to="/set-availability">
              <button className="px-6 py-2 rounded-full bg-[#1A73E8] text-white hover:bg-blue-600 shadow-sm flex items-center gap-2 cursor-pointer">
                <Plus className="w-4 h-4" />
                Set Availability
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 md:mb-8">
          <div
            id="stats-card-1"
            className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#212121]">
                No. of kids mentored
              </h3>
              <span className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <Users className="text-[#1A73E8] w-6 h-6" />
              </span>
            </div>
            <div className="flex items-end gap-4">
              <span className="text-3xl font-bold text-[#212121]">12</span>
              {/* <span className="text-green-500 text-sm flex items-center gap-1">
                <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
                +3
              </span> */}
            </div>
          </div>

          <div
            id="stats-card-2"
            className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#212121]">
                Hours Mentored
              </h3>
              <span className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <GraduationCap className="text-[#1A73E8] w-6 h-6" />
              </span>
            </div>
            <div className="flex items-end gap-4">
              <span className="text-3xl font-bold text-[#212121]">48</span>
              {/* <span className="text-green-500 text-sm flex items-center gap-1">
                <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
                +8
              </span> */}
            </div>
          </div>

          <div
            id="stats-card-3"
            className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#212121]">Reviews</h3>
              <span className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <Star className="text-[#FFC107] w-6 h-6" />
              </span>
            </div>
            <div className="flex items-end gap-4">
              <span className="text-3xl font-bold text-[#212121]">4.8</span>
              <div className="flex text-[#FFC107]">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current opacity-50" />
              </div>
            </div>
          </div>

          {/* <div
            id="stats-card-4"
            className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#212121]">
                Impact Score
              </h3>
              <span className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <Heart className="text-pink-500 w-6 h-6" />
              </span>
            </div>
            <div className="flex items-end gap-4">
              <span className="text-3xl font-bold text-[#212121]">92</span>
              <span className="text-green-500 text-sm flex items-center gap-1">
                <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
                +5
              </span>
            </div>
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            id="upcoming-sessions"
            className="bg-white p-6 rounded-3xl shadow-sm mb-4 md:mb-0 w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#212121]">
                Today's Sessions
              </h2>
              {/* <button className="text-[#1A73E8] hover:underline flex items-center gap-2">
                View Calendar <ArrowRight className="w-4 h-4" />
              </button> */}
            </div>
            <div className="space-y-4">
              <div className="flex flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-blue-50 border-2 border-blue-100">
                <div className="flex items-center gap-4">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                    alt="Sarah"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">Sarah's Math Adventure</h4>
                    <p className="text-sm text-gray-600">2:00 PM - 3:00 PM</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-1 rounded-full bg-blue-100 text-xs text-blue-700">
                        Grade 4
                      </span>
                      <span className="px-2 py-1 rounded-full bg-blue-100 text-xs text-blue-700">
                        Mathematics
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="px-4 py-2 rounded-full bg-[#1A73E8] text-white text-sm shadow-sm">
                    Join Now
                  </button>
                  {/* <button
                    onClick={() => setShowNotesModal(true)}
                    className="px-4 py-2 rounded-full border border-[#1A73E8] text-[#1A73E8] text-sm"
                  >
                    View Notes
                  </button> */}
                </div>
              </div>

              <div className="flex flex-row items-center justify-between gap-4 p-4 rounded-2xl border-2 border-gray-100">
                <div className="flex items-center gap-4">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"
                    alt="Mike"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">Mike's Science Lab</h4>
                    <p className="text-sm text-gray-600">4:00 PM - 5:00 PM</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-1 rounded-full bg-green-100 text-xs text-green-700">
                        Grade 5
                      </span>
                      <span className="px-2 py-1 rounded-full bg-green-100 text-xs text-green-700">
                        Science
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="px-4 py-2 rounded-full border border-[#1A73E8] text-[#1A73E8] text-sm">
                    Prepare
                  </button>
                  {/* <button
                    onClick={() => setShowNotesModal(true)}
                    className="px-4 py-2 rounded-full border border-[#1A73E8] text-[#1A73E8] text-sm"
                  >
                    View Notes
                  </button> */}
                </div>
              </div>
            </div>
          </div>

          <div
            id="mentee-progress"
            className="bg-white p-6 rounded-3xl shadow-sm mb-4 md:mb-0 w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#212121]">
                Student Progress
              </h2>
              {/* <button className="text-[#1A73E8] hover:underline flex items-center gap-2">
                View All <ArrowRight className="w-4 h-4" />
              </button> */}
            </div>
            <div className="space-y-6">
              <div className="p-4 rounded-2xl border-2 border-gray-100">
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                    alt="Sarah"
                    className="w-12 h-12 rounded-full border-2 border-white cursor-pointer"
                    onClick={() => setShowStudentImpactModal(true)}
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">
                      Mathematics • Grade 4
                    </p>
                  </div>
                  <span className="text-lg font-bold text-green-500">85%</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Multiplication Tables</span>
                    <span className="text-green-500">Completed</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full w-[85%] bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl border-2 border-gray-100">
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"
                    alt="Mike"
                    className="w-12 h-12 rounded-full border-2 border-white cursor-pointer"
                    onClick={() => setShowStudentImpactModal(true)}
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">Mike Chen</h4>
                    <p className="text-sm text-gray-600">Science • Grade 5</p>
                  </div>
                  <span className="text-lg font-bold text-[#1A73E8]">60%</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Solar System</span>
                    <span className="text-[#1A73E8]">In Progress</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full w-[60%] bg-[#1A73E8] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Modal */}
      {showNotesModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 w-[600px] max-h-[80vh] overflow-y-auto relative">
            <button
              onClick={() => setShowNotesModal(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                alt="Student"
                className="w-16 h-16 rounded-full border-4 border-blue-100"
              />
              <div>
                <h3 className="text-2xl font-bold text-[#212121]">
                  Sarah's Learning Notes
                </h3>
                <p className="text-gray-600">Mathematics • Grade 4</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-100">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#FFC107]" />
                  Today's Progress
                </h4>
                <p className="text-gray-700">
                  Sarah showed excellent understanding of multiplication tables
                  from 1-12. She completed all exercises with 90% accuracy.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-100">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <ChartLine className="w-5 h-5 text-green-500" />
                  Areas of Strength
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Quick mental calculations</li>
                  <li>Pattern recognition</li>
                  <li>Problem-solving approach</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-2xl border-2 border-yellow-100">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#FFC107]" />
                  Areas for Improvement
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Word problems involving multiple steps</li>
                  <li>Time management during problem-solving</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-100">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-purple-500" />
                  Recommendations
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Practice more word problems using the provided worksheet
                  </li>
                  <li>Use the timer tool for time management practice</li>
                  <li>
                    Continue with the multiplication games to maintain
                    proficiency
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <button
                onClick={() => setShowNotesModal(false)}
                className="px-6 py-3 rounded-full border-2 border-[#1A73E8] text-[#1A73E8] hover:bg-blue-50"
              >
                Close
              </button>
              <button className="px-6 py-3 rounded-full bg-[#1A73E8] text-white hover:bg-blue-600 flex items-center gap-2">
                <Send className="w-4 h-4" />
                Share with Parents
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Student Impact Modal */}
      {showStudentImpactModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 w-[800px] max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowStudentImpactModal(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                  alt="Student"
                  className="w-24 h-24 rounded-full border-4 border-blue-100"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#FFC107] rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#212121]">
                  Sarah Johnson
                </h3>
                <p className="text-gray-600">Mathematics • Grade 4</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                    12 Sessions
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                    85% Progress
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -mr-10 -mt-10"></div>
                <h4 className="text-lg font-semibold mb-2">Total Hours</h4>
                <p className="text-3xl font-bold text-[#1A73E8]">24</p>
                <p className="text-sm text-gray-600 mt-2">
                  Last session: Yesterday
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-2xl border-2 border-yellow-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-100 rounded-full -mr-10 -mt-10"></div>
                <h4 className="text-lg font-semibold mb-2">Achievements</h4>
                <p className="text-3xl font-bold text-[#FFC107]">8</p>
                <p className="text-sm text-gray-600 mt-2">Badges earned</p>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-full -mr-10 -mt-10"></div>
                <h4 className="text-lg font-semibold mb-2">Avg. Rating</h4>
                <div className="flex items-center gap-2">
                  <p className="text-3xl font-bold text-green-500">4.8</p>
                  <div className="text-[#FFC107] flex">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current opacity-50" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-100">
                  <h4 className="text-lg font-semibold mb-4">
                    Learning Progress
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Multiplication</span>
                        <span className="text-green-500">85%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-full w-[85%] bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Division</span>
                        <span className="text-blue-500">70%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-full w-[70%] bg-[#1A73E8] rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Fractions</span>
                        <span className="text-yellow-500">60%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-full w-[60%] bg-[#FFC107] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border-2 border-gray-100">
                  <h4 className="text-lg font-semibold mb-4">
                    Recent Achievements
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                        <Trophy className="text-[#FFC107] w-6 h-6" />
                      </span>
                      <div>
                        <h5 className="font-semibold">Math Master</h5>
                        <p className="text-sm text-gray-600">
                          Completed all multiplication tables
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Award className="text-[#1A73E8] w-6 h-6" />
                      </span>
                      <div>
                        <h5 className="font-semibold">Quick Learner</h5>
                        <p className="text-sm text-gray-600">
                          Finished 5 lessons in one week
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-gray-100">
                <h4 className="text-lg font-semibold mb-4">Parent Feedback</h4>
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                        alt="Parent"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <h5 className="font-semibold">Mrs. Johnson</h5>
                        <div className="text-[#FFC107] text-sm flex">
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      "Sarah has shown remarkable improvement in her math
                      skills. The personalized attention has really helped her
                      confidence."
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                        alt="Parent"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <h5 className="font-semibold">Mrs. Johnson</h5>
                        <div className="text-[#FFC107] text-sm flex">
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      "The interactive learning approach keeps her engaged. She
                      looks forward to every session!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Decoration */}
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
            className="absolute bottom-28 right-8 w-16 h-16 bg-green-500 rounded-full opacity-10 animate-bounce"
            style={{ animationDelay: "400ms" }}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default Home;
