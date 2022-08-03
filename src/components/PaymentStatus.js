import {useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import PaymentService from "../services/PaymentServices";
const PaymentStatus = props => {
    const[paymentstatus,setpaymentstatus]=useState([]);
    useEffect(()=>{
        PaymentService.doStatus().then(res=>{
            setpaymentstatus([...res.data]);
            // fn();
            // console.log(Total);

        }).catch(err=>{
            alert(err.response.statusText);

        });
    },[paymentstatus.length])
    // let Total=0
    // function fn(){
    //     for(let i=0;i<vieworder.length;i++){
    //         Total = Total+vieworder[i].bill_Amount;
    //     }
    // }
    
    return <div className="row">
    <div className="col-12">
    <h1>View Payment Status</h1>
    <table className="table">
    <thead>
    <tr>
    <th>Id</th>
    <th>Payment-Type</th>
    <th>Payment-Date</th>
    <th>Amount</th>
    {/* <th>Order Date</th>
    <th>Bill Amount</th>
    <th>Status</th> */}
 
    </tr></thead>
    <tbody>
    {paymentstatus.map(t => <tr key={t.id}>
        {<td>{t.id}</td> }
        <td>{t.payment_type}</td>
        <td>{t.payment_date}</td>
        <td>{t.amount}</td>
        {/* <td>{t.bill_Amount}</td>
        <td>{t.status}</td> */}
        {/* <td><Link to={'/updateorderstatus/'+t.id}>Update Order Status</Link></td> */}
        
        </tr>)}
    </tbody>
    </table>

    </div>
    </div>
}
export default PaymentStatus;