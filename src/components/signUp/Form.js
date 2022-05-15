// React
import { useContext } from "react";
// React router
import { Link } from "react-router-dom";
// React-hook-form
import { useForm } from "react-hook-form";
// Components
import FormInputs from "./FormInputes";
// Context API
import { AppContext } from "../../context/Context";

const Form = () => {
  // Context
  const { dispatchUserEvent } = useContext(AppContext);

  // React-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { firstName: "", email: "", password: "" } });

  // Submit func
  const SubmitHandler = (data) => {
    // reseting form inputs
    reset();
    // sending user's data to context
    const { firstName, email, password } = data;
    const userData = { firstName, email, password };
    dispatchUserEvent("SIGN_IN", { newUser: userData });
    // Saving user's login info in local storage
    localStorage.setItem("User", JSON.stringify(data));
  };

  // JSX ///////////////////////////////
  return (
    <form
      className="h-fit pb-4 xl:pb-0 pt-10 lg:pt-0 border-b border-b-gray-500"
      onSubmit={handleSubmit(SubmitHandler)}
      autoComplete="off"
    >
      {/* Inputes */}
      <FormInputs register={register} errors={errors} />

      {/* Btn & Link */}
      <div className="mt-12 grid_flow_2">
        {/* Submit btn */}
        <div className="row-start-1 mx-auto xl:col-start-1 mb-3 xl:mb-0">
          <button
            className="bg-light_yellow text-gray-700 rounded-xl px-12 py-3 2xl:px-18 2xl:py-4 font-semibold text-lg transition_150 hover:rounded-lg"
            type="submit"
          >
            Sign up
          </button>
        </div>
        {/* Already a member */}
        <div className="row-start-2 xl:row-start-1 xl:col-start-2 my-auto">
          <h1 className="text-center xl:text-right text-gray-400">
            Already a memeber of the community?{" "}
            <Link to="/sign-up" className="text-light_yellow underline brightness-90 transition_150 hover:brightness-105">
              Log in
            </Link>
          </h1>
        </div>
      </div>
    </form>
  );
};

export default Form;
