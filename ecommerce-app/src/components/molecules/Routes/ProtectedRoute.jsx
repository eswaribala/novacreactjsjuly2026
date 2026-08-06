//create protected route component to check if user is logged in or not
import { useAuth } from '../../../contexts/AuthContext.jsx';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const { user } = useAuth();
    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default ProtectedRoute;