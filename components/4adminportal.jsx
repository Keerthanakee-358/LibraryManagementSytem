import Adminnavbar from "./5adminnavbar";
import { Routes,Route } from "react-router-dom";
import AdminDashboard from "./6adminDashboard";
import BookLists from "./7booksList";
import UsersLists from "./8usersList";
import ReadBooks from "./9readBook";
import AddBook from "./10AddBook";
import AddUser from "./11addUser";
const Adminportal = () => {
    return ( 
        <div className="adminportal">
            <Adminnavbar/>
            <Routes>
                <Route path='/' element={<AdminDashboard/>}/>
                <Route path='/book-lists' element={<BookLists/>}/>
                <Route path='/user-lists' element={<UsersLists/>}/>
                <Route path='/book-lists/:id' element={<ReadBooks/>}/>
                <Route path='/add-book' element={<AddBook/>}/>
                <Route path='/add-user' element={<AddUser/>}/>
            </Routes>
        </div>
     );
}
 
export default Adminportal;