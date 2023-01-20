import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './components/1landingpage';
import AdminLogin from './components/2adminLogin';
import UserLogin from './components/3userLogin';
import Adminportal from './components/4adminportal';
import UserPortal from './components/12UserPortal';
import PageNotFound from './components/15pageNotFound';

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/admin login' element={<AdminLogin/>}/>
      <Route path='/user login' element={<UserLogin/>}/> 
      <Route path='/admin/*' element={<Adminportal/>}/> 
      <Route path='/user/*' element={<UserPortal/>}/>
      <Route path='*'element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
