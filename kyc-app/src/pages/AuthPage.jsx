import AuthPad from "./../components/organisms/AuthPad/AuthPad.jsx";
function AuthPage() {

    return (
        <main className="flex min-h-screen items-center justify-center
        bg-linear-to-br from-blue-50 via-white to-purple-50
        px-4 py-10">
            <AuthPad />
        </main>
    );
}

export default AuthPage;