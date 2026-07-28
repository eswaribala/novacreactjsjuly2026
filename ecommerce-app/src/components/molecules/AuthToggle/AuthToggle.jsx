function AuthToggle({ activeForm, onToggle }) {
    return (
        <div className="auth-toggle">
            <button
                className={`rounded-md px-4 py-3 font-semibold transition-transform ${activeForm === 'login' ? 'bg-white text-blue-600' : 'text-gray-500'}`}
                onClick={() => onToggle('login')}
            >
                Login
            </button>
            <button
                className={`rounded-md px-4 py-3 font-semibold transition-transform ${activeForm === 'register' ? 'bg-white text-purple-600' : 'text-gray-500'}`}
                onClick={() => onToggle('register')}
            >
                Register
            </button>
        </div>
    )
}

export default AuthToggle