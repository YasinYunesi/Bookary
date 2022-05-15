// React
import { useContext } from "react";
// Context
import { AppContext } from "../../context/Context";
// UI
import { RiSearchFill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "../../assets/logo/logo_small.png";

const NavbarTop = () => {
  // Getting user from context
  const { dispatchUserEvent } = useContext(AppContext);

  // Sign out handler
  const SignOutHandler = () => {
    dispatchUserEvent("SIGN_OUT");
    localStorage.removeItem("User");
  };

  // JSX ////////////////////////////////
  return (
    <div className="flex items-center justify-between px-10 py-5">
      {/* The logo */}
      <div className="w-1/6">
        <img className="w-4/5" src={Logo} alt="Logo" />
      </div>
      {/* The serach form */}
      <form
        className="flex items-center justify-between border border-gray-300 rounded-full px-1 py-1 w-2/6 bg-white text-gray-500"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="nav_dropdown">
          All categories <MdKeyboardArrowDown />
        </h1>
        <input className="w-8/12 py-1 outline-none" type="text" placeholder="Search..." />
        <div className="w-1/12 text-center px-2">
          <button className="w-full rounded-full py-2 bg-main_red transition_300 hover:brightness-90 group" type="submit">
            <RiSearchFill className="mx-auto text-white text-xl transition_300 group-hover:rotate-12" />
          </button>
        </div>
      </form>

      {/* The Help & Login btn */}
      <div className="flex items-center justify-between w-1/6">
        <h1 className="w-fit text-center cursor-pointer font-semibold text-gray-500">Help</h1>
        <button className="nav_btn" title="Sign out of your account!" onClick={SignOutHandler}>
          Sign out
        </button>
      </div>
    </div>
  );
};

export default NavbarTop;
