import { useState } from "react";
import FormField from "./../components/molecules/FormField/FormField";
import Button from "../components/atoms/Button/Button";
import { useAuth } from "../contexts/AuthContext.jsx";
import { changePassword } from "../services/authservice.js";
import Toast from "../components/atoms/Toast/Toast.jsx";
import {toast} from "react-toastify";

function ChangePassword() {

   const initialValues ={
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
   }

   const [values, setValues] = useState(initialValues);
  
   const [isSubmitting, setIsSubmitting] = useState(false);

   const [errorMessages, setErrorMessages] = useState({});

   const [toastMessage, setToastMessage] = useState(false);

   const { user} = useAuth();

   const handleChange = (e) => {
    const {id, value} = e.target;
    setValues({...values, [id]: value});
   }
   const validateForm = () => {
    const errors = {};
   
    const oldPassword = values.oldPassword;
    const newPassword = values.newPassword;
    const confirmNewPassword = values.confirmNewPassword;

    if (!oldPassword) {
      errors.oldPassword = "Old password is required.";
    }

    if (!newPassword) {
      errors.newPassword = "New password is required.";
    } else if (newPassword.length < 6) {
      errors.newPassword =
        "New password must be at least 6 characters.";
    } else if (!/[A-Z]/.test(newPassword)) {
      errors.newPassword =
        "New password must contain one uppercase letter.";
    } else if (!/[0-9]/.test(newPassword)) {
      errors.newPassword =
        "New password must contain one number.";
    } else if (!/[!@#$%^&*]/.test(newPassword)) {
      errors.newPassword =
        "New password must contain one special character.";
    }

    if (!confirmNewPassword) {
      errors.confirmNewPassword =
        "Confirm new password is required.";
    } else if (newPassword !== confirmNewPassword) {
      errors.confirmNewPassword =
        "New passwords do not match.";
    }

    setErrorMessages(errors);

    return Object.keys(errors).length === 0;
  };
   const handleSubmit = (e) => {
    e.preventDefault();
   setIsSubmitting(true);
   if (!validateForm()) {
    setIsSubmitting(false);
    return;
   }
   console.log(JSON.stringify(user));
   changePassword({
       name: user,
       oldPassword: values.oldPassword,
       newPassword: values.newPassword,
      
   }).then(response => {
       console.log(response);
       setIsSubmitting(false);
       setToastMessage(true);
       toast.success("Password changed successfully!");
       setValues(initialValues);
       
   }).catch(error => {
       console.error(error);
        setIsSubmitting(false);
        setToastMessage(true);
       toast.error("Failed to change password. Please try again.");
      
   });
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
       error={errorMessages.newPassword}
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
       error={errorMessages.confirmNewPassword}
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
    {toastMessage && <Toast/>}

    </>
  );




}


export default ChangePassword;