import { useAuth } from "../context/AuthContext";

export function LoginStatus() {
  const { isLoggedIn, userRole } = useAuth();

  return (
    <span className="me-3">
      {isLoggedIn ? `Your role: ${userRole || "No role"}` : "You are not logged-in"}
    </span>
  );
}
