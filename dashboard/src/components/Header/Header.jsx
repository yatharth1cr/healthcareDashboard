import { FaBell, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 mb-4 bg-white shadow rounded-xl">
      <FaSearch />
      <input type="text" placeholder="Search" className="w-full px-4 py-2 " />
      <button className="p-2 cursor-pointer rounded-full hover:bg-gray-100 transition-colors">
        <FaBell size={20} style={{ color: "#3734a9" }} />
      </button>
    </header>
  );
};

export default Header;
