import { useState } from "react";
import BookItemService from "../services/BookItemService";
const AddBookItem = props => {
    const[bookitem,setBookItem]=useState({
        book_name:'',
        book_type:'',
        book_price:0

    })
    const handleBookDetailsChange = ev =>{
        let { name, value,type } = ev.target;
        if(type==="number")
        {
            value=parseFloat(value);
        }
        setBookItem({ ...bookitem, [name]: value });
    }
    const handleSubmit=ev=>{
        ev.preventDefault();
        console.log(bookitem);
        BookItemService.addBookItem(bookitem).then(res=>{
            alert("Book is Added");
        }).catch(res=>{
            console.log(res);
            alert("Book is not added");
        });

    }

    return <div className="row">
    <div className="col-md-6">
    <h2>Add-New-Book</h2>
    <form method="post" onSubmit={handleSubmit}>
    <div className="form-group">
    <h4>Book Name:</h4>
    <input type="text"
    className="form-control"
    id="book_name"
    name="book_name"
    value={bookitem.book_name}
    onChange={handleBookDetailsChange}/>
    </div>

    <div className="form-group">
    <h4>Authour:</h4>
    <input type="text"
    className="form-control"
    id="book_type"
    name="book_type"
    value={bookitem.book_type}
    onChange={handleBookDetailsChange}/>
    </div>

    <div className="form-group">
    <h4>Book-Price:</h4>
    <input type="number"
    className="form-control"
    id="book_price"
    name="book_price"
    value={bookitem.book_price}
    onChange={handleBookDetailsChange}/>
    </div>

    <div className="row">
    <div className="col">
    <button type="submit" className="btn btn-lg btn-primary">Add-Book</button></div>
    

    </div>
    

    
    </form>
    </div></div>
}
export default AddBookItem;