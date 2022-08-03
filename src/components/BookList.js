import {useEffect, useState } from "react";
import BookItemService from "../services/BookItemService";
import {Link,useNavigate} from 'react-router-dom';


const BookList = props => {
    const[bookitems,setBookItems]=useState([]);
    useEffect(()=>{
        BookItemService.getbookitems().then(res=>{
            setBookItems([...res.data]);

        }).catch(err=>{
            alert(err.response.statusText);

        });
    },[bookitems.length])
    const nav = useNavigate();
    const handleDelete = c =>{
        console.log(c);
        const result = window.confirm('Do you want to delete this item ?');
        
        if (result) {
           BookItemService.deleteBookItem(c).then(res => {
                alert('Item deleted');
                const book =[...bookitems];
                const specificbook=book.filter(s=>s.id!==c);
                setBookItems([...specificbook]);
                nav('/booklist');
            }).catch(res => {
                alert(res.response.status);
            });
        } 
    }   
    return <div className="row">
    <div className="col-12">
    <h1>Books</h1>
    <table className="table">
    <thead>
    <tr>
    <th>Book Id</th>
    <th>Book Name</th>
    <th>Authour</th>
    <th>Book Price</th>
    <th></th>
    <th>Actions</th>
    </tr></thead>
    <tbody>
    {bookitems.map(t => <tr key={t.id}>
        <td>{t.id}</td>
        <td>{t.book_name}</td>
        <td>{t.book_type}</td>
        <td>{t.book_price}</td>
        <td> <Link to={'/booklist/'+t.id}>Details</Link></td>  
        <td><Link to={'/update-bookitem/'+t.id}>Edit</Link></td>
        <td><button className='btn btn-danger btn-sm' onClick={()=>handleDelete(t.id)}>Delete</button></td>
        
        </tr>)}
    </tbody>
    </table>

    </div>
    </div>
}
export default BookList;