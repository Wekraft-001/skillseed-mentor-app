import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFilter,
  faComments,
  faThumbsUp,
  faClock as faSolidClock,
  faStar as faSolidStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

const Feedback = () => {
  // Sample data for feedback items - in a real app, this would come from an API
  const feedbackItems = [
    {
      id: 1,
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
      name: "Sarah Johnson",
      session: "Math Session",
      time: "2 hours ago",
      rating: 5.0,
      stars: 5,
      comment:
        "The session was amazing! I finally understood quadratic equations. Thank you for being so patient and using such great examples!",
      tags: [
        { name: "Mathematics", color: "blue" },
        { name: "Algebra", color: "purple" },
      ],
    },
    {
      id: 2,
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      name: "Mike Chen",
      session: "Science Project",
      time: "1 day ago",
      rating: 4.0,
      stars: 4,
      comment:
        "Great guidance on my science project! Could we spend more time on the experimental design next time?",
      tags: [
        { name: "Science", color: "green" },
        { name: "Projects", color: "orange" },
      ],
    },
  ];

  const getTagColors = (color) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-[#1A73E8]";
      case "purple":
        return "bg-purple-100 text-purple-600";
      case "green":
        return "bg-green-100 text-green-600";
      case "orange":
        return "bg-orange-100 text-orange-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <main className="bg-[#F5F7FA] min-h-[900px] py-12">
      <div className="container mx-auto px-6">
        <div
          id="feedback-dashboard"
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div
            id="dashboard-header"
            className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0"
          >
            <h1 className="text-3xl font-bold text-[#212121]">
              Mentee Feedback
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search feedback..."
                  className="pl-10 pr-4 py-2 rounded-full border focus:border-[#1A73E8] outline-none w-64"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
              <button className="bg-[#1A73E8] text-white px-6 py-2 rounded-full hover:bg-blue-600 flex items-center">
                <FontAwesomeIcon icon={faFilter} className="mr-2" />
                Filter
              </button>
            </div>
          </div>

          <div
            id="feedback-stats"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#1A73E8]">Total Feedback</span>
                <FontAwesomeIcon icon={faComments} className="text-[#1A73E8]" />
              </div>
              <div className="text-3xl font-bold text-[#212121]">24</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-600">Positive</span>
                <FontAwesomeIcon icon={faThumbsUp} className="text-green-600" />
              </div>
              <div className="text-3xl font-bold text-[#212121]">18</div>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-yellow-600">Pending</span>
                <FontAwesomeIcon
                  icon={faSolidClock}
                  className="text-yellow-600"
                />
              </div>
              <div className="text-3xl font-bold text-[#212121]">4</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-600">Average Rating</span>
                <FontAwesomeIcon
                  icon={faSolidStar}
                  className="text-purple-600"
                />
              </div>
              <div className="text-3xl font-bold text-[#212121]">4.8</div>
            </div>
          </div>

          <div id="feedback-list" className="space-y-6">
            {feedbackItems.map((item) => (
              <div
                key={item.id}
                className="feedback-item bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={item.avatar}
                    alt={`${item.name} Avatar`}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{item.session}</span>
                          <span className="mx-2">•</span>
                          <span>{item.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center mt-2 sm:mt-0">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <FontAwesomeIcon
                              key={i}
                              icon={
                                i < item.stars ? faSolidStar : faRegularStar
                              }
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium">
                          {item.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{item.comment}</p>
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                      <div className="flex space-x-2 mb-2 sm:mb-0">
                        {item.tags.map((tag) => (
                          <span
                            key={tag.name}
                            className={`px-3 py-1 ${getTagColors(
                              tag.color
                            )} rounded-full text-sm`}
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                      <button className="text-[#1A73E8] hover:underline self-start sm:self-center">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            id="pagination"
            className="flex justify-center items-center mt-8 space-x-2"
          >
            <button className="w-10 h-10 rounded-full border hover:border-[#1A73E8] hover:text-[#1A73E8] flex items-center justify-center transition-colors">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#1A73E8] text-white flex items-center justify-center transition-colors">
              1
            </button>
            <button className="w-10 h-10 rounded-full border hover:border-[#1A73E8] hover:text-[#1A73E8] flex items-center justify-center transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-full border hover:border-[#1A73E8] hover:text-[#1A73E8] flex items-center justify-center transition-colors">
              3
            </button>
            <button className="w-10 h-10 rounded-full border hover:border-[#1A73E8] hover:text-[#1A73E8] flex items-center justify-center transition-colors">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feedback;
