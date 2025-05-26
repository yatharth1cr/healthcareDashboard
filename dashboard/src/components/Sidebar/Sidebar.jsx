import {
  FaCalendarAlt,
  FaChartBar,
  FaHistory,
  FaHome,
  FaUserMd,
  FaPhone,
  FaComment,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[200px] h-screen bg-[#f6faff] p-6 shadow-lg flex flex-col justify-between sticky top-0 left-0">
      <div className="">
        <h2 className="text-xl mb-8 font-bold text-blue-950">
          Health<span className="text-cyan-500">care</span>.
        </h2>
        <nav>
          <ul className="space-y-4 text-sm text-gray-400">
            <p className="text-[0.75rem] text-gray-400">General</p>
            <li className="flex items-center cursor-pointer">
              <FaHome className="mr-3" /> Dashboard
            </li>
            <li className="flex items-center cursor-pointer">
              <FaHistory className="mr-3" /> History
            </li>
            <li className="flex items-center cursor-pointer">
              <FaCalendarAlt className="mr-3" /> Calendar
            </li>
            <li className="flex items-center cursor-pointer">
              <FaUserMd className="mr-3" /> Appointments
            </li>
            <li className="flex items-center cursor-pointer">
              <FaChartBar className="mr-3" /> Statistics
            </li>
          </ul>
          <ul className="mt-8 space-y-4 text-sm text-gray-400">
            <p className="text-[0.75rem] text-gray-400">Tools</p>
            <li className="flex items-center cursor-pointer">
              <FaComment className="mr-3" /> Chat
            </li>
            <li className="flex items-center cursor-pointer">
              <FaPhone className="mr-3" /> Support
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center text-sm text-gray-400 pt-8 cursor-pointer">
        <FaCog className="mr-3" /> Setting
      </div>
    </div>
  );
};

export default Sidebar;
