import { FaBell, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between items-center gap-4 px-4 py-3 bg-white shadow rounded-xl">
      {/* Search bar */}
      <div className="flex items-center flex-grow bg-gray-100 px-3 py-2 rounded-md">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none text-sm"
        />
      </div>

      {/* Bell icon */}
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
        <FaBell size={20} className="text-[#3734a9]" />
      </button>
    </header>
  );
};

export default Header;
