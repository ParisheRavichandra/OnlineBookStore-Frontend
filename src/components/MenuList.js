import CartService from "../services/CartService";
import {useEffect, useState } from "react";

function MenuList(props){
    const [cartItems, setcartitems] = useState({ 
        book_Name:"Pizza",
        book_Type:"Non Veg",
        book_Price:250,
        quantity:1
           })
           console.log(props.item.id)

    function posttocart(){
        cartItems.book_Name=props.item.book_name;
        cartItems.book_Price= props.item.book_price;
        cartItems.book_Type=props.item.book_type;
        cartItems.quantity=1;
        console.log(cartItems)
             CartService.PosttoCart(cartItems).then(res=>{
                 alert("Item is added to Cart")
             
             }).catch(res=>{
                console.log(res);
                
             });
            }
    return <tr>   
    <td>{props.item.id}</td>
    <td>{props.item.book_name}</td>
    <td>{props.item.book_type}</td>
    <td>{props.item.book_price}</td>
    <td><button className='btn btn-primary btn-sm' onClick={posttocart} >Add to Cart</button></td>
    </tr>
    
        
    
    
    
    
}
export default MenuList;