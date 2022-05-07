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
        <li className="side_bar_item">
          <RiBook2Fill className="side_bar_item_icon" />
          Books
        </li>
        <li className="side_bar_item">
          <FaInternetExplorer className="side_bar_item_icon" />
          E-books
        </li>
        <li className="side_bar_item">
          <MdOutlineMoneyOff className="side_bar_item_icon" />
          Free e-books
        </li>
        <li className="side_bar_item">
          <IoIosBook className="side_bar_item_icon" />
          Magazines
        </li>
        <li className="side_bar_item">
          <GiOpenFolder className="side_bar_item_icon" />
          All
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
