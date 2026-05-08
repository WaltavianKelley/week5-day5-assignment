import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2>Product Explorer</h2>

            <div>
                <Link to="/">
                <button>Home</button>
                </Link>

                <Link to="products">
                <button> Products</button>
                </Link>
            </div>

            


        </nav>
    )
}