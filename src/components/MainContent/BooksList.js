// React
import { useEffect, useState } from "react";
// UI
import NoCover from "../../assets/images/no_cover.png";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const BooksList = ({ total }) => {
  const [books, setBooks] = useState([]);

  // Fetching the data
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=run&maxResults=${total}`);
      const data = await response.json();
      setBooks(data.items);
    };

    getData();
  }, [total]);

  // JSX ////////////////////////////////
  return (
    <div className="grid grid-cols-5 text-left">
      {books.map(({ id, volumeInfo, saleInfo }) => {
        return (
          <div className="w-10/12 mb-10 mx-auto relative" key={id}>
            {/* Cover */}
            <img className="mx-auto w-full h-3/5" src={volumeInfo?.imageLinks?.thumbnail || NoCover} alt="Book" />
            {/* Author name */}
            <span className="text-gray-400 text-xs font-semibold line-clamp-1">
              {volumeInfo.authors ? volumeInfo.authors[0] : "No author found!"}
            </span>
            {/* Title */}
            <h1 className="text-xl font-bold my-2 line-clamp-1">{volumeInfo.title || "No title!"}</h1>
            {/* description */}
            <p className="line-clamp-3 text-gray-400 font-semibold">
              {volumeInfo.description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium aspernatur dolor ipsam dolorum aliquid recusandae nobis quae, illum, maiores, veritatis earum. Illum obcaecati dolorum dignissimos, iste totam quasi eum?"}
            </p>
            {/* Card footer */}
            <div className="flex items-center justify-between w-full absolute bottom-0">
              <button className="bg-regular_yellow rounded-full px-7 py-2 text-white font-bold shadow-xl text-sm transition_150 hover:brightness-90">
                Buy: {saleInfo.saleability === "FOR_SALE" ? saleInfo.listPrice?.amount : "5.99"}$
              </button>
              <button className="transition_300 hover:text-red-600 hover:scale-125">
                <AiOutlineHeart />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BooksList;
