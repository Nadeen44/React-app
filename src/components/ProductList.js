import React , {useState , useEffect} from 'react' 
import ProductCard from './ProductCard' 
import axios from 'axios' 
import Style from './Style.css' 
function ProductList() { 
 
    const [products , setProducts] = useState([]) 
    const getProducts = async ()=>{ 
        const response = await axios.get(`https://fakestoreapi.com/products`); 
        setProducts(response.data); 
    } //getProducts 
     
    useEffect( ()=>{ 
        getProducts() 
    } , [] ) 
 
    // console.log(products) 
 
  return ( 
    <> 
    <section className='py-3 container' > 
        <div className='row product'> 
    { 
        products.map( (product)=>{ 
            return(<ProductCard key={product.id} product={product} />) 
        } ) 
    } 
                 
        </div>{/*row*/} 
    </section> 
    </> 
  ) 
} 
 
export default ProductList