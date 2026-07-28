import { useState } from "react";
import FormField from "../../molecules/FormField/FormField";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

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
      className=""
      
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
       className=""
      />
      <Button type="submit" disabled={isSubmitting} 
      className="w-full bg-blue-600 hover:bg-blue-700">
        {isSubmitting ? 'Logging in...' : 'Login'}
     </Button>
    </form>
    <div className="mt-4">
        <Input type="checkbox" 
        id="rememberMe" checked={rememberMe} 
           onChange={() => setRememberMe(!rememberMe)} />
        
    </div>
    <div className="mt-4">
      <Button type="button"
      className="w-full bg-green-600 hover:bg-green-700">
        Forgot Password
      </Button>
    </div>

    <div className="mt-4">
      <p>Not Having Account? 
        <Button type="button" onClick={onRegister} 
        className="text-blue-600 hover:underline">Register</Button>
        </p>
    </div>

    </>
  );




}


export default Login;