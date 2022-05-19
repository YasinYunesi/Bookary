// UI
import { BsArrowRightShort } from "react-icons/bs";
import BannerImage from "../../assets/images/banner_1.jpg";

const Banner = () => {
  return (
    <div className="mt-5 relative">
      <img src={BannerImage} alt="Banner" />

      {/* The text & btn */}
      <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center md:justify-start md:pt-20 lg:pt-40 font-semibold">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">Develop your emagination.</h1>
        <h4 className="text-lg lg:text-xl my-5 lg:my-14">Beautiful editions for all.</h4>
        <button className="rounded-full text-xs sm:text-sm lg:text-base px-6 lg:px-12 sm:py-1 lg:py-3 font-semibold bg-normal_purple text-white border border-normal_purple transition_300 hover:text-normal_purple hover:bg-transparent">
          Shop now <BsArrowRightShort className="text-2xl inline" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
