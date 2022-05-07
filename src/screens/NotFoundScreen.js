import { Link } from "react-router-dom";
import image from "../assets/images/not_found_1.svg";

const NotFoundScreen = () => {
  return (
    <div className="h-screen bg-dark text-white">
      {/* the image */}
      <div className="h-full w-full fixed">
        <img className="w-11/12 lg:w-10/12 opacity-20 h-full mx-auto" src={image} alt="not found!" />
      </div>

      {/* the text */}
      <div className="fixed w-full h-full flex flex-col items-center justify-center px-5">
        <h1 className="text-5xl lg:text-7xl font-bold -mt-20 text-center">Page Not Found!</h1>
        <h1 className="text-2xl my-8 lg:w-1/2 text-center">
          The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
        </h1>
        <Link className="bg-dark_yellow text-xl py-4 px-14 rounded-full transition_300 hover:brightness-90" to="/">
          Home screen
        </Link>
      </div>
    </div>
  );
};

export default NotFoundScreen;
