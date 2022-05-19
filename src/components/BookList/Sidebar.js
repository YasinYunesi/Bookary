// React
import { useContext, useState } from "react";
// Context
import { AppContext } from "../../context/Context";
// UI
import { RiBook2Fill } from "react-icons/ri";
import { FaInternetExplorer } from "react-icons/fa";
import { MdOutlineMoneyOff } from "react-icons/md";
import { IoIosBook } from "react-icons/io";
import { GiOpenFolder } from "react-icons/gi";

const Sidebar = () => {
  const [active, setActive] = useState("books");

  // Getting items from context
  const { searchQueryEvent } = useContext(AppContext);

  // Filter change handler (1.Setting printType to default, 2.changing filter, 3.active class)
  const FilterHandler = (e) => {
    switch (e.target.attributes.id.value) {
      case "e-books":
        searchQueryEvent("CHANGE_PRINT_TYPE", { printType: "all" });
        searchQueryEvent("CHANGE_FILTER", { filter: "ebooks" });
        setActive("e-books");
        break;
      case "free-e-books":
        searchQueryEvent("CHANGE_PRINT_TYPE", { printType: "all" });
        searchQueryEvent("CHANGE_FILTER", { filter: "free-ebooks" });
        setActive("free-e-books");
        break;

      default:
        break;
    }
  };
  // PrintType change handler (1.Setting filter to default, 2.changing printType, 3.active class)
  const PrintTypeHandler = (e) => {
    switch (e.target.attributes.id.value) {
      case "books":
        searchQueryEvent("CHANGE_FILTER", { filter: "partial" });
        searchQueryEvent("CHANGE_PRINT_TYPE", { printType: "books" });
        setActive("books");
        break;
      case "magazines":
        searchQueryEvent("CHANGE_FILTER", { filter: "partial" });
        searchQueryEvent("CHANGE_PRINT_TYPE", { printType: "magazines" });
        setActive("magazines");
        break;
      case "all":
        searchQueryEvent("CHANGE_FILTER", { filter: "partial" });
        searchQueryEvent("CHANGE_PRINT_TYPE", { printType: "all" });
        setActive("all");
        break;

      default:
        break;
    }
  };

  // JSX //////////////////////////////////////
  return (
    <div className="2xl:w-2/12">
      <ul>
        <button
          className={`side_bar_item group ${active === "books" && "side_bar_item_active"}`}
          id="books"
          onClick={PrintTypeHandler}
        >
          <RiBook2Fill className="side_bar_item_icon" />
          <h1 className="group-hover:text-white transition_300">Books</h1>
        </button>
        <button
          className={`side_bar_item group ${active === "e-books" && "side_bar_item_active"}`}
          id="e-books"
          onClick={FilterHandler}
        >
          <FaInternetExplorer className="side_bar_item_icon" />
          <h1 className="group-hover:text-white transition_300">E-books</h1>
        </button>
        <button
          className={`side_bar_item group ${active === "free-e-books" && "side_bar_item_active"}`}
          id="free-e-books"
          onClick={FilterHandler}
        >
          <MdOutlineMoneyOff className="side_bar_item_icon" />
          <h1 className="group-hover:text-white transition_300">Free e-books</h1>
        </button>
        <button
          className={`side_bar_item group ${active === "magazines" && "side_bar_item_active"}`}
          id="magazines"
          onClick={PrintTypeHandler}
        >
          <IoIosBook className="side_bar_item_icon" />
          <h1 className="group-hover:text-white transition_300">Magazines</h1>
        </button>
        <button
          className={`side_bar_item group ${active === "all" && "side_bar_item_active"}`}
          id="all"
          onClick={PrintTypeHandler}
        >
          <GiOpenFolder className="side_bar_item_icon" />
          <h1 className="group-hover:text-white transition_300">All</h1>
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
