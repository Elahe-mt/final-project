import { NavLink } from "react-router";
import Modal from "./Cart";
import { useState } from "react";
import BasketPage from "../pages/basketpage";

const Header = () => {
const [isBasketOpen, setIsBasketOpen] = useState(false);

  return (
     <>
    <header>
      <div className=" bg-orange-400">
        <div className="flex relative items-center px-6 py-2">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M16.9995 12.9791V15.3877C17.0004 15.6113 16.9545 15.8327 16.8648 16.0375C16.775 16.2424 16.6434 16.4263 16.4783 16.5775C16.3132 16.7286 16.1183 16.8437 15.906 16.9154C15.6938 16.987 15.4689 17.0136 15.2457 16.9935C12.7702 16.725 10.3923 15.8808 8.30312 14.5286C6.35937 13.2959 4.71141 11.6512 3.47627 9.71135C2.11669 7.61679 1.27059 5.23206 1.00653 2.75036C0.986426 2.52834 1.01286 2.30457 1.08416 2.0933C1.15546 1.88203 1.27005 1.6879 1.42065 1.52325C1.57124 1.35861 1.75454 1.22706 1.95886 1.13699C2.16319 1.04691 2.38407 1.00029 2.60744 1.00008H5.02086C5.41128 0.996243 5.78977 1.13422 6.0858 1.3883C6.38182 1.64237 6.57517 1.99521 6.62981 2.38103C6.73168 3.15185 6.92059 3.9087 7.19295 4.63713C7.30118 4.9245 7.32461 5.23682 7.26045 5.53707C7.19629 5.83732 7.04723 6.11292 6.83093 6.33121L5.80925 7.35087C6.95446 9.36092 8.62206 11.0252 10.6361 12.1682L11.6578 11.1485C11.8765 10.9326 12.1527 10.7839 12.4535 10.7198C12.7544 10.6558 13.0673 10.6792 13.3552 10.7872C14.0851 11.059 14.8435 11.2476 15.6158 11.3492C16.0066 11.4042 16.3635 11.6007 16.6186 11.9012C16.8737 12.2017 17.0093 12.5853 16.9995 12.9791Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-white text-sm">+91 (720) 090 1896</span>
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 text-white text-sm">
            Get 50% Off on Selected Items | <NavLink to="/products"
            className="hover:font-bold">Shop Now</NavLink> 
          </span>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-5xl mx-auto bg-gray-100 flex justify-between items-center px-5 py-4">
          <div className="flex gap-6 text-sm text-gray-600">
            <span className="text-orange-400  text-lg font-semibold">
              Minimal <span className="text-rose-600">Shop</span>ping
            </span>
            <span className="cursor-pointer hover:text-orange-400">
              Categories
            </span>
            <span className="cursor-pointer hover:text-orange-400">Deals</span>
            <span className="cursor-pointer hover:text-orange-400">
              What's New
            </span>
            <span className="cursor-pointer hover:text-orange-400">
              Delivery
            </span>
          </div>
          <div className="flex gap-4 text-sm text-gray-600">
            <NavLink to="/account" className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 16 18"
                fill="none"
              >
                <path
                  d="M15 17V15.2222C15 14.2792 14.6313 13.3748 13.9749 12.708C13.3185 12.0412 12.4283 11.6666 11.5 11.6666H4.5C3.57174 11.6666 2.6815 12.0412 2.02513 12.708C1.36875 13.3748 1 14.2792 1 15.2222V17"
                  stroke="black"
                  stroke-opacity="0.75"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 8.11111C9.933 8.11111 11.5 6.51923 11.5 4.55556C11.5 2.59188 9.933 1 8 1C6.067 1 4.5 2.59188 4.5 4.55556C4.5 6.51923 6.067 8.11111 8 8.11111Z"
                  stroke="black"
                  stroke-opacity="0.75"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Account
            </NavLink>
             <button
            onClick={() => setIsBasketOpen(true)}          >
            Cart
          </button>
          </div>
        </div>
      </div>
    </header>

      <Modal isOpen={isBasketOpen} onClose={() => setIsBasketOpen(false)}>
        <BasketPage  onClose={() => setIsBasketOpen(false)} />
      </Modal>
   </>
  );
};

export default Header;
