import { useContext, useState, createContext } from 'react'

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const contextLogin = (userData) => {
       
        setUser(userData);
    }

    const contextLogout = () => {
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ user, contextLogin, contextLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
   const context = useContext(AuthContext);
   if (!context) {
       throw new Error('useAuth must be used within an AuthProvider');
   }
    return context;
};