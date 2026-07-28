import Button from "../../atoms/Button/Button";
import FormField from "../../molecules/FormField/FormField";
import Message from "../../atoms/Message/Message";
import { useState } from "react";
function Registration({onRegister,onLogin,isSubmitting}) {

   const initialValues ={
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
    }

   const [values, setValues] = useState(initialValues);
   const [errorMessages, setErrorMessages] = useState({});
   const handleChange = (e) => {
    const {id, value} = e.target;
    setValues({...values, [id]: value});
   }

   const validateForm = () => {
      
    const { name, email, password, confirmPassword } = values;
   
    if (!name || !email || !password || !confirmPassword) {
       setErrorMessages({ general: "All fields are required." });
      return false;
    }
    if (password !== confirmPassword) {
      setErrorMessages({ password: "Passwords do not match." });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessages({ email: "Invalid email format." });
      return false;
    }
    if (password.length < 6) {
      setErrorMessages({ passwordLength: "Password must be at least 6 characters long." });
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setErrorMessages({ passwordUppercase: "Password must contain at least one uppercase letter." });
      return false;
    }
    if (!/[0-9]/.test(password)) {
      setErrorMessages({ passwordNumber: "Password must contain at least one number." });
      return false;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      setErrorMessages({ passwordSpecialChar: "Password must contain at least one special character." });
      return false;
    }
    if (!/^[a-zA-Z0-9]+$/.test(name)) {
      setErrorMessages({ name: "Name must not contain special characters." });
      return false;
    }
    return true;
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    onRegister(values);
   }

  return (
    <>
    <Message type="error" text={errorMessages} className="mb-4" />
    <form onSubmit={handleSubmit} className="space-y-4">     
      <FormField 
       id="name" 
       label="Name" 
       type="text" 
       value={values.name} 
       onChange={handleChange} 
       required 
       placeholder="Enter your name" 
       error={errorMessages.name}
       className="" />

       <FormField 
       id="password" 
       label="Password" 
       type="password" 
       value={values.password} 
       onChange={handleChange} 
       required 
       placeholder="Enter your password" 
       error={errorMessages.password}
       className="" />
       <FormField 
       id="confirmPassword" 
       label="Confirm Password"
       type="password" 
       value={values.confirmPassword} 
       onChange={handleChange} 
       required 
       placeholder="Confirm your password" 
       error={errorMessages.confirmPassword}
       className="" />
       <FormField 
       id="email" 
       label="Email" 
       type="email" 
       value={values.email} 
       onChange={handleChange}        
       required 
       error={errorMessages.email}
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
    </>
    
  );


}

export default Registration;