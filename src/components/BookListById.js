import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookItemService from "../services/BookItemService";

const BookListById = props => {
    let {bookId}=useParams();
    const[bookitem,setBookItems]=useState({});
    useEffect(()=>{
        BookItemService.getBookItemById(bookId).then(res=>{
            setBookItems({ ...res.data});

        }).catch(err=>{
            alert(err.response.statusText);

        });
    },[]);

    return <div className="row">
    <div className="col-12">
    <h2>Book Details</h2>
    <dl>
    <dt>ID</dt>
    <dd>{bookitem.id}</dd>
    <dt>Book-Name</dt>
    <dd>{bookitem.book_name}</dd>
    <dt>Authour</dt>
    <dd>{bookitem.book_type}</dd>
    <dt>Book-Price</dt>
    <dd>{bookitem.book_price}</dd>
    </dl>
    
    </div></div>
    
   
}
export default BookListById;