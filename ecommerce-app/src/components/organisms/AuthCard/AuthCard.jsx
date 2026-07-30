import Registration from "../RegistrationForm/Registration";
import Login from "../LoginForm/Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthToggle from "../../molecules/AuthToggle/AuthToggle";
import { Lock, CircleUserRound} from "lucide-react";
import { register,login } from "../../../services/authservices.js";


const authPanel={
    login: {
        icon: Lock,
        title: "Login",
        description: "Welcome back! Please enter your details.",
        backgroundColor: "bg-blue-100",
        textColor: "text-blue-800"


    },
    register: {
        icon: CircleUserRound,
        title: "Register",
        description: "Create a new account. Please fill in the details below.",
        backgroundColor: "bg-purple-100",
        textColor: "text-purple-800"
    }
}

function AuthCard() {

    const[activeForm, setActiveForm] = useState('login');
   
    const[isSubmitting, setIsSubmitting] = useState(false);
    const isLoginActive = activeForm === 'login';

    const activePanel = authPanel[activeForm];

    const navigate = useNavigate();

    const handleLogin = async (values, rememberMe) => {
       try {
    setIsSubmitting(true);

    console.log("Login values:", values);
    console.log("Remember Me:", rememberMe);
    const response = await login(values);
    console.log("Login response:", response);
    navigate("/home");
    // await loginApi(values);
  } catch (error) {
    console.error("Login failed:", error);
  } finally {
    setIsSubmitting(false);
  }
    };
    const handleRegister = async (values) => {
       try {
    setIsSubmitting(true);

    console.log("Registration values:", values);
    const response = await register(values);
    console.log("Registration response:", response);
    setActiveForm("login");


    // await registerApi(values);
  } catch (error) {
    console.error("Registration failed:", error);
  } finally {
    setIsSubmitting(false);
  }
    };
    const handleToggle = (formName) => {
        setActiveForm(formName);
      
    };
    const ActiveIcon = activePanel.icon;

    return (
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
    );

}

export default AuthCard;