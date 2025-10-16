
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-[60vh] md:h-[80vh]" style={{ backgroundImage: "url('https://picsum.photos/1600/900?random=1&grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          أناقة تتجاوز الزمن
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          اكتشف مجموعتنا الجديدة من الملابس المصممة لتعكس أسلوبك الفريد.
        </p>
        <button className="bg-white text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
          تسوق الآن
        </button>
      </div>
    </div>
  );
};

export default Hero;
