// UI
import image from "../assets/images/sign_up_1.jpg";
import image2 from "../assets/images/sign_up_2.jpg";
import Content from "../components/signUp/Content";

const SignUpScreen = () => {
  return (
    <div className="bg-dark text-white">
      <img className="lg:hidden" src={image2} alt="background" />
      <div className="grid grid-flow-col grid-cols-2 lg:grid-cols-3 h-full">
        <img className="lg:col-span-1 h-full hidden lg:block" src={image} alt="background" />

        {/* The form (right side) */}
        <Content />
      </div>
    </div>
  );
};

export default SignUpScreen;
