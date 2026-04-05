import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { ShoppingBag, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleBuy = () => {
    alert(`Produit ajouté au panier : ${product.name}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-black/40 border border-white/5 rounded-3xl overflow-hidden group"
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
        <div className="absolute top-4 right-4 bg-white text-black px-4 py-1 rounded-full font-black text-sm uppercase tracking-tighter">
          {product.price.toLocaleString()} FCFA
        </div>
      </div>

      <div className="p-8">
        <span className="text-red-600 font-black uppercase tracking-widest text-[10px] mb-2 block">
          {product.category === 'kit' ? 'Équipement Officiel' : 'Accessoire'}
        </span>
        <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
          {product.description}
        </p>
        
        <button
          onClick={handleBuy}
          className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase tracking-tighter flex items-center justify-center gap-3 hover:bg-red-600 hover:text-white transition-all group/btn"
        >
          <ShoppingBag className="w-5 h-5" />
          Acheter Maintenant
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
