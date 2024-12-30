import { Cable, CircleHelp, MessageCircleMore, User } from 'lucide-react';
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-100 shadow-lg p-4 space-y-4 mt-1 cursor-pointer hidden sm:block">

      {/* Menu Items */}
      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition">
        <User className="text-[#2a458a]" />
        <span className="text-gray-700 font-medium">Profile</span>
      </div>

      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition">
        <MessageCircleMore className="text-[#2a458a]" />
        <span className="text-gray-700 font-medium">Messaging</span>
      </div>

      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition">
        <Cable className="text-[#2a458a]" />
        <span className="text-gray-700 font-medium">Connections</span>
      </div>

      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition">
        <CircleHelp className="text-[#2a458a]" />
        <span className="text-gray-700 font-medium">Post your query</span>
      </div>
    </aside>
  );
};

export default Sidebar;
