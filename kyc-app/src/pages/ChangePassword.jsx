import { useState } from "react";
import FormField from "./../components/molecules/FormField/FormField";
import Button from "../components/atoms/Button/Button";
import { useAuth } from "../contexts/AuthContext.jsx";

function ChangePassword() {

   const initialValues ={
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
   }

   const [values, setValues] = useState(initialValues);
  
   const [isSubmitting, setIsSubmitting] = useState(false);

   const { user} = useAuth();

   const handleChange = (e) => {
    const {id, value} = e.target;
    setValues({...values, [id]: value});
   }

   const handleSubmit = (e) => {
    e.preventDefault();
   setIsSubmitting(true);
   console.log(JSON.stringify(user));
   }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <FormField 
      id="oldPassword" 
      label="Old Password" 
      type="password" 
      value={values.oldPassword} 
      autocomplete="current-password"
      name="oldPassword"
      required
      placeholder="Enter your old password"
      onChange={handleChange}
      className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      
      />
      <FormField 
       id="newPassword" 
       label="New Password" 
       type="password" 
       value={values.newPassword} 
       onChange={handleChange}
       autocomplete="new-password"
       name="newPassword"
       required
       placeholder="Enter your new password"
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <FormField 
       id="confirmNewPassword" 
       label="Confirm New Password" 
       type="password" 
       value={values.confirmNewPassword} 
       onChange={handleChange}
       autocomplete="new-password"
       name="confirmNewPassword"
       required
       placeholder="Confirm your new password"
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
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
        {isSubmitting ? 'Changing...' : 'Change Password'}
     </Button>
      </div>
    </form>
   

    </>
  );




}


export default ChangePassword;