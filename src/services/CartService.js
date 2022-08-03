import axios from "axios";
const http=axios.create({
    headers:{'contet-type': 'application/json'},
    baseURL:'http://localhost:40825/'
});
const UpdateBookItem = (id,Obj) => {
    console.log(id);
    console.log(Obj);
    return http.put('/api/Cart/'+id,Obj);
}
const getBookItemById = id =>{
    return http.get('api/Cart/'+id);
}
const deleteBookItem = id => {
    return http.delete('/api/Cart/'+id);
}
const PosttoCart = CartItem=> {
    return http.post('/api/Cart', CartItem);
}
let CartService = {UpdateBookItem,getBookItemById,deleteBookItem,PosttoCart}
export default CartService;