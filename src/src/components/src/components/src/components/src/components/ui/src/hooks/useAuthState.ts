import { useState } from "react";
import { User } from "@/types";

// This is a mock implementation for the MVP
// In a real app, this would connect to your authentication service
export const useAuthState = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Mock successful login
      const mockUser: User = {
        id: "user-1",
        email,
        totalPoints: 0,
        streak: 0,
        badges: []
      };
      
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      return { success: true };
    } catch (error) {
      return { success: false, error: "Login failed" };
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Mock successful registration
      const mockUser: User = {
        id: "user-1",
        email,
        totalPoints: 0,
        streak: 0,
        badges: []
      };
      
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      return { success: true };
    } catch (error) {
      return { success: false, error: "Registration failed" };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return {
    user,
};
