import { useState } from 'react';
import Login from './../LoginForm/Login.jsx'
import Registration from './../RegistrationForm/Registration.jsx'
import AuthToggle from './../../molecules/AuthToggle/AuthToggle.jsx'

const authPanel={
    login:{
        icon: 'login',
        title: 'Login',
        description: 'Access your account by logging in with your credentials.',
        backgroundColor: 'bg-blue-500',
        textColor: 'text-blue-500',

    },
    register:{
        icon: 'register',
        title: 'Register',
        description: 'Create a new account to get started with our services.',
        backgroundColor: 'bg-purple-500',
        textColor: 'text-purple-500',
    }

}

function AuthPad() {
    //set activeForm
    const [activeForm, setActiveForm] = useState('login');
    const[isSubmitting, setIsSubmitting] = useState(false);
    const isLoginActive = activeForm === 'login';
    const activePanel = authPanel[activeForm];
    const ActiveIcon = activePanel.icon;
    
    const handleToggle = (form) => {
        setActiveForm(form);
    }

    const handleLogin = async (values, rememberMe) => {
        setIsSubmitting(true);
        // Simulate an API call for login
        setTimeout(() => {
            console.log('Login successful with credentials:', values, 'Remember me:', rememberMe);
            setIsSubmitting(false);
        }, 2000);
    }

    const handleRegister = async (userInfo) => {
        setIsSubmitting(true);
        // Simulate an API call for registration
        setTimeout(() => {
            console.log('Registration successful with user info:', userInfo);
            setIsSubmitting(false);
        }, 2000);
    }


    return(
         <section className="grid w-full max-w-5xl overflow-hidden
        rounded-3xl bg-white shadow-2xl md:grid-cols-[38%_62%]">
        <div className={`hidden min-h-[650px] flex-col items-center
        justify-center px-10 text-center md:flex ${activePanel.backgroundColor}`}>
        <div className={`mb-8 text-5xl font-bold ${activePanel.textColor}`}>
        <ActiveIcon size={125} strokeWidth={1.5}/>
        </div>
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
        {activePanel.title}
        </h1>
        <p className="max-w-xs text-lg text-gray-500">
        {activePanel.description}
        </p>
        </div>
        <div className="min-h-[650px] px-6 py-10 sm:px-12">
        <AuthToggle
        activeForm={activeForm}
        onToggle={handleToggle}
        />
     
        {isLoginActive ? (
        <Login
        onLogin={handleLogin}
        onRegister={() => handleToggle("register")}
        
        isSubmitting={isSubmitting}
        />
        ) : (
        <Registration
        onRegister={handleRegister}
        onLogin={() => handleToggle("login")}        
        isSubmitting={isSubmitting}
        />
        )}
        </div>
</section>
    )

}

export default AuthPad;