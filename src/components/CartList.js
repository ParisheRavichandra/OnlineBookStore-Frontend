import './CartList';
import React, {useCallback, useEffect, useState} from "react";
import './Cart.js';
import ProductList from './Cart';
//import Success from './SuccessComponent';
import CartService  from "../services/CartService";
import {Link,useNavigate} from 'react-router-dom';
import CalTotal from './CalculateTotal';


let Totalbill = 0;
let Total = 0;
let extra=0;
export default function Product(props) {  
  const extra2 = extra
    //console.log("extra2",extra)
   let [quantity, setNum]= useState(props.prod.quantity,0);
   let [items,setItems] =useState([])
   const[bookitems,setBookItems]=useState([]);
   //console.log(quantity)
    let  Price=props.prod.book_Price*quantity; 
    //console.log(Price);
    Totalbill = (props.prod.book_Price*quantity); 
    //console.log(Totalbill);
    Total = Total+(Totalbill);  
    
   // console.log("Totalex",Total-extra2)
   
  // console.log("final",Total);
   // let msg="ok";
   
    //  const onTrigger =useCallback(e=>{
    //  props.onChange(Total)
    
    //   //event.preventDefault();
    //   })
      let bookId=props.prod.id;
      const [bookitem,setBookItem]=useState({
        id:props.prod.id,
        book_Name:props.prod.book_Name,
        book_Type:props.prod.book_Type,
        book_Price:props.prod.book_Price,
        quantity:props.prod.quantity
    })
    const BookById=fid=>{
      CartService.getBookItemById(fid).then(res=>{
          console.log(res);
          setBookItem({...res.data});
      }).catch(res=>{
          console.log(res);
          console.log(res.response.status);

      });}
      const handleUpdate= (ev) =>{
       // ev.preventDefault();
       console.log(bookitem);
        CartService.UpdateBookItem(bookId,bookitem).then(res=>{

            if(res.status == 200){
               
            }
        }).catch(res=>{
            console.log(res.response.status);
           

        });
       
        
bookitem.id= props.prod.id;
bookitem.book_Name=props.prod.book_Name;
bookitem.book_Type = props.prod.book_Type;
bookitem.book_Price = props.prod.book_Price;

    }
    const nav = useNavigate();
    const handleDelete = c =>{
      console.log(c);
      const result = window.confirm('Do you want to delete this item ?');
      
      if (result) {
         CartService.deleteBookItem(bookitem.id).then(res => {
              alert('Item deleted');
              const book =[...bookitems];
              const specificbook=book.filter(s=>s.id!==c);
              setBookItems([...specificbook]);
              nav('/menu');
          }).catch(res => {
              alert(res.response.status);
          });
      } 
  }   
    const handleChange=(ev)=>{
        // let{name,value,type}=ev.target;
        //  if(type==='number')
        // {
        //     value=parseFloat(value);
        //  }
        
    }
//onTrigger()
  let  dec = () => {
    if (quantity==1){
      handleDelete()
    }
  else{
      if(quantity>0)
      {
       setNum(quantity - 1);
       Total = (Total-(props.prod.book_Price*quantity)); 
       
       bookitem.quantity=quantity-1;
       console.log("dec quantity",bookitem.quantity)
       handleChange();
       handleUpdate();
       //ProductList.Totalfn()
      // onTrigger();
      <CalTotal/>

    
      }
    }
   }
   let  inc = () => {
  
    if(quantity>=0 && quantity<10) //9>=0 9<10
    {
     
     setNum(quantity + 1); 
     Total = (Total-(props.prod.book_Price*quantity));
     //onTrigger();
    
       bookitem.quantity=quantity+1;
       console.log("inc quantity",bookitem.quantity)
       handleChange();
       handleUpdate();
       <CalTotal/>
     
    }
 }
   let handleChange1 = (e)=>{
    setNum(e.target.value); 
    //console.log(Total);
    Total = Total-(props.prod.book_Price*quantity);
    handleChange();
    handleUpdate();
    
   }
  //  extra=Total;
  //  console.log("extra",{extra})
   
   
    return (<>
    <div>
    <div className="center">
    
    <div className="card-body" >
            <div>
                  <b>{props.prod.book_Name} </b>
                  <br></br>
                    ID: {props.prod.id}
            </div>      
            <div className='quanamo'>
              <div className='int-gr'>
                <div>
                  <button  type="button" className="btn btn-dark" onClick={dec}>-</button>
                </div>
                <div>
                  <b><input type="text" className="form-control" value={quantity} onChange={handleChange1} readOnly/></b>
                  </div>
                  <div>
                  <button  type="button" className="btn btn-dark" onClick={inc}>+</button>
                </div>
              </div>
              
              <div className='Price'>
              <h5>₹{Price}</h5>
              </div>&nbsp;&nbsp;
              {/* <h3>{Total}</h3> */}
              
            </div>  
    </div>
    
    </div>
    </div>
   </>
    )
}

// let answer;
 const Totalfunc=()=>{
  const [Totalfinal,setTotal]=useState([0,Total])
   const handleChange=(e)=>{
     setTotal(e.target.value);
   }
      }

// export  {Total}