import { Routes,Route } from "react-router-dom";
import UserNavbar from "./13userNavbar";
import UserDashboard from "./14UserDashboard";
import BookLists from './7booksList';
import ReadBooks from "./9readBook";
const UserPortal = () => {
    return ( 
        <div className="userPortal">
            <UserNavbar/>
            <Routes>
                <Route path='/' element={<UserDashboard/>}/>
                <Route path='/book-lists' element={<BookLists/>}/>
                <Route path='/book-lists/:id' element={<ReadBooks/>}/>
            </Routes>
        </div>
     );
}
export default UserPortal;