import { useState } from 'react';
import FormField from '../../molecules/FormField/FormField';
import PrimeButton from '../../atoms/PrimeButton/PrimeButton';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

function Login({isSubmitting,onLogin,onRegister}){

    //initial state
    const initialValues={
        name:'',
        password:''
    }
    //state hook
    const [values,setValues]=useState(initialValues);
    const[rememberMe,setRememberMe]=useState(false);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setValues({ ...values,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Form submitted with values:', values);
        onLogin(values,rememberMe);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
           <FormField 
           id="name" 
           name="name" 
           type="text" 
           placeholder="Enter your name" 
           value={values.name}
           onChange={handleChange} 
           required
           autoComplete="username"
           className="form-field"
           htmlFor="name"
           minLength={3}
           maxLength={25}
           text="Name"             
           />

           {/* Removed closing tag since FormField is now self-closing */}

           <FormField 
           id="password" 
           name="password" 
           type="password" 
           placeholder="Enter your password" 
           value={values.password} 
           onChange={handleChange} 
           required
           autoComplete="current-password"
           className="form-field"
           htmlFor="password"
           minLength={4}
           maxLength={8}
           text="Password"
           />
          <PrimeButton type="submit"          
          disabled={isSubmitting} 
          label="Login" 
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


        </form>

        <div className="mt-4">
            <Input 
            type="checkbox" 
            id="rememberMe" 
            checked={rememberMe} 
            onChange={(e) => setRememberMe(e.target.checked)} />
            <Label htmlFor="rememberMe">Remember Me</Label>
        </div>
        <div className="flex justify-center">
            <PrimeButton 
            id="forgotPassword" 
            label="Forgot Password" 
            className="h-14
            w-72
            rounded-xl
            bg-red-600
            text-lg
            font-semibold
            text-white
            shadow-md
            transition-all
            duration-300
            hover:bg-red-700
            hover:shadow-lg
            focus:outline-none
            focus:ring-4
            focus:ring-red-200">
                Forgot Password
            </PrimeButton>
        </div>

        </>
    );
    


}

export default Login;