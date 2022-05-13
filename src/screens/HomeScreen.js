// Components
import Navbar from "../components/Navbar/Navbar";
import BookList from "../components/BookList/BookList";
import Banner from "../components/Banner/Banner";
import Benefits from "../components/Benefits/Benefits";
import BestBooks from "./../components/BestBooks/BestBooks";
import Subscribe from "../components/Subscribe/Subscribe";
import Comments from "./../components/Comments/Comments";
import Footer from "../components/Footer/Footer";

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

      {/* Subscribe */}
      <div className="px-8">
        <Subscribe />
      </div>

      {/* Comments */}
      <Comments />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
