
import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  title: string;
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, products }) => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-10">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
