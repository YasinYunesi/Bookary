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
    <div className="flex justify-between px-20 py-14 bg-dark_purple text-smoke_white">
      {/* Left part */}
      <div className="w-1/3">
        {/* Logo */}
        <img className="w-2/5 mb-8" src={Logo} alt="Logo" />
        {/* Address */}
        <div className="mb-20">
          <h1 className="text-xl w-5/12 font-semibold">Cricklewood, London NW2 6QG, UK</h1>
          <button className="mt-3 opacity-40 text-sm transition_300 hover:opacity-70">
            More <BsArrowRightShort className="inline" />
          </button>
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
      <div className="w-1/3">
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
        <ul className="flex items-end h-1/6 opacity-40">
          <li className="mr-20">Privacy policy</li>
          <li className="mr-20">Terms of use</li>
          <li>Cookies</li>
        </ul>
      </div>

      {/* Right part */}
      <div className="w-1/3 flex flex-col items-end justify-between">
        <div>
          <button className="footer_btn mr-5 bg-white text-dark_purple">Help</button>
          <button className="footer_btn bg-normal_purple">
            FAQ's <BsArrowRightShort className="inline" />
          </button>
        </div>
        <button
          className="opacity-70 text-sm transition_300 hover:opacity-90"
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
