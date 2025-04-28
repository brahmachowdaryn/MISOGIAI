import { Button } from "@/components/ui/button";
import { useAuthState } from "@/hooks/useAuthState";
import { Link } from "react-router-dom";

export default function AppHeader() {
  const { user, logout } = useAuthState();

  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          GreenSteps
        </Link>
        <nav>
          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="outline" className="text-white border-white hover:bg-green-700">
                  Dashboard
                </Button>
              </Link>
              <Button variant="ghost" onClick={logout} className="text-white hover:bg-green-700">
                Log out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="outline" className="text-white border-white hover:bg-green-700">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-white text-green-600 hover:bg-gray-100">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
