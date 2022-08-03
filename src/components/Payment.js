import React, { Component, useState } from 'react';
import {useEffect} from "react";
import './Payment.css';
import PaymentService from '../services/PaymentServices';
import CalTotal from './CalculateTotal';
import CartService from '../services/CartService';
import TotalBillServices from '../services/TotalBillServices';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Payment (props){
    const current = new Date();
      //let [paymenttype,name]=useState(['','type']);
     const nav = useNavigate();
      let [paymenttype,name]=(['',''])
      function onChangeValue(event) {
        //console.log(event.target.value);
        paymenttype = event.target.value;
        //console.log(paymenttype);
      }
      let Totalbill=0
    const[bookitems,setBookItems]=useState([]);
      useEffect(()=>{
      TotalBillServices.getbookitems().then(res=>{
              setBookItems([...res.data]);
             
  
          }).catch(err=>{
              alert(err.response.statusText);
  
          });
      },[bookitems.length])
      for(let i=0;i<bookitems.length;i++){
        <span>{bookitems[i]?.book_name}</span>
        Totalbill = Totalbill +(bookitems[i]?.quantity*bookitems[i]?.book_Price)
      }
      console.log("Total",Totalbill)
      const [credentials, setCredentials] = useState({ 
        payment_type:"" ,
        amount: 0, 
        payment_date:"" })
        const handleFeedBack = ev =>{
         
          credentials.payment_type=paymenttype;
          credentials.amount=Totalbill;
          credentials.payment_date=`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      }
   
      const handleSubmit=ev=>{
          //ev.preventDefault();
          handleFeedBack();
          console.log(credentials);
          console.log(credentials.payment_type,paymenttype);
          console.log(credentials.payment_date);
          console.log(credentials.amount);
          PaymentService.doPayment(credentials).then(res=>{
            axios.get('http://localhost:40825/Order_Item');
            for(let i=0;i<bookitems.length;i++){
              CartService.deleteBookItem(bookitems[i].id).then(res =>{
                  console.log("ok")
                  nav("/Menu");
                  
              })
              .catch(res =>{
                  console.log("not ok")
              })
              
          }
              alert("Payment is Successful");
          }).catch(res=>{
              console.log(res);
              alert("Payment is not Successful");
          });
  
      }
      
      
    
      
       const pay=()=>{
        //paymenttype = {name};
        handleSubmit();
        
      }


    return <div className="card">
    <div className="card-body"><b><h3>Payments</h3></b></div>
    <table>
      <thead>
       
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
      </thead>
      <tbody>
        
    {bookitems.map(t => <tr >
        
        <td>{t.book_Name}</td>
        <td>X{t.quantity}</td>
        <td>{t.book_Price*t.quantity}</td>
    </tr>)}
    </tbody>
    </table>
    <br></br>
    <div ><CalTotal/></div><br></br>
    <div>Choose a Payment Method</div>
    <div className="d-flex flex-column" onChange={onChangeValue}> <label className="radio"> <input type="radio" name="gender" value="Cash" readOnly/>
                        <div className="d-flex justify-content-between"> <span>CASH</span> </div>
                    </label> <label className="radio"> <input type="radio" name="gender" value="Card"/>
                        <div className="d-flex justify-content-between"> <span> CARD</span> </div><br></br>
                    </label> </div> <div className="buttons"> <button className="btn btn-success btn-block"  onClick={pay}>Proceed to payment</button> </div>
                    <div>{paymenttype}</div>
    
   </div>

    
}