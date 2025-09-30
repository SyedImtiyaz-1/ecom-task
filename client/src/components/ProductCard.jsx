import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const renderStars = (rating) => {
    const roundedRating = Math.round(rating);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<span key={i} className="text-black-400">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">&#9734;</span>);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
      <div className="block">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black truncate">
          {product.title}
        </h3>
        <p className="text-black text-sm mt-1 capitalize">{product.category}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-black">₹{product.price.toFixed()}</span>
          <button
            onClick={handleAddToCart}
            className="bg-black text-white text-sm text-center px-4 py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 ring-black focus:ring-opacity-50 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
