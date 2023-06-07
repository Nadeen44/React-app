import React from 'react' 
import Style from './Style.css' 

 
function ProductCard({product}) { 
  return ( 
    <> 
    <div className='col-md-3 mb-1 '  > 
        <div className='card text-center p-3 h-100 ' > 
            <img src={product.image} className="p-2" alt="" /> 
            <h4 className='mb-3'>{product.title} </h4> 
            <h5 className='mb-3 text-primary'>{product.category} </h5> 
            <h5 className='mb-3 text-danger'>{product.price} </h5> 
            <a href="#!" className='btn btn-dark'> Details </a> 
        </div> 
    </div> 
    </> 
  ) 
} 
 
export default ProductCard