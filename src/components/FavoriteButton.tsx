import { Heart } from 'lucide-react';
import { useFavoriteStore } from '../store/favoriteStore';
import type { ProductType } from '../pages/productPage';

type Props = { product: ProductType };

const FavoriteButton = ({ product }: Props) => {
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const isFavorite = useFavoriteStore((state) => state.isFavorite(product.id));

  return (
    <button
       onClick={(e) => { e.stopPropagation(); toggleFavorite(product); }}
      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm transition-colors hover:scale-110"
    >
      <Heart
        size={16}
        className={isFavorite ? 'text-red-500 ' : 'text-gray-400'}
      />
    </button>
  );
};

export default FavoriteButton;