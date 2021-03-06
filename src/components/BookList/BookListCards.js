// React
import { useEffect, useState, useContext } from "react";
// Context
import { AppContext } from "../../context/Context";
// UI
import NoCover from "../../assets/images/no_cover.png";
import { AiFillStar } from "react-icons/ai";

const BooksList = () => {
  const [books, setBooks] = useState([]);

  // Getting items from context
  const { query, filter, printType } = useContext(AppContext);

  // Fetching the data
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&filter=${filter}&printType=${printType}`
      );
      const data = await response.json();
      setBooks(data.items);
    };

    getData();
  }, [query, filter, printType]);

  // JSX ////////////////////////////////
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 2xl:mt-0">
      {books.map(({ id, volumeInfo, saleInfo }) => {
        return (
          <div className="col-span-1 grid grid-rows-2 sm:flex mr-5 mb-5 mt-5 2xl:mt-0 shadow-lg" key={id}>
            {/* Book cover */}
            <div className="mx-auto w-2/3 sm:w-4/12 3xl:w-3/12 h-full bg-low_op_black">
              <img
                className="mx-auto w-full h-full rounded-md"
                src={volumeInfo?.imageLinks?.thumbnail || NoCover}
                alt="Book cover"
              />
            </div>

            {/* Book info */}
            <div className="grid grid-rows-3 relative px-6 pt-3 text-left sm:w-8/12 3xl:w-9/12">
              <div className="flex items-center justify-between mb-2">
                {/* The title, author and stars */}
                <div>
                  {/* Title */}
                  <h1 className="text-xl font-bold line-clamp-1 mb-1">{volumeInfo.title || "No title!"}</h1>
                  {/* Author name */}
                  <span className="text-gray-400 text-sm font-semibold line-clamp-1 mb-2">
                    {volumeInfo.authors ? volumeInfo.authors[0] : "No author found!"}
                  </span>
                  {/* Stars */}
                  <div className="flex items-center">
                    <AiFillStar className="text-regular_yellow text-xl" />
                    <AiFillStar className="text-regular_yellow text-xl" />
                    <AiFillStar className="text-regular_yellow text-xl" />
                    <AiFillStar className="text-regular_yellow text-xl" />
                    <AiFillStar className="text-regular_yellow text-xl" />
                    <span className="font-bold text-gray-700 ml-2">
                      {volumeInfo?.averageRating ? volumeInfo?.averageRating : (Math.random() * (5 - 1) + 1).toFixed(1)}
                    </span>
                  </div>
                </div>
                {/* The price */}
                <h1 className="font-bold">
                  ${saleInfo.saleability === "FOR_SALE" ? saleInfo.listPrice?.amount : (Math.random() * (15 - 5) + 5).toFixed(2)}
                </h1>
              </div>

              {/* Description */}
              <p className="line-clamp-3 text-gray-400 font-semibold">
                {volumeInfo.description ||
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium aspernatur dolor ipsam dolorum aliquid recusandae nobis quae, illum, maiores, veritatis earum. Illum obcaecati dolorum dignissimos, iste totam quasi eum?"}
              </p>

              {/* The buttons */}
              <div className="w-full flex items-end justify-between py-3">
                <button className="font-semibold text-gray-500 transition_300 hover:text-gray-700 hover:underline">
                  Read more
                </button>
                <button className="rounded-full py-1 px-8 font-semibold bg-normal_purple text-white transition_300 hover:brightness-90">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BooksList;
