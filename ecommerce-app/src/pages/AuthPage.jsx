import AuthCard from "../components/organisms/AuthCard/AuthCard.jsx";

function AuthPage() {
    return (
        <main className="flex min-h-screen items-center justify-center
        bg-linear-to-br from-blue-50 via-white to-purple-50
        px-4 py-10">
            <AuthCard />
        </main>
    );
}

export default AuthPage;