import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"

export default function Products () {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setProducts(data.products);
        }

        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())
    );
     
    return(

        <div className='page'>

            <h1>Products</h1>

            <input 
                type="text"
                placeholder='Search Products...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />


                <div className="products-grid">
                    {filteredProducts.map((product)=>(
                        <ProductCard 
                            key={product.id}
                            product={product}
                            />

                    ))}

                    

                </div>

        </div>

    )
}