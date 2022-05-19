// React
import { useState } from "react";
// UI
import { BsArrowRightShort, BsArrowUpShort } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/logo/logo_small_white.png";

const Footer = () => {
  const [FullYear] = useState(new Date().getFullYear());

  // JSX ////////////////////////////
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-6 md:px-10 lg:px-20 py-14 bg-dark_purple text-smoke_white">
      {/* Left part */}
      <div className="mb-10 lg:mb-0">
        {/* Logo */}
        <img className="w-2/5 mb-8" src={Logo} alt="Logo" />
        <div className="mb-8 lg:mb-20 flex lg:flex-col justify-between">
          {/* Address */}
          <div className="w-6/12 sm:w-5/12 md:w-3/12 lg:w-5/12">
            <h1 className="text-xl font-semibold">Cricklewood, London NW2 6QG, UK</h1>
            <button className="mt-3 opacity-40 text-sm transition_300 hover:opacity-70">
              More <BsArrowRightShort className="inline" />
            </button>
          </div>
          {/* Social media btns */}
          <div className="mt-10">
            <button className="bg-white text-dark_purple p-2 rounded-full mr-5">
              <FaFacebookF />
            </button>
            <button className="bg-white text-dark_purple p-2 rounded-full ">
              <FaTwitter />
            </button>
          </div>
        </div>
        {/* Credit */}
        <span>
          <span className="opacity-40">© {FullYear}</span>{" "}
          <a
            className="opacity-40 hover:opacity-70 underline transition_300"
            href="https://findyasinyunesi.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Yasin Yunesi
          </a>
        </span>
      </div>

      {/* Center part */}
      <div className="mb-10 lg:mb-0">
        {/* the list */}
        <div className="flex items-center justify-between h-5/6">
          <ul className="footer_list">
            <li>New in</li>
            <li>Collection</li>
            <li>Authors</li>
            <li>Community</li>
          </ul>
          <ul className="footer_list">
            <li>Products</li>
            <li>Gift voucher</li>
            <li>Brands</li>
            <li>Story</li>
          </ul>
          <ul className="footer_list">
            <li>Track order</li>
            <li>Delivery & Returns</li>
            <li>Sale</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* the terms, cookie and privacy */}
        <ul className="flex items-center justify-between h-1/6 opacity-40 mt-8 lg:mt-0">
          <li className="text-sm lg:text-base">Privacy policy</li>
          <li className="text-sm lg:text-base">Terms of use</li>
          <li className="text-sm lg:text-base">Cookies</li>
        </ul>
      </div>

      {/* Right part */}
      <div className="lg:col-span-2 xl:col-span-1 flex flex-col items-center xl:items-end justify-between mt-14 xl:mt-0">
        <div>
          <button className="footer_btn mr-5 bg-white text-dark_purple">Help</button>
          <button className="footer_btn bg-normal_purple">
            FAQ's <BsArrowRightShort className="inline" />
          </button>
        </div>
        <button
          className="opacity-70 text-sm mt-5 xl:mt-0 transition_300 hover:opacity-90"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Scroll to top <BsArrowUpShort className="inline text-lg ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
