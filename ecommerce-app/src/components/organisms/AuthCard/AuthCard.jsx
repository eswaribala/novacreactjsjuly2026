import Registration from "../RegistrationForm/Registration";
import Login from "../LoginForm/Login";
import { useState } from "react";

const authPanel={
    login: {
        icon: "login",
        title: "Login",
        description: "Welcome back! Please enter your details.",
        backgroundColor: "bg-blue-100",
        textColor: "text-blue-800"


    },
    register: {
        icon: "register",
        title: "Register",
        description: "Create a new account. Please fill in the details below.",
        backgroundColor: "bg-purple-100",
        textColor: "text-purple-800"
    }
}

function AuthCard({ title, children }) {

    const[activeForm, setActiveForm] = useState('login');
    const[message, setMessage] = useState('');
    const[isSubmitting, setIsSubmitting] = useState(false);
    const isLoginActive = activeForm === 'login';

    const activePanel = authPanel[activeForm];

    
    return (
        isLoginActive ? (
           <Login onLogin={handleLogin} onRegister={handleRegister} isSubmitting={isSubmitting} />
        ) : (
          <Registration></Registration>
        )
    );

}