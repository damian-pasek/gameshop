import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import PaymentPage from "./pages/PaymentPage";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { AddGameForm } from "./components/AddGameForm";
import { useAuth } from "./context/AuthContext";
import { useState, useEffect } from "react";
import { getGames } from "./api/GameService";
import { Orders } from "./pages/Orders";
import { GameDetail } from "./pages/GameDetail";

function App() {
    const { isLoggedIn, userRole } = useAuth();
    const [games, setGames] = useState([]);

    // Function to refresh the list of games
    const fetchGames = async () => {
        try {
            const data = await getGames();
            setGames(data);
        } catch (error) {
            console.error("Failed to fetch games:", error);
        }
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <ShoppingCartProvider>
            <Navbar />
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<Store />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/game/:id" element={<GameDetail />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                    {isLoggedIn && <Route path="/payment" element={<PaymentPage />} />}
                    <Route
                        path="/add-game"
                        element={
                            userRole === "admin" ? (
                                <AddGameForm onGameAdded={() => {}} />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />
                    {isLoggedIn && <Route path="/orders" element={<Orders />} />}
                </Routes>
            </Container>
        </ShoppingCartProvider>
    );
}

export default App;