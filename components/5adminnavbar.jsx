import '../styles/AdminNavbar.css'
import { Link } from 'react-router-dom';
const Adminnavbar = () => {
    return (
        <div className="adminnavbar">
            <h1>Admin Portal</h1>
            <div className="links">
                <Link to="/admin/" >Dashboard</Link>
                <Link to="/admin/add-book">Add Books</Link>
                <Link to="/admin/add-user">Add Users</Link>
                <Link to="/admin/book-lists">Books Lists</Link>
                <Link to="/admin/user-lists">User Lists</Link>
                <Link to="/">Logout</Link>
            </div>
        </div>
    );
}
export default Adminnavbar;