import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./app.scss";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="/detail/:id" element={<ProductDetail />} />          
        </Route>
      </>
    )
  );

  return (    
        <RouterProvider router={router} />      
  );
}

export default App;
