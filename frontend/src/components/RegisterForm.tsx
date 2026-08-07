import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export function RegisterForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match!" );
            return;
        }

        try {
            const response = await fetch("/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                alert("Registration successful! You can now log in.");
                navigate("/login");
            } else {
                const errorText = await response.text();
                setErrorMessage(errorText || "Registration failed.");
            }
        } catch (error) {
            console.error("Registration error:", error);
            setErrorMessage("A server error occurred during registration.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-5 col-lg-4">
                    <div className="card shadow-sm p-4">
                        <h1 className="text-center mb-4 fs-3">Register</h1>
                        <form onSubmit={handleRegister}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="form-control"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-success w-100">
                                Sign up
                            </button>
                        </form>
                        {errorMessage && (
                            <p className="mt-3 text-center text-danger mb-0">{errorMessage}</p>
                        )}
                        <div className="mt-3 text-center">
                            <small>
                                Already have an account? <Link to="/login">Log in</Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}