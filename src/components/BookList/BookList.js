// Components
import BooksListCards from "./BookListCards";
import BookListNav from "./BookListNav";
import Sidebar from "./Sidebar";

const MainContent = () => {
  // JSX ///////////////////////////////
  return (
    <div>
      {/* The navbar */}
      <BookListNav />

      <div className="flex flex-col 2xl:flex-row justify-between px-8 pt-5">
        {/* The Sidebar */}
        <Sidebar />

        <div className="2xl:w-10/12 2xl:px-12 pb-20 text-center">
          {/* The books list */}
          <BooksListCards />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
