import { Routes, Route } from "react-router-dom";
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="product-details/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
