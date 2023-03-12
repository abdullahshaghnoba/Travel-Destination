import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <div id = 'navbar' className="navbar">
            <Link to="/">Home</Link>
        </div>
    )
}