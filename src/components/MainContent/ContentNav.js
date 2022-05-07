// UI
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../../assets/logo/logo_large.png";

const ContentNav = () => {
  return (
    <div className="pb-5 flex items-center justify-between px-10">
      <div className="flex items-center justify-between w-7/12">
        <img className="w-3/12 p-3" src={Logo} alt="Logo" />

        {/* Search form */}
        <form className="w-4/6 relative border border-gray-300 pl-14 py-3 rounded-full transition_300 hover:border-gray-400 focus-within:border-gray-400">
          <input className="w-11/12 outline-none" type="text" placeholder="Search book or magazine..." />
          <button className="absolute left-0 top-0 bottom-0 w-1/12 rounded-l-full">
            <AiOutlineSearch className="mx-auto text-gray-400 text-2xl transition_300 hover:text-gray-500 hover:scale-105 hover:rotate-12" />
          </button>
        </form>
      </div>

      {/* Dropdown */}
      <div className="menu_item dropdown group">
        <span className="cursor-pointer font-medium">
          Sort by: <span className="font-bold">Relevance</span> <IoIosArrowDown className="inline-block text-lg" />
        </span>
        <ul className="absolute hidden group-hover:block w-full">
          <p className="cursor-pointer bg-gray-200 rounded-t-lg px-2 py-2 transition_300 hover:bg-dark_blue hover:text-white">
            Relevance
          </p>
          <p className="cursor-pointer bg-gray-200 rounded-b-lg px-2 py-2 transition_300 hover:bg-dark_blue hover:text-white">
            Newest
          </p>
        </ul>
      </div>
    </div>
  );
};

export default ContentNav;
