import { useState } from "react";
import FormField from "../../molecules/FormField/FormField";
import PrimeButton from "./../../atoms/Button/Button.jsx"
import Input from "../../atoms/Input/Input.jsx";
import Label from "../../atoms/Label/Label.jsx";

function Login({onLogin,onRegister,isSubmitting}) {

   const initialValues ={
    name: '',
    password: ''
   }

   const [values, setValues] = useState(initialValues);
   const[rememberMe, setRememberMe] = useState(false);

   const handleChange = (e) => {
    const {id, value} = e.target;
    setValues({...values, [id]: value});
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values, rememberMe);
   }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <FormField 
      id="name" 
      label="Name" 
      type="text" 
      value={values.name} 
      autocomplete="autocomplete"
      name="name"
      required
      placeholder="Enter your name"
      onChange={handleChange}
      className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      
      />
      <FormField 
       id="password" 
       label="Password" 
       type="password" 
       value={values.password} 
       onChange={handleChange}
       autocomplete="current-password"
       name="password"
       required
       placeholder="Enter your password"
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <div className="flex justify-center">
      <PrimeButton type="submit" disabled={isSubmitting} 
      className="h-14
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
      focus:ring-blue-200">
        {isSubmitting ? 'Logging in...' : 'Login'}
     </PrimeButton>
      </div>
    </form>
    <div className="mt-4">
      
        <Input type="checkbox" 
        id="rememberMe" checked={rememberMe} 
           onChange={() => setRememberMe(!rememberMe)} className="mr-5" />
        <Label text="Remember Me" htmlFor="rememberMe"/>
    </div>
    <div className="flex justify-center">
      <PrimeButton type="button"
      className="h-14
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
      focus:ring-blue-200">
        Forgot Password
      </PrimeButton>
    </div>

    <div className="mt-4">
      <p>Not Having Account? 
        <PrimeButton type="button" onClick={onRegister} 
        className="text-blue-600 hover:underline">Register</PrimeButton>
        </p>
    </div>

    </>
  );




}


export default Login;