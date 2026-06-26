import { useCartStore, type CartItem } from '../store/cartStore';

const BasketPage = () => {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[85vh] overflow-y-auto bg-white rounded-lg p-6 flex gap-5">

      <div className="flex-1 flex flex-col gap-4">

        <div className="border rounded-xl p-4">
          <h2 className="font-bold text-lg mb-4">Cart Details</h2>
          {items.length === 0 ? (
            <p className="text-gray-400 text-sm py-10 text-center">Your cart is empty!</p>
          ) : (
            items.map((item: CartItem) => (
              <div key={item.id} className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded-lg bg-gray-50"/>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-400 text-white text-xs rounded-full flex items-center justify-center">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold line-clamp-1">{item.title}</p>
                  <p className="text-xs text-gray-400">Organic Cotton, Fair Trade quality</p>
                  <div className="flex gap-0.5 mt-1">
                    {[1,2,3,4,5].map((s) => (
                      <span key={s} className={`text-xs ${s <= Math.round(item.rating.rate) ? 'text-orange-400' : 'text-gray-300'}`}>★</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-bold text-sm">{(item.price * item.quantity).toFixed(0)}$</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-xs text-red-400 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border rounded-xl p-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">Delivery Information</h2>
            <button className="border border-orange-400 text-orange-400 text-xs px-3 py-1 rounded-full">Edit</button>
          </div>
          <p className="text-sm text-gray-600">Wade John Smith</p>
          <p className="text-sm text-gray-600">New Zealand - 2nd Cross</p>
          <br/>
          <p className="text-sm text-gray-600">Cross road - Po 25698</p>
          <p className="text-sm text-gray-600">United States</p>
        </div>
      </div>

      <div className="w-52 border rounded-xl p-4 flex flex-col gap-3 h-fit">
        <h2 className="font-bold text-lg">Order Summary</h2>
        <div>
          <p className="text-xs text-gray-500">Products added</p>
          <p className="text-sm font-semibold">{items.length}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">GST</p>
          <p className="text-sm font-semibold">1.25%</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">S-GST</p>
          <p className="text-sm font-semibold">1.25%</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Total Cart Value <span className="text-gray-400">(in $)</span></p>
          <p className="text-sm font-semibold">{total.toFixed(0)}$</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Discount <span className="text-gray-400">(in %)</span></p>
          <p className="text-sm font-semibold">7.5%</p>
        </div>
        <hr/>
        <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-lg">
          <span>🚚</span>
          <div>
            <p className="text-xs font-semibold">Delivery limit</p>
            <p className="text-xs text-gray-400">Free delivery within 50 km's.</p>
          </div>
        </div>
        <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-lg">
          <span>🔄</span>
          <div>
            <p className="text-xs font-semibold">Return Policy</p>
            <p className="text-xs text-gray-400">With-in 5days of product delivery.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BasketPage;