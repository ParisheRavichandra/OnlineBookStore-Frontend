import {useEffect, useState } from "react";
import BookItemService from "../services/BookItemService";
import {useNavigate} from 'react-router-dom';
import CartService from "../services/CartService";
import MenuList from "./MenuList"


const Menu = props => {
    const[bookitems,setBookItems]=useState([]);
    useEffect(()=>{
        BookItemService.getbookitems().then(res=>{
            setBookItems([...res.data]);

        }).catch(err=>{
            alert(err.response.statusText);

        });
    },[bookitems.length])
    



            
        let CartList =bookitems.map(t =>
            <tbody key={t.id}>
                <MenuList item={t} />
            </tbody>)


    const nav = useNavigate();
    return <div >
    <div >
    <h1>Menu</h1>
    <table className="table">
    <thead>
    <tr>
    <th>Book Id</th>
    <th>Book Name</th>
    <th>Authour</th>
    <th>Book Price</th>
    <th>Actions</th>
    </tr></thead>
 

        
 
    {CartList}
   
    </table>
   

    </div>
    </div>
}
export default Menu;