// UI
import { BsArrowRightShort } from "react-icons/bs";

const Subscribe = () => {
  return (
    <div className="rounded-xl py-20 px-32 my-16 text-white bg-blue_purple">
      <h1 className="text-xl font-semibold text-yellow-300 mb-5">New users 15% off</h1>

      <h1 className="text-4xl font-bold mb-24">
        Fill your house with stacks of books, in all <br /> the crannies and all the nooks.
      </h1>

      <form
        className="w-5/12 mx-auto px-10 flex justify-between rounded-full py-3 bg-white"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input className="w-full outline-none font-semibold text-gray-500" type="text" placeholder="Drop your Email" />
        <button
          className="flex items-center font-semibold rounded-full px-8 py-2 bg-blue_purple transition_300 hover:brightness-75"
          type="submit"
        >
          Subscribe <BsArrowRightShort className="ml-2" />
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
