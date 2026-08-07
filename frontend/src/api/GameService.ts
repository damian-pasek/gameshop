import axios from "axios";

const API_BASE_URL = "/games";

export async function getGames() {
    const response = await axios.get(API_BASE_URL);
    return response.data;
}

export async function getGameById(id: number) {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
}

export async function addGame(game: {
    name: string;
    price: number;
    quantity: number;
    imgUrl: string;
    rating: number;
    description: string;
    tags: string;
}) {
    const response = await axios.post(API_BASE_URL, game, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.data;
}

export async function updateGame(id: number, game: {
    name: string;
    price: number;
    quantity: number;
    imgUrl: string;
    rating: number;
    description: string;
    tags: string;
}) {
    const response = await axios.put(`${API_BASE_URL}/${id}`, game, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.data;
}

export async function deleteGame(id: number) {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
}
