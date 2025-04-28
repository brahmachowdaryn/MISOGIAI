import AuthForm from "@/components/AuthForm";
import AppHeader from "@/components/AppHeader";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "@/hooks/useAuthState";

export default function Login() {
  const { user } = useAuthState();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader />
      <div className="flex-1 flex items-center justify-center p-4">
        <AuthForm authType="login" />
      </div>
    </div>
  );
}
