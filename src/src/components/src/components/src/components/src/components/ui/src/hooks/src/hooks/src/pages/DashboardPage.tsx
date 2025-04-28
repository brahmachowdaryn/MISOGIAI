import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "@/hooks/useAuthState";
import AppHeader from "@/components/AppHeader";
import Dashboard from "@/components/Dashboard";

export default function DashboardPage() {
  const { user } = useAuthState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader />
      <main className="flex-1">
        <Dashboard />
      </main>
    </div>
  );
}
