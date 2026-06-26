import { Route, Routes } from "react-router"
import MainLayout from "./layout/mainlayout"
import HomePage from "./pages/homepage"
import ProductsPage from "./pages/productPage"
import FavoritesPage from "./pages/FavoritesPage"
import BasketPage from "./pages/basketpage"

const App = () => {
  return (
 
    <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="favorite" element={<FavoritesPage/>} />
          </Route>
            <Route path="basket" element={<BasketPage/>} />
        
    </Routes>
  
  )
}

export default App