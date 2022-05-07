// React
import { useState } from "react";

// UI
import { AiOutlineUser, AiOutlineMail, AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const FormInputs = ({ register, errors }) => {
  const [hiddenPass, setHiddenPass] = useState(true);

  // JSX ////////////////////////////////
  return (
    <div>
      {/* Name input */}
      <div className={`relative rounded-lg ${!errors.firstName ? "mb-8 2xl:mb-10" : null}`}>
        <span className="input_icon">
          <AiOutlineUser />
        </span>
        <input
          className="form_input"
          {...register("firstName", { required: { value: true, message: "The name is required" } })}
          type="text"
          placeholder="Name"
        />
      </div>
      {errors.firstName && (
        <p className={`input_err mb-8 2xl:mb-10 ${errors.firstName ? "mb-8 2xl:mb-10" : null}`}>
          {errors.firstName ? errors.firstName.message : ""}
        </p>
      )}
      {/* Email input */}
      <div className={`relative rounded-lg ${!errors.email ? "mb-8 2xl:mb-10" : null}`}>
        <span className="input_icon">
          <AiOutlineMail />
        </span>
        <input
          className="form_input"
          {...register("email", {
            required: { value: true, message: "The email is required" },
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
              message: "email is not valid",
            },
          })}
          type="text"
          placeholder="E-mail"
        />
      </div>
      {errors.email && (
        <p className={`input_err mb-8 2xl:mb-10 ${errors.email ? "mb-8 2xl:mb-10" : null}`}>
          {errors.email ? errors.email.message : ""}
        </p>
      )}
      {/* Password input */}
      <div className={`relative rounded-lg ${!errors.password ? "mb-8 2xl:mb-10" : null}`}>
        <button className="input_icon" onClick={() => setHiddenPass(!hiddenPass)} type="button">
          {hiddenPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </button>
        <input
          className="form_input"
          {...register("password", {
            required: { value: true, message: "The password is required" },
            minLength: { value: 6, message: "Password should at least contain 6 charaters" },
          })}
          type={hiddenPass ? "password" : "text"}
          placeholder="Password"
        />
      </div>
      {errors.password && <p className="input_err">{errors.password ? errors.password.message : ""}</p>}
    </div>
  );
};

export default FormInputs;
