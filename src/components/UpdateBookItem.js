import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookItemService from "../services/BookItemService";


const UpdateBookItem = props =>{
    let{bookId}=useParams();
   
    const [bookitem,setBookItem]=useState({
        id:0,
        book_name:'',
        book_type:'',
        book_price:0
    })
    const BookById=fid=>{
        BookItemService.getBookItemById(fid).then(res=>{
            console.log(res);
            setBookItem({...res.data});
        }).catch(res=>{
            console.log(res);
            console.log(res.response.status);

        });
        
    }
    useEffect(()=>{
        BookById(bookId);
    },[]);
    const handleUpdate= (ev) =>{
        ev.preventDefault();
        BookItemService.UpdateBookItem(bookId,bookitem).then(res=>{
            if(res.status == 200){
                alert('Book is Updated');
            }
        }).catch(res=>{
            console.log(res.response.status);
            alert("Book is not Updated");

        });


    }
    const handleChange=(ev)=>{
        let{name,value,type}=ev.target;
        if(type==='number')
        {
            value=parseFloat(value);
        }
        setBookItem({...bookitem,[name]:value});
    }
    return <div className="row">
    <div className="col-md-6">
    <h2>Update-Book</h2>
    <form method="post" onSubmit={handleUpdate}>
    <div className="form-group">
    <h4>Book-Id:</h4>
    <input type="number" 
    className="form-control"
    id="id"
    name="id"
    value={bookitem.id}
    readOnly
    />
    </div>
    <div className="form-group">
    <h4>Book-Name:</h4>
    <input type="text" 
    className="form-control"
    id="book_name"
    name="book_name"
    value={bookitem.book_name}
    onChange={handleChange}
    required/>
    </div>
    <div className="form-group">
    <h4>Authour:</h4>
    <input type="text" 
    className="form-control"
    id="book_type"
    name="book_type"
    value={bookitem.book_type}
    onChange={handleChange}
    required/> 
    </div>
    <div className="form-group">
    <h4>Book-Price:</h4>
    <input type="number" 
    className="form-control"
    id="book_price"
    name="book_price"
    value={bookitem.book_price}
    onChange={handleChange}
    required
    /> 
    </div>
    <div className="form-group">
    <button type="submit" className="btn btn-lg btn-primary">Update Book</button></div>

    </form></div></div>
}
export default UpdateBookItem;