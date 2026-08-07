import React, { useState } from "react";
import { addGame } from "../api/GameService";

type AddGameFormProps = {
  onGameAdded: () => void;
};

export function AddGameForm({ onGameAdded }: AddGameFormProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Helper function to verify whether an image exists at the given URL
  const validateImage = (url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate image before submitting the form
    const imageExists = await validateImage(imgUrl);
    if (!imageExists) {
      setError("Thumbnail image not found");
      return;
    }
    setError(null);

    const game = { 
      name, 
      price: Number(price), 
      quantity: Number(quantity), 
      imgUrl, 
      rating: Number(rating), 
      description, 
      tags 
    };

    try {
      console.log("Submitting game data:", game);
      await addGame(game);
      alert("Game added successfully!");
      setName("");
      setPrice("");
      setQuantity("");
      setImgUrl("");
      setRating("");
      setDescription("");
      setTags("");
      onGameAdded();
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error adding game:", error.message);
        alert(`An error occurred: ${error.message}`);
      } else {
        console.error("Unknown error:", error);
        alert("An unknown error occurred.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <h1>Add Game</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Game Title</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price</label>
        <input
          type="number"
          id="price"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">Quantity</label>
        <input
          type="number"
          id="quantity"
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="imgUrl" className="form-label">Image URL</label>
        <input
          type="text"
          id="imgUrl"
          className="form-control"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="rating" className="form-label">Rating</label>
        <input
          type="number"
          id="rating"
          className="form-control"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="0"
          max="10"
          step="0.5"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags (comma-separated)</label>
        <input
          type="text"
          id="tags"
          className="form-control"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Game</button>
    </form>
  );
}
