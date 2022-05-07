// React
import { useState } from "react";
// Components
import BooksList from "./BooksList";
import ContentNav from "./ContentNav";
import Sidebar from "./Sidebar";
// UI
import { IoIosArrowDown } from "react-icons/io";

const MainContent = () => {
  const [total, setTotal] = useState(15);

  // JSX ///////////////////////////////
  return (
    <div>
      {/* The navbar */}
      <ContentNav />

      <div className="flex justify-between px-8 pt-5">
        {/* The Sidebar */}
        <Sidebar />

        <div className="w-10/12 px-12 pb-20 text-center">
          {/* The books list */}
          <BooksList total={total} />

          {/* The "Load more" btn */}
          <button
            className="rounded-full px-12 py-3 mt-10 border-2 border-regular_yellow transition_300 hover:text-white hover:font-bold hover:bg-regular_yellow"
            onClick={() => {
              setTotal(30);
            }}
          >
            Load more <IoIosArrowDown className="inline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
