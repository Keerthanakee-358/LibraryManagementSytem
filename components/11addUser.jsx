import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addUsers.css'
const AddUser = () => {
    let [name, setname] = useState("")
    let [age, setage] = useState("")
    let [email, setemail] = useState("")
    let [phoneNumber, setphoneNumber] = useState("")

    let navigate = useNavigate()
    let handleSubmit = (e) => {
        e.preventDefault();
        let userData = { name, age, email, phoneNumber }

        //potsing to the server
        fetch('http://localhost:4686/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
        alert('user added sucessfully')
        navigate('/admin/user-lists')
    }
    return (
        <div className="addUser">
            <h1>Add a new User</h1>
            <div className="form-User">
            <form action="" onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="text">Enter User Name:</label>
                    <input type="text" value={name} onChange={(e) => setname(e.target.value)} required placeholder="Person Name" />
                </div>
                <div className="age">
                    <label htmlFor="number">Age of the User:</label>
                    <input type="number" value={age} onChange={(e) => setage(e.target.value)} required placeholder="Person Age" />
                </div>
                <div className="email">
                    <label htmlFor="text">Enter User Mail-id:</label>
                    <input type="text" value={email} onChange={(e) => setemail(e.target.value)} required placeholder="Email-Id" min={10} max={10} />
                </div>
                <div className="phno">
                    <label htmlFor="number">Enter User Phone Number:</label>
                    <input type="tel" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} required placeholder="0-9 digits" />
                </div>
                <button>Submit</button>
            </form>
            </div>
            
        </div>
    );
}
export default AddUser;