import { useState } from "react";
import FormField from "../../molecules/FormField/FormField";
import PrimeButton from "../../atoms/Button/Button.jsx";
import Input from "../../atoms/Input/Input.jsx";
import Label from "../../atoms/Label/Label.jsx";

function Login({ onLogin, onRegister, isSubmitting }) {
  const initialValues = {
    name: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values, rememberMe);
  };

  const inputClassName = `
    mb-6
    block
    w-full
    rounded-lg
    border
    border-gray-300
    bg-gray-50
    p-2.5
    text-sm
    text-gray-900
    placeholder:text-gray-500
    placeholder:opacity-100
    focus:border-blue-500
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
  `;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormField
          id="name"
          name="name"
          label="Name"
          type="text"
          value={values.name}
          autoComplete="username"
          required
          placeholder="Enter your name"
          onChange={handleChange}
          className={inputClassName}
        />

        <FormField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={values.password}
          autoComplete="current-password"
          required
          placeholder="Enter your password"
          onChange={handleChange}
          className={inputClassName}
        />

        <div className="flex justify-center">
          <PrimeButton
            type="submit"
            disabled={isSubmitting}
            className="
              h-14
              w-72
              rounded-xl
              bg-blue-600
              text-lg
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:bg-blue-700
              hover:shadow-lg
              focus:outline-none
              focus:ring-4
              focus:ring-blue-200
            "
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </PrimeButton>
        </div>
      </form>

      <div className="mt-4 flex items-center">
        <Input
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="mr-2 h-4 w-4"
        />

        <Label text="Remember Me" htmlFor="rememberMe" />
      </div>

      <div className="mt-4 flex justify-center">
        <PrimeButton
          type="button"
          className="
            h-14
            w-72
            rounded-xl
            bg-green-600
            text-lg
            font-semibold
            text-white
            shadow-md
            transition-all
            duration-300
            hover:bg-green-700
            hover:shadow-lg
            focus:outline-none
            focus:ring-4
            focus:ring-green-200
          "
        >
          Forgot Password
        </PrimeButton>
      </div>

      <div className="mt-4">
        <p>
          Not Having Account?{" "}
          <PrimeButton
            type="button"
            onClick={onRegister}
            className="text-blue-600 hover:underline"
          >
            Register
          </PrimeButton>
        </p>
      </div>
    </>
  );
}

export default Login;