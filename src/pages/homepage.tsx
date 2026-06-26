import ProductsPage from "./productPage"

const HomePage = () => {
  return (
    <div className="max-w-5xl mx-auto bg-gray-100 min-h-screen px-4">
      <img src="public/ad-group.png" alt=""  width={1366} height={463}/>
      <div className="py-2"><ProductsPage/></div>
    </div>
  )
}

export default HomePage