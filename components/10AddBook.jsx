import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addBook.css'
const AddBook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    let [title,setTitle] = useState("")
    let [authors,setauthors] = useState("")
    let [categories,setcategories] = useState("")
    let [pageCount,setpageCount] = useState("")
    let [shortDescription,setshortDescription] = useState("")
    let [longDescription,setlongDescription] = useState("")
    let [thumbnailUrl,setthumbnailUrl] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) =>{
        e.preventDefault();
        let bookData = {title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}

        //potsing to the server
        fetch('http://localhost:4686/books',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(bookData)
        })
        alert('books added sucessfully')
        navigate('/admin/book-list')
    }
    return ( 
        <div className="addbook">
            <h1>Add a Book</h1>
            <div className="form-Book">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <label htmlFor="text">Enter Title of the Book</label>
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" type="text" placeholder="Title" required/>
                    </div>
                    <div className="authors">
                        <label htmlFor="text">Enter Authors Name</label>
                        <input value={authors} onChange={(e)=>setauthors(e.target.value)} className="form-control" type="text" placeholder="Authors" required />
                    </div>
                    <div className="categories">
                        <label htmlFor="text">Genre of the Book</label>
                        <input value={categories} onChange={(e)=>setcategories(e.target.value)} className="form-control" type="text" placeholder="Categories" required/>
                    </div>
                    <div className="pageCount">
                        <label htmlFor="number">Number of Pages</label>
                        <input value={pageCount} onChange={(e)=>setpageCount(e.target.value)} className="form-control" type="number" placeholder="Page count" required/>
                    </div>
                    <div className="shortDescription">
                        <label htmlFor="text">Short Description</label>
                        <textarea value={shortDescription} onChange={(e)=>setshortDescription(e.target.value)} className="form-control" type="text" required cols="30" rows="10"/>
                    </div>
                    <div className="longDescription">
                        <label htmlFor="text">Long Descripton</label>
                        <textarea value={longDescription} onChange={(e)=>setlongDescription(e.target.value)} className="form-control" type="text" required cols="30" rows="10"/>
                    </div>
                    <div className="thumbnailUrl">
                        <label htmlFor="link">URL of the book</label>
                        <input value={thumbnailUrl} onChange={(e)=>setthumbnailUrl(e.target.value)} className="form-control" type="text" placeholder="Image URL" required />
                    </div>
                    <button>Add Book</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddBook;