import { useCartStore } from '../store/cartStore';
import { Heart, ShoppingCart } from 'lucide-react';
import { NavLink } from 'react-router';
import { useFavoriteStore } from '../store/favoriteStore';

const BottomBar = () => {
  const cartCount = useCartStore((state) => state.items.length);
   const favCount = useFavoriteStore((state) => state.items.length);

  if (cartCount === 0 && favCount === 0) return null; 
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-amber-500 text-white px-6 py-2.5 rounded-full shadow-xl">
        
        <NavLink to="/basket" className="flex items-center gap-2 text-sm">
          <ShoppingCart size={16} />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className=" text-white text-xs  flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </NavLink>

        <div className="w-px h-4 bg-gray-600" />

        <NavLink to="/favorite" className="flex items-center gap-2 text-sm">
          <Heart size={16} className='hover:text-red-600 fill-red-500'/>
          <span>Wishlist</span>
          {favCount > 0 && (
            <span className=" text-white text-xs  flex items-center justify-center">
              {favCount}
            </span>
          )}
        </NavLink>

      </div>
    </div>
  );
};

export default BottomBar;