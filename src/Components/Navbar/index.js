import {Link} from "react-router-dom"
import "./index.css"

const Navbar = () => (
    <nav className="nav-bar">
        <img src="https://res.cloudinary.com/defacaof3/image/upload/v1717158426/Screenshot_2024-05-31_175456-removebg-preview_fk0of6.png" className="logo" alt="alt" />
        <ul className="nav-list">
            <Link className="nav-item" to="/"><li>Home</li></Link>
            <Link className="nav-item" to="/tasks"><li>Tasks</li></Link>
        </ul>
    </nav>
)

export default Navbar