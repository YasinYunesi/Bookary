// UI
import { BsArrowRightShort } from "react-icons/bs";

const Subscribe = () => {
  return (
    <div className="rounded-xl py-10 md:py-20 px-10 md:px-16 lg:px-32 my-16 text-white bg-blue_purple">
      <h1 className="md:text-xl font-semibold text-yellow-300 mb-5">New users 15% off</h1>

      <h1 className="text-2xl md:text-4xl font-bold mb-10 md:mb-24 text-center md:text-left">
        Fill your house with stacks of books, in all <br className="hidden md:inline" /> the crannies and all the nooks.
      </h1>

      <form
        className="md:w-10/12 xl:w-7/12 2xl:w-6/12 3xl:w-5/12 mx-auto flex justify-between rounded-full px-4 md:px-10 py-1 md:py-3 bg-white"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input className="w-full outline-none font-semibold text-gray-500" type="text" placeholder="Drop your Email" />
        <button
          className="flex items-center font-semibold rounded-full p-2 md:px-8 md:py-2 bg-blue_purple transition_300 hover:brightness-75"
          type="submit"
        >
          <span className="hidden md:inline">Subscribe</span> <BsArrowRightShort className="md:ml-2" />
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
