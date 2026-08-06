//create protected route component that checks if user is logged in and redirects to login page if not
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext.jsx';

function ProtectedRoute({ children }) {
    const { user } = useAuth();
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;