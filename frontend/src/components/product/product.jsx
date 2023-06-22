import React, { useEffect, useState } from "react";
import "./product.scss";

import useSearchContext from "../../hooks/SearchContext";
import instance from "../../services/instanceProducts";
import Description from "./description";

const Product = (props) => {
  const { idProduct } = useSearchContext();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    if (!idProduct) return;
    const fetchData = async () => {
      const data = await instance({
        url: `/items/${idProduct}`,
        method: "GET",
      }).then((res) => {
        return res.data;
      });
      setProduct(data);
      return data;
    };
    fetchData();
  }, [idProduct, setProduct]);

  console.log(product);

  return (
    product && (
      <main className="body-detail">
        <article className="product-detail ">
          <div className="d-flex">
            <div className="div-image">
              <img src={product.pictures[0].url} alt={product.title} />
            </div>
            <div className="buy-product">
              <h4>{product.title}</h4>
              <h1>${product.price}</h1>
              <button>Comprar</button>
            </div>
          </div>
          <Description idProduct={idProduct} />
        </article>
      </main>
    )
  );
};

export default Product;
