import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Products from "../../components/products/products";
import Search from "../../components/search/search";
import useSearchContext from "../../hooks/SearchContext";

function Home() {
  const { search, setSearch } = useSearchContext();
  const [products, setProducts] = useState(null);
  const [idProduct, setIdProduct] = useState([]);

  const getProducts = useCallback(async () => {
    if (search !== "") {
      await axios
        .get(`http://localhost:5000/?query=${search}`)
        .then(({ data }) => setProducts(data.busqueda));
    }
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [getProducts, products]);

  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      {search && (
        <main className="body-detail">
          {products &&
            products.slice(0, 4).map((item, index) => {
              return (
                <Products
                  {...item}
                  key={index}
                  setIdProduct={setIdProduct}
                  idProduct={idProduct}
                />
              );
            })}
        </main>
      )}
    </div>
  );
}

export default Home;
