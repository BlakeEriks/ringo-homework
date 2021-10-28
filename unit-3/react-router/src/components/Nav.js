import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/" className="nav-item">
                <div>Home</div>
            </Link>
            <Link to="/about" className="nav-item">
                <div>About</div>
            </Link>
            <Link to="/stocks" className="nav-item">
                <div>Stocks</div>
            </Link>
        </div>
    )
}

export default Nav