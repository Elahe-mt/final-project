import { useState } from "react";
import type { ProductType } from "../pages/productPage";
import AddButton from "./addbutton";

type CartModalProps = {
  product: ProductType;
  isOpen: boolean;
  onClose: () => void;
  stars: number;
};

const AsideModal = ({ product, isOpen, onClose, stars }: CartModalProps) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/20  ">
      <button
        onClick={onClose}
        className="absolute  h-full w-full cursor-default"
      />

      <aside className="absolute right-3 top-2 bottom-2 z-10 flex h-auto w-full max-w-sm flex-col rounded-lg bg-white px-5 py-4 shadow-2xl">
        <div className="reletive">
          <button
            className="absolute right-3 top-2 rounded-full px-2 bg-gray-50 cursor-pointer "
            onClick={onClose}
          >
            ✕
          </button>

          <div>
            <img
              src={product.image}
              alt={product.title}
              className=" w-56 h-48 object-contain mb-4 p-2 rounded-lg  bg-gray-50"
            />
          </div>

          <div className="p-3 flex flex-col gap-1">
            <div className="flex justify-between items-start gap-2">
              <p className="text-sm font-semibold text-gray-800 leading-tight line-clamp-1">
                {product.title}
              </p>
              <span className="text-sm font-bold text-gray-900 whitespace-nowrap">
                {product.price}$
              </span>
            </div>
            <p className="text-xs text-gray-500 capitalize">
              {product.category}
            </p>

            <div className="flex items-center gap-0.5 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-sm ${star <= stars ? "text-orange-400" : "text-gray-300 "}`}
                >
                  <b>★</b>
                </span>
              ))}
            </div>

            <div className="flex mt-2 w-28 items-center rounded-md border border-gray-200 bg-white overflow-hidden">
              <button
                onClick={decreaseQuantity}
                disabled={quantity === 1}
                className="flex h-8 w-8 items-center justify-center text-lg text-gray-500 hover:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed transition"
              >
                −
              </button>

              <span className="flex-1 text-center text-sm font-semibold text-gray-900 border-x border-gray-200 py-1.5">
                {quantity}
              </span>

              <button
                onClick={increaseQuantity}
                className="flex h-8 w-8 items-center justify-center text-lg text-gray-700 hover:bg-orange-400 hover:text-white transition"
              >
                +
              </button>
            </div>
            <div className="mt-6">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 0C0.447715 0 0 0.447715 0 1V14C0 14.5523 0.447715 15 1 15H2.33682C2.12085 15.4546 2 15.9632 2 16.5C2 18.433 3.567 20 5.5 20C7.433 20 9 18.433 9 16.5C9 15.9632 8.87915 15.4546 8.66318 15H15.3368C15.1208 15.4546 15 15.9632 15 16.5C15 18.433 16.567 20 18.5 20C20.433 20 22 18.433 22 16.5C22 15.9632 21.8792 15.4546 21.6632 15H23C23.5523 15 24 14.5523 24 14V9C24 8.73478 23.8946 8.48043 23.7071 8.29289L20.7071 5.29289C20.5196 5.10536 20.2652 5 20 5H17V1C17 0.447715 16.5523 0 16 0H1ZM18.5 13H22V9.41421L19.5858 7H17V13H18.5ZM18.5 15C17.6716 15 17 15.6716 17 16.5C17 17.3284 17.6716 18 18.5 18C19.3284 18 20 17.3284 20 16.5C20 15.6716 19.3284 15 18.5 15ZM4 16.5C4 15.6716 4.67157 15 5.5 15C6.32843 15 7 15.6716 7 16.5C7 17.3284 6.32843 18 5.5 18C4.67157 18 4 17.3284 4 16.5ZM15 13H5.5H2V2H15V6V13Z"
                    fill="black"
                    fill-opacity="0.5"
                  />
                </svg>

                <div>
                  <h3 className="text-sm font-semibold text-gray-800 leading-tight line-clamp-1">
                    Delivery limit
                  </h3>
                  <span className="text-xs text-gray-500 ">
                    Free delivery within 50 km's.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-3">
                <svg
                  className="mt-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.11678 4.531C3.04167 4.67237 3 4.83265 3 5V12C3 15.4464 5.28175 18.2003 7.3415 20.0026C8.39238 20.9221 9.43854 21.6408 10.22 22.1292C10.6118 22.3741 10.9397 22.5627 11.1719 22.6913C11.2881 22.7556 11.3806 22.805 11.4453 22.839C11.4777 22.856 11.5032 22.8692 11.5212 22.8784L11.5427 22.8894L11.5492 22.8926L11.5514 22.8937L11.5522 22.8941C11.5525 22.8943 11.5528 22.8944 12 22L11.5528 22.8944C11.8412 23.0386 12.1815 23.0349 12.4667 22.8844C14.3771 21.8764 16.1212 20.5844 17.6401 19.0544L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L18.3329 16.9187C18.3295 16.9152 18.326 16.9118 18.3226 16.9083L5.45315 4.03894C5.44296 4.02829 5.43255 4.01788 5.42194 4.00773L1.70711 0.292893ZM5 6.41421V12C5 14.5536 6.71825 16.7997 8.6585 18.4974C9.60762 19.3279 10.5615 19.9842 11.28 20.4332C11.5626 20.6098 11.8071 20.7534 11.9985 20.8619C13.5501 19.9879 14.9727 18.9035 16.2259 17.6401L5 6.41421ZM11.6503 1.06318C11.8763 0.978771 12.1253 0.978944 12.3512 1.06367L20.3512 4.06367C20.7415 4.21003 21.0001 4.58316 21.0001 5V12V12.0066H21.0001C20.9949 12.7832 20.8754 13.5548 20.6451 14.2964C20.4814 14.8239 19.9211 15.1188 19.3936 14.9551C18.8662 14.7913 18.5713 14.231 18.735 13.7036C18.9067 13.1507 18.996 12.5755 19.0001 11.9966V5.693L11.9993 3.06772L9.18991 4.11682C8.67252 4.31002 8.09647 4.04721 7.90327 3.52982C7.71007 3.01243 7.97288 2.43639 8.49026 2.24318L11.6503 1.06318Z"
                    fill="black"
                    fill-opacity="0.5"
                  />
                </svg>

                <div>
                  <h3 className="text-sm font-semibold text-gray-800 leading-tight line-clamp-1">
                    Return Policy
                  </h3>
                  <span className="text-xs text-gray-500 ">
                    With-in 5days of product delivery.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
         <AddButton product={product}
         onClose={onClose}
         quantity={quantity}/>
         </div>
        </div>
      </aside>
    </div>
  );
};

export default AsideModal;
