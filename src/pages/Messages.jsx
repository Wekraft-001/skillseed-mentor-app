import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faEnvelopeOpenText,
  faChild,
  faSchool,
  faPhone,
  faVideo,
  faPaperclip,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Messages = () => {
  const navigate = useNavigate();

  return (
    <main id="messages-main" className="relative min-h-[900px] pb-20 pt-12 bg-[#F5F7FA]">
      {/* Floating bubble decorations */}
      <div className="absolute -top-10 -left-12 z-0">
        <div className="w-40 h-40 bg-[#FFC107] rounded-full opacity-20 blur-xl"></div>
      </div>
      <div className="absolute top-24 left-16 z-0">
        <div className="w-20 h-20 bg-[#1A73E8] rounded-full opacity-20 blur-md"></div>
      </div>
      <div className="absolute top-1/2 left-0 z-0">
        <div className="w-14 h-14 bg-[#1A73E8] rounded-full opacity-10 blur"></div>
      </div>
      <div className="absolute bottom-36 right-16 z-0">
        <div className="w-24 h-24 bg-[#FFC107] rounded-full opacity-10 blur"></div>
      </div>
      <div className="absolute bottom-0 right-0 z-0">
        <div className="w-36 h-36 bg-[#1A73E8] rounded-full opacity-10 blur-xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">

        {/* Page Heading */}
        <div id="messages-header" className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <button
              className="rounded-full bg-white shadow-md px-4 py-2 text-[#1A73E8] hover:bg-blue-50 transition-all"
              onClick={() => navigate(-1)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <h1 className="text-3xl font-bold text-[#212121] leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Messages</h1>
            <div className="w-8 h-8 bg-[#FFC107] rounded-full opacity-25 animate-bounce"></div>
            <div className="w-6 h-6 bg-[#1A73E8] rounded-full opacity-25 animate-bounce" style={{ animationDelay: '180ms' }}></div>
          </div>
          <button className="rounded-full px-5 py-2 bg-[#1A73E8] text-white font-semibold shadow-md hover:bg-blue-600 transition-all flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="mr-1" /> New Message
          </button>
        </div>

        {/* Main Messaging Section */}
        <section id="messages-section" className="grid grid-cols-12 gap-8">
          {/* Contacts/Sidebar */}
          <aside id="messages-sidebar" className="col-span-12 md:col-span-4 xl:col-span-3">
            <div className="bg-white rounded-3xl shadow p-6 border border-gray-100 flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-bold text-[#212121] text-lg flex items-center gap-2">
                  <FontAwesomeIcon icon={faChild} className="text-[#FFC107]" /> Students
                </span>
                <span className="ml-auto bg-[#FFC107]/10 text-[#FFC107] px-3 py-1 rounded-full text-xs font-semibold">3</span>
              </div>
              <div className="space-y-4">
                {/* Contact 1 */}
                <button id="messages-contact-1" className="flex items-center gap-4 w-full py-3 px-2 rounded-2xl hover:bg-[#F5F7FA] transition-all group bg-[#1A73E8]/10 border-2 border-[#1A73E8] shadow-sm">
                  <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&q=80&facepad=2" className="w-12 h-12 rounded-full border-4 border-[#1A73E8] object-cover" alt="Sarah Johnson" />
                  <div className="flex flex-col items-start min-w-0">
                    <span className="font-semibold text-[#212121] truncate">Sarah Johnson</span>
                    <span className="text-xs text-gray-500">Mathematics</span>
                  </div>
                  <span className="ml-auto w-3 h-3 rounded-full bg-green-400 border-2 border-white"></span>
                </button>
                {/* Contact 2 */}
                <button id="messages-contact-2" className="flex items-center gap-4 w-full py-3 px-2 rounded-2xl hover:bg-[#F5F7FA] transition-all group">
                  <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=128&q=80&facepad=2" className="w-12 h-12 rounded-full border-4 border-[#FFC107] object-cover" alt="Tolu Balogun" />
                  <div className="flex flex-col items-start min-w-0">
                    <span className="font-semibold text-[#212121] truncate">Tolu Balogun</span>
                    <span className="text-xs text-gray-500">Science</span>
                  </div>
                  <span className="ml-auto w-3 h-3 rounded-full bg-gray-300 border-2 border-white"></span>
                </button>
                {/* Contact 3 */}
                <button id="messages-contact-3" className="flex items-center gap-4 w-full py-3 px-2 rounded-2xl hover:bg-[#F5F7FA] transition-all group">
                  <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=128&q=80&facepad=2" className="w-12 h-12 rounded-full border-4 border-[#1A73E8] object-cover" alt="Chidi Okafor" />
                  <div className="flex flex-col items-start min-w-0">
                    <span className="font-semibold text-[#212121] truncate">Chidi Okafor</span>
                    <span className="text-xs text-gray-500">English</span>
                  </div>
                  <span className="ml-auto w-3 h-3 rounded-full bg-yellow-400 border-2 border-white"></span>
                </button>
              </div>
              <div className="border-t border-gray-100 mt-6 pt-5 flex items-center gap-2">
                <FontAwesomeIcon icon={faSchool} className="text-[#1A73E8]" />
                <span className="font-bold text-[#212121] text-lg">Parents</span>
                <span className="ml-auto bg-[#1A73E8]/10 text-[#1A73E8] px-3 py-1 rounded-full text-xs font-semibold">2</span>
              </div>
              <div className="space-y-4">
                {/* Parent Contact 1 */}
                <button id="messages-contact-parent-1" className="flex items-center gap-4 w-full py-3 px-2 rounded-2xl hover:bg-[#F5F7FA] transition-all group">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=128&q=80&facepad=2" className="w-12 h-12 rounded-full border-4 border-[#FFC107] object-cover" alt="Mrs. Johnson" />
                  <div className="flex flex-col items-start min-w-0">
                    <span className="font-semibold text-[#212121] truncate">Mrs. Johnson</span>
                    <span className="text-xs text-gray-500">Sarah's Parent</span>
                  </div>
                  <span className="ml-auto w-3 h-3 rounded-full bg-gray-300 border-2 border-white"></span>
                </button>
                {/* Parent Contact 2 */}
                <button id="messages-contact-parent-2" className="flex items-center gap-4 w-full py-3 px-2 rounded-2xl hover:bg-[#F5F7FA] transition-all group">
                  <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=128&q=80&facepad=2" className="w-12 h-12 rounded-full border-4 border-[#1A73E8] object-cover" alt="Mr. Balogun" />
                  <div className="flex flex-col items-start min-w-0">
                    <span className="font-semibold text-[#212121] truncate">Mr. Balogun</span>
                    <span className="text-xs text-gray-500">Tolu's Parent</span>
                  </div>
                  <span className="ml-auto w-3 h-3 rounded-full bg-green-400 border-2 border-white"></span>
                </button>
              </div>
            </div>
          </aside>

          {/* Chat Window */}
          <section id="messages-chat" className="col-span-12 md:col-span-8 xl:col-span-9 flex flex-col h-[650px] bg-white rounded-3xl shadow border border-gray-100 relative overflow-hidden">
            {/* Chat Header */}
            <div id="chat-header" className="flex items-center gap-4 px-8 py-6 bg-[#1A73E8]/10 border-b border-[#F5F7FA]">
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&q=80&facepad=2" className="w-14 h-14 rounded-full border-4 border-[#1A73E8] object-cover" alt="Sarah Johnson" />
              <div className="flex flex-col">
                <span className="font-semibold text-[#212121] text-lg">Sarah Johnson</span>
                <span className="text-xs text-gray-500">Active now</span>
              </div>
              <div className="flex-1"></div>
              <button className="rounded-full bg-white px-4 py-2 shadow text-[#1A73E8] hover:bg-blue-50 transition-all text-lg mr-2">
                <FontAwesomeIcon icon={faPhone} />
              </button>
              <button className="rounded-full bg-white px-4 py-2 shadow text-[#1A73E8] hover:bg-blue-50 transition-all text-lg">
                <FontAwesomeIcon icon={faVideo} />
              </button>
            </div>

            {/* Chat Bubbles */}
            <div id="chat-messages" className="flex-1 overflow-y-auto px-8 py-6 space-y-6 bg-[#F5F7FA] relative">
              {/* Bubble Decorations */}
              <div className="absolute left-1/3 top-4 w-16 h-16 bg-[#FFC107] rounded-full opacity-10 blur-xl z-0"></div>
              <div className="absolute right-8 top-12 w-8 h-8 bg-[#1A73E8] rounded-full opacity-10 blur z-0"></div>
              {/* Messages */}
              <div id="chat-msg-1" className="flex items-end gap-3 z-10 relative">
                <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&q=80&facepad=2" className="w-10 h-10 rounded-full border-2 border-[#1A73E8]" alt="Sarah Johnson" />
                <div className="bg-white rounded-2xl shadow px-6 py-4 max-w-[60%] border border-gray-100 text-[#212121] text-base font-medium">
                  Hi Dr. Wilson! 😊 I finished the multiplication table you sent me!
                </div>
                <span className="text-xs text-gray-400 mb-2">2:01 PM</span>
              </div>
              <div id="chat-msg-2" className="flex items-end gap-3 justify-end z-10 relative">
                <span className="text-xs text-gray-400 mb-2">2:03 PM</span>
                <div className="bg-[#1A73E8] text-white rounded-2xl shadow px-6 py-4 max-w-[60%] border border-[#1A73E8] text-base font-medium">
                  That's fantastic, Sarah! ⭐ Can you share your favorite trick for remembering your tables?
                </div>
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" className="w-10 h-10 rounded-full border-2 border-[#1A73E8]" alt="Mentor" />
              </div>
              <div id="chat-msg-3" className="flex items-end gap-3 z-10 relative">
                <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&q=80&facepad=2" className="w-10 h-10 rounded-full border-2 border-[#1A73E8]" alt="Sarah Johnson" />
                <div className="bg-white rounded-2xl shadow px-6 py-4 max-w-[60%] border border-gray-100 text-[#212121] text-base font-medium">
                  I use colorful flashcards and draw smiley faces when I do it right!
                </div>
                <span className="text-xs text-gray-400 mb-2">2:04 PM</span>
              </div>
              <div id="chat-msg-4" className="flex items-end gap-3 justify-end z-10 relative">
                <span className="text-xs text-gray-400 mb-2">2:05 PM</span>
                <div className="bg-[#1A73E8] text-white rounded-2xl shadow px-6 py-4 max-w-[60%] border border-[#1A73E8] text-base font-medium">
                  That's a wonderful idea! 🎨 Keep practicing and you'll be a math star in no time!
                </div>
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" className="w-10 h-10 rounded-full border-2 border-[#1A73E8]" alt="Mentor" />
              </div>
            </div>
            {/* Chat Input Bar */}
            <div id="chat-input" className="flex items-center gap-4 px-8 py-5 border-t border-gray-100 bg-white">
              <button className="rounded-full p-3 bg-[#FFC107] text-white shadow hover:bg-[#FFD54F] transition-all">
                <FontAwesomeIcon icon={faPaperclip} />
              </button>
              <input type="text" placeholder="Type your message..." className="flex-1 px-5 py-3 rounded-2xl bg-[#F5F7FA] border border-gray-200 text-[#212121] text-base focus:outline-none focus:ring-2 focus:ring-[#1A73E8] transition-all" />
              <button className="rounded-full p-3 bg-[#1A73E8] text-white shadow hover:bg-blue-600 transition-all">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Messages;
