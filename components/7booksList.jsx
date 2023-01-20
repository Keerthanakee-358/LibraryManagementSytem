import { useState, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import '../styles/booksList.css'
const BookLists = () => {
  let [books, setbooks] = useState([])

  // to get router parameter
   let location=useLocation()
  
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(`http://localhost:4686/books`)
      let data = await response.json()
      setbooks(data)
    }
    fetchData()
  },[books])

  let handleDelete=(id,title)=>{
    fetch(`http://localhost:4686/books/${id}`,{
      method:'DELETE'
    });
    alert(`${title} will be deleted permentaly`)
    //setbooks(books.filter(x=>x.id!=id))
    //alert(`${title} has been removed`)
  }
  
    let navigate = useNavigate()
    let handleRead = (id)=>{
      if (location.pathname=='/admin/book-lists'){
        navigate(`/admin/book-lists/${id}`)
      }else{
        navigate(`/user/book-lists/${id}`)
      }
    }

  return (
    <div className="bookLists">
      <h1>Book Lists:{books.length}</h1>
      <div className="book-section">
        {books.map((x) => (
          <div className="book-card">
            <div className="image">
              <img src={x.thumbnailUrl} alt="" />
            </div>
            <div className="info">
              <h1>Title:{x.title}</h1>
              <h3>Authors:{x.autors}</h3>
              <h3>Pages:{x.pageCount}</h3>
              <h3>Category:{x.categories.toString()}</h3>
              <button onClick={() => handleRead(x.id)}>Read more</button>
              { location.pathname == '/admin/book-lists' && <button onClick={() => handleDelete(x.id, x.title)}>Delete</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BookLists;