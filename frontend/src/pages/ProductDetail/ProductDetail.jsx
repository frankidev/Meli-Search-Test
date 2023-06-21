const ProductDetail = ({ match }) => {
    const { id } = match.params; // Accede al ID del producto desde los parámetros de ruta
    return <h1>Product Detail - ID: {id}</h1>;
  };

export default ProductDetail;
