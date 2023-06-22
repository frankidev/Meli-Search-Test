import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./app.scss";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { SearchProvider } from "./context/SearchProvider";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<ProductDetail />} />
      </>
    )
  );

  return (
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  );
}

export default App;
