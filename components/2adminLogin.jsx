import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/adminlogin.css'

const AdminLogin = () => {
    let [Email, setEmail] = useState("")
    let [Password, setPassword] = useState("")
    let navigate = useNavigate()
    let handleLogin = (e) => {
        e.preventDefault();
        let data = { Email, Password }
        // console.log(data);
        if (Email == "admin@gmail.com" && Password == 1234) {
            navigate('/admin/')
        } else {
            alert('Invalid Credintials')
        }
    }
    return (
        <div className="adminLogin">
            <div className="form">
                <h2>Login as Admin</h2>
                <div className="form_input">
                    <form onSubmit={handleLogin}>
                        <div className="email-input">
                            <label htmlFor="">Enter Your Email:</label>
                            <br />
                            <input type="email" required value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="admin.library" />
                        </div>

                        <div className="password-input">
                            <label htmlFor='password'>Strong Password:</label>
                            <br />
                            <input type="password" required value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>

                        <button className="login-btn">LOGIN</button>
                    </form>

                </div>

            </div>

        </div>
    );
}

export default AdminLogin;