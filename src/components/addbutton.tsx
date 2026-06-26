
import type { ProductType } from "../pages/productPage";
import { useCartStore } from "../store/cartStore";
type AddButtonProps={
   product: ProductType;
   onClose: () => void;
   quantity:number;
}
const AddButton = ({product,onClose,quantity}:AddButtonProps) => {
   const addItem = useCartStore((state) => state.addItem);

  return (
     <div className="flex justify-between ">
            <div className="flex gap-3">
              <button className="border-2 border-amber-500 rounded-full px-2 py-1 text-base text-amber-500"
              onClick={() => { addItem(product,quantity); onClose(); }}
>
                Add to cart
              </button>
              <button className="text-gray-600"
               onClick={onClose}>cancel</button>
            </div>
            <span className="text-sm font-bold text-gray-500 absolute bottom-1 right-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              {product.price}$
            </span>
          </div>
  )
}

export default AddButton