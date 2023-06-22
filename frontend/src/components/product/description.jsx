import { useEffect, useState } from "react";
import useSearchContext from "../../hooks/SearchContext";
import instance from "../../services/instanceProducts";

const Description = () => {
  const { idProduct } = useSearchContext();
  const [description, setDescription] = useState(null);

  useEffect(() => {
    if (!idProduct) return;
    const fetchData = async () => {
      const data = await instance({
        url: `/items/${idProduct}/description`,
        method: "GET",
      }).then((res) => {
        return res.data;
      });
      setDescription(data);
      return data;
    };
    fetchData();
  }, [idProduct, setDescription]);

  return (
    description?.plain_text && (
      <>
        <h2>Descripción del producto</h2>
        <p>{description?.plain_text ? description.plain_text : ""}</p>
      </>
    )
  );
};

export default Description;
