// UI
import { AiOutlineUser } from "react-icons/ai";
import { GoTag } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";

const NavbarBottom = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pr-5 py-5 font-bold text-gray-600">
      {/* Left side */}
      <div className="hidden md:flex items-center justify-evenly w-1/4 lg:w-1/6">
        <h1 className="cursor-pointer hover:underline">New in</h1>
        <h1 className="cursor-pointer hover:underline">Collection</h1>
      </div>

      {/* Center */}
      <ul className="nav_menu w-full md:w-1/2 lg:w-1/3">
        <li title="All products">Products</li>
        <li title="Sales for holidys">Sale</li>
        <li title="All brands">Brands</li>
        <li title="Story books">Story</li>
        <li title="Delivery guide">Delivery</li>
      </ul>

      {/* Right side */}
      <div className="flex items-center justify-evenly lg:justify-between w-full md:w-1/4 lg:w-1/6">
        <button title="Profile">
          <AiOutlineUser className="text-2xl text-main_red" />
        </button>
        <button title="Tags">
          <GoTag className="text-2xl text-main_red" />
        </button>
        <button className="flex items-center font-semibold hover:underline" title="Shopping basket">
          <BsCart2 className="text-2xl text-main_red mr-3" /> <span className="hidden xl:inline">Shopping basket</span>
        </button>
      </div>
    </div>
  );
};

export default NavbarBottom;
