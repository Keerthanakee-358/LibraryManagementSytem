import { Link } from "react-router-dom"
import '../styles/landingpage.css'
const LandingPage = () => {
    return (
        <div className="landingpage">

            <div className="selectLoginType ">
                <h1>Libraray Management System</h1>

                <div className="btn">
                    <div className="admin">
                        <img height="200px" width="200px" src="./images/admin.png" alt="" />
                        <Link to='/admin login' className="admin-login-btn">Admin Login</Link>
                    </div>

                    <div className="user">
                        <img height="200px" width="200px" src="./images/login.jpg" alt="" />
                        <Link to='/user login' className="user-login-btn">User Login</Link>
                    </div>
                
                </div>
           
            </div>
       
        </div>
    );
}

export default LandingPage;



