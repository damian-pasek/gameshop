import axios from "axios";

const API_BASE_URL = "/";

// Fetch the list of games
export const fetchGames = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
};

// Add a new game
export const addGame = async (game: { name: string; price: number; quantity: number; imgUrl: string }) => {
    const response = await axios.post("/games", game, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.data;
};



// Delete a game
export const deleteGame = async (id: any) => {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
};

// Login
export const login = async (credentials: { username: string; password: string }) => {
    const response = await axios.post('/auth/login', credentials);
    if (response.status !== 200) {
        throw new Error("Invalid credentials");
    }
    return {
        token: response.data.token,
        role: response.data.role,
    };
};

// Fetch order history
export const fetchOrders = async () => {
    const response = await axios.get("/orders");
    return response.data;
};