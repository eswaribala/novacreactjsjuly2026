import Button from "../../atoms/Button/Button";
import FormField from "../../molecules/FormField/FormField";
import { useState } from "react";
function Registration({onRegister,onLogin,isSubmitting}) {

   const initialValues ={
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
    }

   const [values, setValues] = useState(initialValues);
   const handleChange = (e) => {
    const {id, value} = e.target;
    setValues({...values, [id]: value});
   }
   const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
   }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField 
       id="name" 
       label="Name" 
       type="text" 
       value={values.name} 
       onChange={handleChange} 
       required 
       placeholder="Enter your name" 
       className="" />
       <FormField 
       id="password" 
       label="Password" 
       type="password" 
       value={values.password} 
       onChange={handleChange} 
       required 
       placeholder="Enter your password" 
       className="" />
       <FormField 
       id="confirmPassword" 
       label="Confirm Password"
       type="password" 
       value={values.confirmPassword} 
       onChange={handleChange} 
       required 
       placeholder="Confirm your password" 
       className="" />
       <FormField 
       id="email" 
       label="Email" 
       type="email" 
       value={values.email} 
       onChange={handleChange} 
       required 
       placeholder="Enter your email" 
       className="" />
  
    <Button type="submit" disabled={isSubmitting}
    className="w-full bg-blue-600 hover:bg-blue-700">
      {isSubmitting ? 'Registering...' : 'Register'}
    </Button>
    <div className="mt-4 text-center">
      <p>Already have an account? <Button type="button" onClick={onLogin} className="text-blue-600 hover:underline">Login</Button></p>
    </div>
    
    </form>
  );


}

export default Registration;