import { Navigate } from "react-router-dom";
import Product from "../../components/product/product";
import Search from "../../components/search/search";
import useSearchContext from "../../hooks/SearchContext";

const ProductDetail = ({ match }) => {
  const { search, setSearch } = useSearchContext();
  if (search) {
    setSearch("");
    return <Navigate to="/" />;
  }
  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <Product />
    </>
  );
};

export default ProductDetail;
