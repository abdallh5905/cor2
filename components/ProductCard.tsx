
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-md mt-1">{product.price.toLocaleString('ar-SA', { style: 'currency', currency: 'SAR' })}</p>
      </div>
       <div className="absolute top-0 right-0 m-3">
         <button className="bg-white text-slate-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
         </button>
       </div>
    </div>
  );
};

export default ProductCard;
