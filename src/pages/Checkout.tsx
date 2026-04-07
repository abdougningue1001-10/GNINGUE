import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { useAuth } from '../context/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const { user, loading } = useAuth();
  const [isOrdered, setIsOrdered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    try {
      const orderData = {
        userId: user.uid,
        date: new Date().toISOString(),
        status: 'En cours',
        total: totalPrice,
        items: cart.map(item => ({
          productId: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        }))
      };

      await addDoc(collection(db, 'orders'), orderData);
      setIsOrdered(true);
      setTimeout(() => {
        clearCart();
        navigate('/profil');
      }, 3000);
    } catch (error) {
      console.error('Order failed:', error);
      alert('Une erreur est survenue lors de la commande. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-8"
        >
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-green-500/20">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Commande Confirmée !</h2>
            <p className="text-gray-400 font-medium max-w-md mx-auto">
              Merci pour votre achat. Vous allez recevoir un email de confirmation d'ici quelques instants.
            </p>
          </div>
          <p className="text-red-600 font-black uppercase tracking-widest text-xs animate-pulse">
            Redirection vers votre profil...
          </p>
        </motion.div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-black pt-32 flex items-center justify-center p-4">
        <div className="text-center space-y-8">
          <SectionTitle
            centered
            title="Votre panier est vide"
            subtitle="Ajoutez des articles à votre panier pour passer commande."
          />
          <Link
            to="/boutique"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-red-700 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Retour à la boutique
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 space-y-8">
            <SectionTitle
              title="Finaliser la Commande"
              subtitle="Remplissez vos informations de livraison et de paiement."
              className="mb-0"
            />

            <form onSubmit={handleOrder} className="space-y-8">
              <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 space-y-6">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3 mb-6">
                  <Truck className="w-6 h-6 text-red-600" />
                  Informations de Livraison
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Prénom" placeholder="Jean" required />
                  <Input label="Nom" placeholder="Dupont" required />
                  <div className="md:col-span-2">
                    <Input label="Adresse" placeholder="123 Rue du Stade" required />
                  </div>
                  <Input label="Ville" placeholder="Dakar" required />
                  <Input label="Code Postal" placeholder="12500" required />
                </div>
              </div>

              <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 space-y-6">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3 mb-6">
                  <CreditCard className="w-6 h-6 text-red-600" />
                  Paiement Sécurisé
                </h3>
                <div className="space-y-6">
                  <Input label="Numéro de Carte" placeholder="0000 0000 0000 0000" required />
                  <div className="grid grid-cols-2 gap-6">
                    <Input label="Date d'expiration" placeholder="MM/YY" required />
                    <Input label="CVV" placeholder="123" required />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white py-6 rounded-2xl font-black uppercase tracking-tighter text-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Traitement...' : `Payer ${totalPrice.toLocaleString()} FCFA`}
              </button>
            </form>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 sticky top-32 space-y-8">
              <h3 className="text-xl font-black text-white uppercase tracking-tighter">Résumé de la Commande</h3>
              
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-white/5 rounded-xl overflow-hidden border border-white/10 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-[10px] font-black text-white uppercase tracking-tighter leading-tight">{item.name}</h4>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Qté: {item.quantity}</p>
                      <p className="text-xs font-black text-red-600 mt-1">{(item.price * item.quantity).toLocaleString()} FCFA</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5 space-y-4">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
                  <span>Sous-total</span>
                  <span className="text-white">{totalPrice.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
                  <span>Livraison</span>
                  <span className="text-green-500">Gratuit</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="text-sm font-black text-white uppercase tracking-tighter">Total</span>
                  <span className="text-2xl font-black text-red-600 tracking-tighter">{totalPrice.toLocaleString()} FCFA</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                  Paiement 100% sécurisé. Vos données sont protégées par cryptage SSL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Input = ({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black text-red-600 uppercase tracking-widest">{label}</label>
    <input
      {...props}
      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors placeholder:text-white/10"
    />
  </div>
);

export default Checkout;
