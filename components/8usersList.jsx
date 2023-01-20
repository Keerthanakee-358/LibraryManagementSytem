import { useState,useEffect } from "react";
import '../styles/userList.css'

const UsersLists = () => {
 let[users,setUsers]=useState([])

 useEffect(()=>{
    let fetchData=async()=>{
        let response=await fetch(`http://localhost:4686/users`)
        let data = await response.json();
        setUsers(data)
    }
    fetchData()
 },[])

 let handleDelete=(id,name)=>{
    setUsers(users.filter(x=>x.id!==id))
    alert(`${name} has been deleted`)
 }
    return (
        <div className="usersList">
            <h1>Users list:{users.length}</h1>
            <div className="book-section">
                {users.map((x)=>(
                    <div className="user-info">
                        <h1>Name:{x.name}</h1>
                        <h3>Age:{x.age}</h3>
                        <h3>Email:{x.email}</h3>
                        <h2>Ph.No:{x.phno}</h2>
                        <button onClick={()=>handleDelete(x.id,x.name)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
      );
}
 
export default UsersLists ;