import {React,useCallback} from "react";
import Product from "./CartList";
import  Totalfunc  from "./CartList";
import "./CartList.js";
import "./CartList.css"
import axios from "axios";
import { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'; 
import CalTotal from "./CalculateTotal";
import CartService from "../services/CartService";
//import { render } from "@testing-library/react";
//import Success from './SuccessComponent';
//console.log(Total)
let pro =0
//pro=Total

function ProductList(props) {
    const nav = useNavigate();
    let Totalbill = 0;
    let [Totala, setTotal] = useState([])
   


    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
        Totalfn();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Order Placed Successfully")
        
        
            console.log(Response.data)
            nav("/Payment")
           
            
      
    } 

    const getAllProducts = () => {
        axios.get('http://localhost:40825/api/Cart').then(r => {
           // console.log(r.status);
            //console.log(r.data);

            setProducts([...r.data]);
        }).catch(e => {
            console.log(e.response.status);
            alert(e.response.statusText);
        });
    }
   // console.log("Quantity",products.id)
   async function  Totalfn() {
       for(let i=0;i<products.length;i++){
            Totalbill = Totalbill +(products[i]?.quantity*products[i]?.book_Price)
          }
    }
    // function fn(){
    //     alert("Your order is placed successfully")
    // }

    //let Tot = Product.Total
    //console.log(Totala)
    let productComponents = products.map(p =>
        <div key={p.id}>
            <Product prod={p} onChange={Totalfn}/>
        </div>)
      for(let i=0;i<products.length;i++){
        Totalbill = Totalbill +(products[i]?.quantity*products[i]?.book_Price)
      }
    return <div>
       
        <div className="card">
            <center><h4>CART</h4></center>
            <span style={{ margin: "auto" }}>ITEMS</span>
            <div className="Box">

                {productComponents}
                <div className="placeorder">
                   
                    <center><Link to={'/menu/'}>+ Add New Item</Link></center>
                    <br></br>
                    <center><button type="button" className="btn btn-dark" onClick={handleSubmit}>PLACE ORDER</button></center>
                </div>
                
            </div>
             
        </div>
        
    </div>



}
export default ProductList;