import { Link } from "react-router-dom";
const UserNavbar = () => {
    return (
        <div className="userNavbar">
            <div className="logo">
                <h1>User Portal</h1>
            </div>
            <div className="nav_links">
                <Link to="/user/" >Dashboard</Link>
                <Link to="/user/book-lists">Books Lists</Link>
                <Link to="/">Logout</Link>
            </div>
        </div>
    );
}
export default UserNavbar;