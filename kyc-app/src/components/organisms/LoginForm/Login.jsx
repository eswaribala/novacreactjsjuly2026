import { useState } from 'react';
import FormField from '../../molecules/FormField/FormField';
import PrimeButton from '../../atoms/PrimeButton/PrimeButton';

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

    return (
        <form>
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
    );
    


}

export default Login;