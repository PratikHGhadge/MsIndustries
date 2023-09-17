import React from "react";

function ProductCard({ product }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4 xl:mx-auto ">
      <img
        className="w-full h-48 object-cover"
        src={product.picture}
        alt={product.name}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="mt-2 text-gray-600">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
