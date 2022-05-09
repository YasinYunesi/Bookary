// UI
import { BsArrowRightShort } from "react-icons/bs";
import BannerImage from "../../assets/images/banner_1.jpg";

const Banner = () => {
  return (
    <div className="mt-5 relative">
      <img className="" src={BannerImage} alt="Banner" />

      {/* The text & btn */}
      <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center pt-40 font-semibold">
        <h1 className="text-7xl">Develop your emagination.</h1>
        <h4 className="text-xl my-14">Beautiful editions for all.</h4>
        <button className="rounded-full px-12 py-3 font-semibold bg-normal_purple text-white border border-normal_purple transition_300 hover:text-normal_purple hover:bg-transparent">
          Shop now <BsArrowRightShort className="text-2xl inline" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
