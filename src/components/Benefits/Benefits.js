// UI
import Globe from "../../assets/icons/globe.svg";
import Delivery from "../../assets/icons/delivery_2.svg";
import Money from "../../assets/icons/money.svg";
import Holiday from "../../assets/icons/festival.svg";

const Benefits = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-10">
      {/* Globe */}
      <li className="benefit">
        <div>
          <h1>Collections</h1>
          <p>Books from all around the globe.</p>
        </div>
        <img src={Globe} alt="icon" />
      </li>

      {/* Shipping */}
      <li className="benefit">
        <div>
          <h1>Shipping</h1>
          <p>Free deliver in all around the world.</p>
        </div>
        <img src={Delivery} alt="icon" />
      </li>

      {/* Prices */}
      <li className="benefit">
        <div>
          <h1>Prices</h1>
          <p>Always offering the Best prices.</p>
        </div>
        <img src={Money} alt="icon" />
      </li>

      {/* Holidays */}
      <li className="benefit">
        <div>
          <h1>Offers</h1>
          <p>Holiday offers you won't find anywhere else.</p>
        </div>
        <img src={Holiday} alt="icon" />
      </li>
    </ul>
  );
};

export default Benefits;
