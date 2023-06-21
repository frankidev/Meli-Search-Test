import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import Products from '../../components/products/products';
import Search from '../../components/search/search';

function Home() {
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState(null)
  const [idProduct ,setIdProduct] = useState([])
  
  const getProducts = useCallback(async () => {
    if(search !== ''){
      await axios.get(`http://localhost:4000/?query=${search}`)
      .then(({data}) => setProducts(data.busqueda))
    } 
  }, [search])
  
  useEffect(() => {
    getProducts()    
  }, [getProducts])

    
  return (
    <div className="App">
      <Search  search={search} setSearch={setSearch}/>
      {products && (products.slice(0, 4).map((item, index) =>{
        return (
          <Products {...item}
          key={index}
          setIdProduct={setIdProduct}
          idProduct={idProduct}/>
        )
      }))}
    </div>
  );
}

export default Home;
