import instance from "./instanceProducts";

export const getProductsById = async (id) => {
    try {
      const data = await instance({
        url: `items/:${id}`,
        method: "GET",       
      }).then((res) => {
        return res.data;
      });
      return data;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  export const getProductsDescription = async (id) => {
    try {
      const data = await instance({
        url: `items/:${id}​/description`,
        method: "GET",       
      }).then((res) => {
        return res.data;
      });
      return data;
    } catch (error) {
      console.log(error);
      return false;
    }
  };