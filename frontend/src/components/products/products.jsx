import React from "react";
import "./products.scss";
import { Link } from "react-router-dom";
import useSearchContext from "../../hooks/SearchContext";

const Products = (props) => {
  const { setIdProduct, setSearch } = useSearchContext();
  const { title, thumbnail, price, seller, address, id } = props;
  const handleProduct = () => {
    setIdProduct(id);
    setSearch("");
  };
  return (
    <Link to={`/detail`} replace={true} onClick={handleProduct}>
      <div className="search-card">
        <div className="d-flex product-image-description">
          <img src={`${thumbnail}`} alt="" />
          <div>
            <h1>
              ${price}
              {seller?.car_dealer && (
                <img
                  src="../../Assets/ic_shipping@2x.png.png"
                  className="car-dealer-icon"
                  alt="car-dealer"
                />
              )}
            </h1>
            <h2>{title}</h2>
          </div>
        </div>
        <p>{address?.state_name}</p>
      </div>
    </Link>
  );
};

export default Products;
