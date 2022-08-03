import {useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import OrderService from "../services/OrderService";
import PaymentStatus from "./PaymentStatus";
const ManageOrder = props => {
    const[vieworder,setViewOrder]=useState([]);
    useEffect(()=>{
        OrderService.getorder().then(res=>{
            setViewOrder([...res.data]);
            // fn();
            // console.log(Total);

        }).catch(err=>{
            alert(err.response.statusText);

        });
    },[vieworder.length])
    // let Total=0
    // function fn(){
    //     for(let i=0;i<vieworder.length;i++){
    //         Total = Total+vieworder[i].bill_Amount;
    //     }
    // }
    
    
    
    return <div className="row">
    <div className="col-12">
    <h1>View-Order</h1>
    <table className="table">
    <thead>
    <tr>
    <th>Id</th>
    <th>User Id</th>
    <th>Order Id</th>
    <th>Order Date</th>
    <th>Book Name</th>
    <th>Authour</th>
    <th>Quantity</th>
    <th>Bill Amount</th>
    
 
    </tr></thead>
    <tbody>
    {vieworder.map(t => <tr key={t.id}>
        <td>{t.id}</td>
        <td>{t.user_Id}</td>
        <td>{t.order_Id}</td>
        <td>{t.order_Date}</td>
        <td>{t.book_Name}</td>
        <td>{t.book_Type}</td>
        <td>{t.quantity}</td>
        <td>{t.bill_Amount}</td>
    
        
        
        
        

        
        </tr>)}
        
    </tbody>
    
    </table>

    </div>
    </div>
    
}
export default ManageOrder;