import React, { useState } from "react";
import { EditProductForm } from "./EditProductForm";
import { StoreItem } from "./StoreItem";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imgUrl: string;
};

type ProductListProps = {
  products: Product[];
  onUpdateProduct: (updatedProduct: Product) => void;
  onDeleteProduct: (id: number) => void;
};

export function ProductList({
  products,
  onUpdateProduct,
  onDeleteProduct,
}: ProductListProps) {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleEdit = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (product) setEditingProduct(product);
  };

  const handleSave = (updatedProduct: Product) => {
    onUpdateProduct(updatedProduct);
    setEditingProduct(null);
  };

  const handleCancel = () => {
    setEditingProduct(null);
  };

  return (
    <div>
      {editingProduct ? (
        <EditProductForm
          product={editingProduct}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <StoreItem
                {...product}
                onEdit={handleEdit}
                onDelete={onDeleteProduct}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
