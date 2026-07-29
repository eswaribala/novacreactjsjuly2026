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
    const errors = {};

    const name = values.name.trim();
    const email = values.email.trim();
    const password = values.password;
    const confirmPassword = values.confirmPassword;

    if (!name) {
      errors.name = "Name is required.";
    } else if (!/^[a-zA-Z ]+$/.test(name)) {
      errors.name = "Name can contain only letters and spaces.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password =
        "Password must be at least 6 characters.";
    } else if (!/[A-Z]/.test(password)) {
      errors.password =
        "Password must contain one uppercase letter.";
    } else if (!/[0-9]/.test(password)) {
      errors.password =
        "Password must contain one number.";
    } else if (!/[!@#$%^&*]/.test(password)) {
      errors.password =
        "Password must contain one special character.";
    }

    if (!confirmPassword) {
      errors.confirmPassword =
        "Confirm password is required.";
    } else if (password !== confirmPassword) {
      errors.confirmPassword =
        "Passwords do not match.";
    }

    setErrorMessages(errors);

    return Object.keys(errors).length === 0;
  };
   const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    console.log('Registration values:', values);
    onRegister(values);
   }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate
  className="space-y-4">
         {errorMessages.general && (
        <Message
          type="error"
          text={errorMessages.general}
          className="mb-4"
        />
      )}  
      <FormField 
       id="name" 
       label="Name" 
       type="text" 
       value={values.name} 
       onChange={handleChange} 
       required 
       placeholder="Enter your name" 
       error={errorMessages.name}
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

       <FormField 
       id="password" 
       label="Password" 
       type="password" 
       value={values.password} 
       onChange={handleChange} 
       required 
       placeholder="Enter your password" 
       error={errorMessages.password}
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
       <FormField 
       id="confirmPassword" 
       label="Confirm Password"
       type="password" 
       value={values.confirmPassword} 
       onChange={handleChange} 
       required 
       placeholder="Confirm your password" 
       error={errorMessages.confirmPassword}
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
       <FormField 
       id="email" 
       label="Email" 
       type="email" 
       value={values.email} 
       onChange={handleChange}        
       required 
       error={errorMessages.email}
       placeholder="Enter your email" 
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
    <div className="flex justify-center">
    <Button type="submit" disabled={isSubmitting}
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
      {isSubmitting ? 'Registering...' : 'Register'}
    </Button>
    </div>
    <div className="mt-4 text-center">
      <p>Already have an account? <Button type="button" onClick={onLogin} className="text-blue-600 hover:underline">Login</Button></p>
    </div>
    
    </form>
    </>
    
  );


}

export default Registration;