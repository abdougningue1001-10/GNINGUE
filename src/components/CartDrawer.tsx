import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-black border-l border-white/10 z-[70] flex flex-col"
          >
            <div className="p-8 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Votre Panier</h2>
                <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2">Votre panier est vide</h3>
                    <p className="text-gray-500 text-sm font-medium">Découvrez nos nouveaux maillots et accessoires.</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="bg-red-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-red-700 transition-all"
                  >
                    Continuer mes achats
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="w-24 h-24 bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-black text-white uppercase tracking-tighter leading-tight">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-red-600 font-black text-sm">
                        {item.price.toLocaleString()} FCFA
                      </p>
                      <div className="flex items-center gap-4 pt-2">
                        <div className="flex items-center bg-white/5 border border-white/10 rounded-xl">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:text-red-600 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-black text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:text-red-600 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-white/10 space-y-6 bg-white/5 backdrop-blur-xl">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-black uppercase tracking-widest text-xs">Total</span>
                  <span className="text-2xl font-black text-white tracking-tighter">
                    {totalPrice.toLocaleString()} FCFA
                  </span>
                </div>
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="w-full bg-red-600 text-white py-5 rounded-2xl font-black uppercase tracking-tighter flex items-center justify-center gap-3 hover:bg-red-700 transition-all hover:scale-[1.02] shadow-2xl shadow-red-600/20"
                >
                  Commander
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-[10px] text-center text-gray-500 font-bold uppercase tracking-widest">
                  Livraison gratuite à partir de 50,000 FCFA
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
