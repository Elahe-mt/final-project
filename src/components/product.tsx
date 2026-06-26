import { useState } from 'react';
import {  CircleCheckBig, Trash2 } from 'lucide-react';
import type { ProductType } from '../pages/productPage';
import { useCartStore } from '../store/cartStore';
import FavoriteButton from './FavoriteButton';
import AsideModal from './asidmodal';

type Props = {
  data: ProductType;
};

const Product = ({ data }: Props) => {
  const stars = Math.round(data.rating.rate);
  const isAddedToCart = useCartStore((state) =>
    state.items.some((item) => item.id === data.id)
  );
  const removeItem = useCartStore((state) => state.removeItem);

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
    <div className="group bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col relative">
      <div className="absolute top-3 right-3 z-20">
        {isAddedToCart ? (
          <button
            type="button"
            onClick={() => removeItem(data.id)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-white shadow-lg transition hover:bg-pink-700"
          >
            <Trash2 size={20} />
          </button>
        ) : (
          <FavoriteButton product={data} />
        )}
      </div>

      <div className="w-full h-48 overflow-hidden relative">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        {isAddedToCart ? (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-lime-600/35 backdrop-blur-[2px] transition-all duration-300">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lime-600 shadow-lg">
              <CircleCheckBig size={20} />
            </div>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
            <button
              onClick={() => setIsCartOpen(true)}
              className="absolute left-1/2 top-1/3 z-10 flex h-12 w-12 -translate-x-1/2 
         translate-y-2 scale-90 items-center justify-center rounded-full bg-white/80 text-gray-900 opacity-0 shadow-[0_14px_34px_rgba(0,0,0,0.16)] ring-1 ring-white/70 backdrop-blur-md 
         transition-all duration-300 hover:bg-white/90  group-hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                className="h-10 w-10"
              >
                <rect
                  width="42"
                  height="42"
                  rx="21"
                  fill="white"
                  fillOpacity="0.25"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 10C9.44772 10 9 10.4477 9 11C9 11.5523 9.44772 12 10 12H13.1803L14.012 16.1551C14.0164 16.1835 14.022 16.2116 14.0288 16.2392L15.6992 24.5848L15.6993 24.5857C15.8366 25.2759 16.2122 25.8959 16.7605 26.3373C17.3062 26.7766 17.9884 27.011 18.6886 27H28.3914C29.0916 27.011 29.7738 26.7766 30.3195 26.3373C30.868 25.8958 31.2437 25.2754 31.3808 24.5848L31.3809 24.5848L31.3823 24.5773L32.9823 16.1873C33.0381 15.8946 32.9605 15.5922 32.7705 15.3626C32.5805 15.1329 32.298 15 32 15H15.8204L14.9806 10.8037C14.887 10.3364 14.4766 10 14 10H10ZM17.6606 24.1937L16.2207 17H30.7913L29.4185 24.1984C29.3723 24.4273 29.2474 24.6328 29.0654 24.7793C28.8826 24.9265 28.6538 25.0047 28.4192 25.0002L28.4 25H18.68L18.6608 25.0002C18.4262 25.0047 18.1974 24.9265 18.0146 24.7793C17.8318 24.6322 17.7066 24.4254 17.6608 24.1952L17.6606 24.1937ZM16 31C16 29.8954 16.8954 29 18 29C19.1046 29 20 29.8954 20 31C20 32.1046 19.1046 33 18 33C16.8954 33 16 32.1046 16 31ZM27 31C27 29.8954 27.8954 29 29 29C30.1046 29 31 29.8954 31 31C31 32.1046 30.1046 33 29 33C27.8954 33 27 32.1046 27 31Z"
                  fill="black"
                  fillOpacity="0.55"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="p-3 flex flex-col gap-1">
        <div className="flex justify-between items-start gap-2">
          <p className="text-sm font-semibold text-gray-800 leading-tight line-clamp-1">
            {data.title}
          </p>
          <span className="text-sm font-bold text-gray-900 whitespace-nowrap">
            {data.price}$
          </span>
        </div>
        <p className="text-xs text-gray-500 capitalize">{data.category}</p>
        <div className="flex items-center gap-0.5 mt-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`text-sm ${star <= stars ? "text-orange-400" : "text-gray-300"}`}
            >
              <b>★</b>
            </span>
          ))}
        </div>
      </div>
    </div>
    <AsideModal
      product={data}
      isOpen={isCartOpen}
      onClose={() => setIsCartOpen(false)}
       stars={stars}
    />
    </>
  );
};

export default Product;
