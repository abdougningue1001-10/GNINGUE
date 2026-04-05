import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const Shop = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          centered
          title="Boutique Officielle"
          subtitle="Portez fièrement nos couleurs. Découvrez les nouveaux maillots de la saison 2026."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
