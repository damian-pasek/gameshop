import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem, Game } from "../components/StoreItem";
import { EditProductForm } from "../components/EditProductForm";
import { getGames, updateGame, deleteGame } from "../api/GameService";
import { useAuth } from "../context/AuthContext";

export function Store() {
  const [games, setGames] = useState<Game[]>([]);
  const [editingGame, setEditingGame] = useState<Game | null>(null);
  const { userRole } = useAuth();

  // Search and filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // List of tags
  const availableTags = [
    "Action",
    "Fighting",
    "Fantasy",
    "Horror",
    "Platformer",
    "Adventure",
    "RPG",
    "Sports",
    "Shooter",
  ].sort((a, b) => a.localeCompare(b));

  // Function to toggle filter
  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
        prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

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

  const handleEditGame = (game: Game) => {
    setEditingGame(game);
  };

  const handleUpdateGame = async (updatedGame: Game) => {
    try {
      const { id, ...gameData } = updatedGame;
      await updateGame(id, gameData);
      setGames(prevGames =>
          prevGames.map(game =>
              game.id === updatedGame.id ? updatedGame : game
          )
      );
      setEditingGame(null);
    } catch (error) {
      console.error("Failed to update game:", error);
    }
  };

  const handleDeleteGame = async (id: number) => {
    try {
      await deleteGame(id);
      setGames(prevGames => prevGames.filter(game => game.id !== id));
    } catch (error) {
      console.error("Failed to delete game:", error);
    }
  };

  // Filter games by search term and selected tags
  const filteredGames = games.filter(game => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    const gameTags = game.tags.split(",").map(tag => tag.trim());
    const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => gameTags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
      <div className="container mt-4">
        <div className="row">
          {/* Filters Panel */}
          <div className="col-md-3">
            <h4>Filters</h4>
            {availableTags.map(tag => (
                <div key={tag} className="d-flex align-items-center mb-2">
                  {/* Filter toggle */}
                  <button
                      type="button"
                      className={`btn ${selectedTags.includes(tag) ? "btn-secondary" : "btn-outline-secondary"}`}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "2px"
                      }}
                      onClick={() => toggleTag(tag)}
                  />
                  {/* Tag name */}
                  <div
                      style={{
                        width: "100px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        fontSize: "1rem",
                        backgroundColor: selectedTags.includes(tag) ? "#6c757d" : "transparent",
                        color: selectedTags.includes(tag) ? "white" : "#6c757d",
                        paddingLeft: "10px"
                      }}
                  >
                    {tag}
                  </div>
                </div>
            ))}
            {selectedTags.length > 0 && (
                <div className="mt-2">
                  <strong>Selected:</strong> {selectedTags.join(", ")}
                </div>
            )}
          </div>
          {/* Main column – search and catalog */}
          <div className="col-md-9">
            <div className="mb-3">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Search games..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {editingGame ? (
                <EditProductForm
                    product={editingGame}
                    onSave={handleUpdateGame}
                    onCancel={() => setEditingGame(null)}
                />
            ) : (
                <Row md={2} xs={1} lg={3} className="g-4">
                  {filteredGames.map(game => (
                      <Col key={game.id}>
                        <StoreItem
                            {...game}
                            onEdit={userRole === "admin" ? handleEditGame : undefined}
                            onDelete={userRole === "admin" ? handleDeleteGame : undefined}
                        />
                      </Col>
                  ))}
                </Row>
            )}
          </div>
        </div>
      </div>
  );
}