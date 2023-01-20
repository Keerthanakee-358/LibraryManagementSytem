import {useNavigate} from 'react-router-dom'
import '../styles/userlogin.css'
const UserLogin = () => {
    let navigate = useNavigate()
    let handleLogin = ()=>{
        navigate('/user/')
}
    return ( 
        <div className="userLogin">
            <div className="form">
                <h1>Login as User</h1>
               <div className="form_input">
                <form onSubmit={handleLogin}>
                    <div className="email-input">
                        <label htmlFor="">Enter Your Email:</label>
                    <input type="email" required placeholder="Enter your Email" />
                    </div>
                    <div className="password-input">
                        <label htmlFor="">Strong Password:</label>
                        <input type="password" required  placeholder="Strong Password" />
                    </div>
                    <button className="login-btn">LOGIN</button>
                </form>
               </div>
            </div>
        </div>
     );
}
 
export default UserLogin;