// React slick
import Slider from "react-slick";
// UI
import { AiFillStar } from "react-icons/ai";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import User_1 from "../../assets/images/user_1.jpg";
import User_2 from "../../assets/images/user_2.jpg";
import User_3 from "../../assets/images/user_3.jpg";

const Comments = () => {
  // Next and prev arrow
  function PrevArrow({ onClick }) {
    return (
      <button
        className="absolute top-0 bottom-0 left-0 z-20 h-fit my-auto text-lg text-gray-500 transition_300 hover:text-gray-700"
        onClick={onClick}
      >
        <MdOutlineArrowBackIos />
      </button>
    );
  }
  function NextArrow({ onClick }) {
    return (
      <button
        className="absolute top-0 bottom-0 right-0 z-20 h-fit my-auto text-lg text-gray-500 transition_300 hover:text-gray-700"
        onClick={onClick}
      >
        <MdOutlineArrowForwardIos />
      </button>
    );
  }

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => <div className="carousel_dot my-auto text-gray-300 text-5xl">.</div>,
  };

  // JSX ////////////////////////////
  return (
    <div className="w-11/12 mx-auto text-center my-32 relative">
      <Slider {...settings}>
        {/* CM 1 */}
        <div className="comment">
          <h1>
            “Books are the quietest and most constant of friends; they are the most accessible and widest of counselors, the most
            patient of teachers.”
          </h1>
          <img src={User_1} alt="user" />
          <h2>Emma Johnson</h2>
          <span>New York</span>
        </div>

        {/* CM 2 */}
        <div className="comment">
          <h1>
            “Libraries will get you through times of no money better than money will get you through times of no libraries.”
          </h1>
          <img src={User_2} alt="user" />
          <h2>Dani Cassidy</h2>
          <span>Vancouver</span>
        </div>

        {/* CM 3 */}
        <div className="comment">
          <h1>
            “I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.”
          </h1>
          <img src={User_3} alt="user" />
          <h2>Laura Barker</h2>
          <span>London</span>
        </div>
      </Slider>
    </div>
  );
};

export default Comments;
