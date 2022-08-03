import axios from "axios";
const http=axios.create({
    headers:{'contet-type': 'application/json'},
    baseURL:'http://localhost:40825/'
});
http.interceptors.request.use(config=>{
    return config;
},error=>{
    Promise.reject(error);
});

http.interceptors.response.use()
 const getorderById = id =>{
     console.log(id);
     return http.get('api/Order/'+id);
    
 }
 const UpdateOrderStatus = (id,Obj) => {
     console.log(id);
     console.log(Obj);
     return http.put('/api/Order/'+id,Obj);
 }
const getorder=()=>{
    console.log(http.config);
    return http.get('api/Order');
}



let OrderService={getorder,getorderById,UpdateOrderStatus};
export default OrderService;