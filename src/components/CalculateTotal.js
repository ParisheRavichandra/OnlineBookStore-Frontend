import TotalBillServices from '../services/TotalBillServices';
import React, { Component, useState } from 'react';
import {useEffect} from "react";
function CalTotal(){
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
        Totalbill = Totalbill +(bookitems[i]?.quantity*bookitems[i]?.book_Price)
      }
      console.log("Total",Totalbill)

      return <div style={{fontSize:18}}>Amount to be paid :<span style={{color:"green"}}>{Totalbill}</span></div>
}
export default CalTotal;