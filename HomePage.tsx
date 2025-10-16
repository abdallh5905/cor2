import React from 'react';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import type { Product } from './types';

const featuredProducts: Product[] = [
  { id: 1, name: 'فستان سهرة أنيق', price: 450, imageUrl: 'https://picsum.photos/id/1027/400/500', category: 'Dresses' },
  { id: 2, name: 'قميص كلاسيكي', price: 220, imageUrl: 'https://picsum.photos/id/219/400/500', category: 'Tops' },
  { id: 3, name: 'بنطلون جينز عصري', price: 300, imageUrl: 'https://picsum.photos/id/685/400/500', category: 'Bottoms' },
  { id: 4, name: 'معطف شتوي طويل', price: 650, imageUrl: 'https://picsum.photos/id/1084/400/500', category: 'Outerwear' },
];

const newArrivals: Product[] = [
    { id: 5, name: 'بلوزة صيفية خفيفة', price: 180, imageUrl: 'https://picsum.photos/id/234/400/500', category: 'Tops' },
    { id: 6, name: 'تنورة متوسطة الطول', price: 250, imageUrl: 'https://picsum.photos/id/345/400/500', category: 'Bottoms' },
    { id: 7, name: 'جاكيت جلدي', price: 750, imageUrl: 'https://picsum.photos/id/456/400/500', category: 'Outerwear' },
    { id: 8, name: 'فستان كوكتيل', price: 550, imageUrl: 'https://picsum.photos/id/567/400/500', category: 'Dresses' },
];

interface CategoryCardProps {
    title: string;
    imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl }) => (
    <a href="#" className="relative group block rounded-lg overflow-hidden h-64">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"/>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
    </a>
);

const CategorySection: React.FC = () => (
    <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-10">
                تسوق حسب الفئة
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <CategoryCard title="فساتين" imageUrl="https://picsum.photos/id/659/500/500"/>
                <CategoryCard title="ملابس علوية" imageUrl="https://picsum.photos/id/646/500/500"/>
                <CategoryCard title="بناطيل" imageUrl="https://picsum.photos/id/599/500/500"/>
                <CategoryCard title="معاطف" imageUrl="https://picsum.photos/id/493/500/500"/>
            </div>
        </div>
    </section>
);

const HomePage: React.FC = () => {
  return (
    <main>
        <Hero />
        <ProductGrid title="منتجات مختارة" products={featuredProducts} />
        <CategorySection />
        <ProductGrid title="وصل حديثاً" products={newArrivals} />
    </main>
  );
};

export default HomePage;