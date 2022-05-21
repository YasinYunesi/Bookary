// React
import { useEffect, useState } from "react";
// UI
import { AiFillStar } from "react-icons/ai";
import NoCover from "../../assets/images/no_cover.png";

const BestBooks = () => {
  const [books, setBooks] = useState([]);

  // Fetching the data
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=run&maxResults=5&startIndex=4`);
      const data = await response.json();
      setBooks(data.items);
    };

    getData();
  }, []);

  // JSX ////////////////////////////////
  return (
    <div className="px-10 my-28 py-10 bg-gray-200">
      {/* The title */}
      <div className="pb-20">
        <h1 className="text-3xl lg:text-5xl font-bold mb-8">All time best Books</h1>
        <span className="text-gray-400 font-semibold">Great collection for all.</span>
      </div>

      {/* The books List */}
      <div className="xl:px-14 2xl:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {books.map(({ id, volumeInfo, saleInfo }) => {
          return (
            <div className="text-center flex flex-col justify-between mb-10 xl:mb-0 px-5" key={id}>
              <img
                className="mx-auto w-1/2 h-full rounded-md mb-4 bg-low_op_black"
                src={volumeInfo?.imageLinks?.thumbnail || NoCover}
                alt="Cover"
              />

              <div className="h-1/2 flex flex-col items-center justify-between">
                <h1 className="mb-1 line-clamp-1 text-lg font-bold">{volumeInfo?.title}</h1>
                <span className="mb-2 line-clamp-1 text-gray-400">
                  {volumeInfo.authors ? volumeInfo.authors[0] : "No author"}
                </span>
                <p className="mb-2 font-bold">${saleInfo.saleability === "FOR_SALE" ? saleInfo.listPrice?.amount : "5.99"}</p>
                <button className="mb-2 rounded-full py-1 px-8 font-semibold bg-normal_purple text-white transition_300 hover:brightness-90">
                  Add to cart
                </button>
                <div className="mt-4 mx-auto flex items-center font-bold">
                  <AiFillStar className="text-regular_yellow text-xl" />
                  <span>{volumeInfo?.averageRating ? volumeInfo?.averageRating : (Math.random() * (5 - 1) + 1).toFixed(1)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestBooks;
