import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"
import SortControls from "../components/SortControls";

export default function Products () {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [sortOrder, setSortOrder] = useState('default');

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setProducts(data.products);
        }

        fetchProducts();
    }, []);

    let filteredProducts = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())
    );
     
      if (sortOrder === "lowToHigh") {
        filteredProducts = [...filteredProducts].sort(

    (a, b) => a.price - b.price
    );


    }

    if (sortOrder === "highToLow") {
        filteredProducts = [...filteredProducts].sort(

    (a, b) => b.price - a.price
    );
    }


    return(

        <div className='page'>

            <h1>Products</h1>

            <input 
                type="text"
                placeholder='Search Products...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />

                <SortControls
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}/>


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