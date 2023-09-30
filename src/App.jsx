import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./landingPage";
import CreateProducts from "./CreateProducts";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<CreateProducts />} path="/createproduct" />
          <Route element={<ProductDetails />} path="/detailsproduct/:index" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
