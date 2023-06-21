import React from 'react';
import './products.scss';
import { Link } from 'react-router-dom';

const  Products = (props) =>  {
    const {title, thumbnail, price, seller, address, id} = props
    
    return   (
            <Link to={`/detail/:${id}`}>
            <div className='search-card' >
            <div className='d-flex product-image-description'>
            <img src={`${thumbnail}`} alt="" />
            <div>
            <h2>${price}
            {seller?.car_dealer && (            
                <img src="../../Assets/ic_shipping@2x.png.png" className='car-dealer-icon' alt="car-dealer" />            
            )}
            </h2>
            <h1>{title}</h1>
            </div>
            </div>
                <p>{address?.state_name}</p>
            </div>
            </Link>
    )
}

export default Products;