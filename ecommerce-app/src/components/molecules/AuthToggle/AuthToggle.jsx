import { LogIn } from "lucide-react";
import { UserPlus } from "lucide-react";
function AuthToggle({ activeForm, onToggle }) {
    return (
        <div className="mb-8 flex items-center gap-4">
            <button
                className={`flex flex-row rounded-md px-4 py-3 font-semibold transition-transform ${activeForm === 'login' ? 'bg-white text-blue-600' : 'text-gray-500'}`}
                onClick={() => onToggle('login')}
            >
                <LogIn className="shrink-0" size={20} />
        <span className="inline-block">Login</span>
            </button>
            <button
                className={`flex flex-row rounded-md px-4 py-3 font-semibold transition-transform ${activeForm === 'register' ? 'bg-white text-purple-600' : 'text-gray-500'}`}
                onClick={() => onToggle('register')}
            >
                <UserPlus className="shrink-0" size={20} />
                <span className="inline-block">Register</span>
            </button>
        </div>
    )
}

export default AuthToggle