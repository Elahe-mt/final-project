
import Product from '../components/product';
import { useFavoriteStore } from '../store/favoriteStore';

const FavoritesPage = () => {
   const favorites = useFavoriteStore((state) => state.items);

 

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 min-h-screen bg-gray-50">
      <h1 className="text-xl font-bold text-amber-500 mb-6">
        FavoriteProducts:
      </h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-400 py-20">
          No products added yet !
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {favorites.map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;