// React
import { useContext, useState } from "react";
// Context
import { AppContext } from "../../context/Context";
// UI
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../../assets/logo/logo_large.png";

const BookListNav = () => {
  const [query, setQuery] = useState("");

  // Getting items from context
  const { searchQueryEvent } = useContext(AppContext);

  // Submit handler
  const SubmitHandler = (e) => {
    e.preventDefault();
    searchQueryEvent("CHANGE_QUERY", { query: query });
    // Resetting the input
    setQuery("");
  };

  // JSX /////////////////////////////////
  return (
    <div className="pb-5 flex items-center justify-between px-10">
      <img className="w-2/12 pr-20" src={Logo} alt="Logo" />

      {/* Search form */}
      <form
        className="w-3/12 relative border border-gray-300 pl-14 py-3 rounded-full transition_300 hover:border-gray-400 focus-within:border-gray-400"
        onSubmit={SubmitHandler}
      >
        <input
          className="w-11/12 outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search book or magazine..."
        />
        <button className="absolute left-0 top-0 bottom-0 w-1/12 rounded-l-full" type="Submit">
          <AiOutlineSearch className="mx-auto text-gray-400 text-2xl transition_300 hover:text-gray-500 hover:scale-105 hover:rotate-12" />
        </button>
      </form>
    </div>
  );
};

export default BookListNav;
