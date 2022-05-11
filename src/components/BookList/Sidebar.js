// UI
import { RiBook2Fill } from "react-icons/ri";
import { FaInternetExplorer } from "react-icons/fa";
import { MdOutlineMoneyOff } from "react-icons/md";
import { IoIosBook } from "react-icons/io";
import { GiOpenFolder } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className="w-2/12">
      <ul>
        <li className="side_bar_item group">
          <RiBook2Fill className="side_bar_item_icon" />
          <h1 className="group-hover:text-white transition_300">Books</h1>
        </li>
        <li className="side_bar_item group">
          <FaInternetExplorer className="side_bar_item_icon" />
          <h1 className="group-hover:text-white transition_300">E-books</h1>
        </li>
        <li className="side_bar_item group">
          <MdOutlineMoneyOff className="side_bar_item_icon" />
          <h1 className="group-hover:text-white transition_300">Free e-books</h1>
        </li>
        <li className="side_bar_item group">
          <IoIosBook className="side_bar_item_icon" />
          <h1 className="group-hover:text-white transition_300">Magazines</h1>
        </li>
        <li className="side_bar_item group">
          <GiOpenFolder className="side_bar_item_icon" />
          <h1 className="group-hover:text-white transition_300">All</h1>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
