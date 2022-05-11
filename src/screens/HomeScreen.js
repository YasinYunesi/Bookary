// Components
import Navbar from "../components/Navbar/Navbar";
import BookList from "../components/BookList/BookList";
import Banner from "../components/Banner/Banner";
import Benefits from "../components/Benefits/Benefits";
import BestBooks from "./../components/BestBooks/BestBooks";

const HomeScreen = () => {
  return (
    <div className="text-dark_blue">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Benefits */}
      <Benefits />

      {/* Best books */}
      <BestBooks />

      {/* The Book list */}
      <BookList />
    </div>
  );
};

export default HomeScreen;
