// Components
import Navbar from "../components/Navbar/Navbar";
import MainContent from "../components/MainContent/MainContent";
import Banner from "../components/Banner/Banner";
import Benefits from "../components/Benefits/Benefits";

const HomeScreen = () => {
  return (
    <div className="text-dark_blue">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Benefits */}
      <Benefits />

      {/* The main content */}
      {/* <MainContent /> */}
    </div>
  );
};

export default HomeScreen;
