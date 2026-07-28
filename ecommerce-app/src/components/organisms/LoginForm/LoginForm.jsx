import { useState } from "react";
import FormField from "../../molecules/FormField/FormField";
import Button from "../../atoms/Button/Button";

function LoginForm({onLogin,onRegister,isSubmitting}) {

   const initialValues ={
    name: '',
    password: ''
   }

   const [values, setValues] = useState(initialValues);
   const[remeberMe, setRememberMe] = useState(false);

   const handleChange = (e) => {
    const {id, value} = e.target;
    setValues({...values, [id]: value});
   }


  return (
    <form>
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
  );




}


export default LoginForm;