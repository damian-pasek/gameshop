import React, { useState } from "react";

type EditProductFormProps = {
  product: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imgUrl: string;
    rating: number;
    description: string;
    tags: string;
  };
  onSave: (updatedProduct: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imgUrl: string;
    rating: number;
    description: string;
    tags: string;
  }) => void;
  onCancel: () => void;
};

export function EditProductForm({ product, onSave, onCancel }: EditProductFormProps) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [imgUrl, setImgUrl] = useState(product.imgUrl);
  const [rating, setRating] = useState(product.rating);
  const [description, setDescription] = useState(product.description);
  const [tags, setTags] = useState(product.tags);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: product.id,
      name,
      price,
      quantity,
      imgUrl,
      rating,
      description,
      tags,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <div className="mb-3">
        <label className="form-label">Product name</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input type="number" className="form-control" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
      </div>
      <div className="mb-3">
        <label className="form-label">Quantity</label>
        <input type="number" className="form-control" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
      </div>
      <div className="mb-3">
        <label className="form-label">IMG Url</label>
        <input type="text" className="form-control" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Rating</label>
        <input type="number" className="form-control" value={rating} onChange={(e) => setRating(parseFloat(e.target.value))} step="0.5" min="0" max="10" />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
      </div>
      <div className="mb-3">
        <label className="form-label">Tags</label>
        <input type="text" className="form-control" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Wpisz tagi oddzielone przecinkami" />
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary me-2">Zapisz zmiany</button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Anuluj</button>
      </div>
    </form>
  );
}
