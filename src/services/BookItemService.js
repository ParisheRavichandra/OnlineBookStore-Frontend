import axios from "axios";
const http=axios.create({
    headers:{'contet-type': 'application/json'},
    baseURL:'http://localhost:50844/'
});
http.interceptors.request.use(config=>{
    return config;
},error=>{
    Promise.reject(error);
});

//http.interceptors.response.use()

const getbookitems=()=>{
    console.log(http.config);
    return http.get('api/BookItem');
}
const getBookItemById = id =>{
    return http.get('api/BookItem/'+id);
}
const addBookItem=bookitemobj=>{
    return http.post('/api/BookItem',bookitemobj);
}
const UpdateBookItem = (id,Obj) => {
    console.log(id);
    console.log(Obj);
    return http.put('api/BookItem/'+id,Obj);
}
const deleteBookItem = id => {
    return http.delete('/api/BookItem/'+id);
}
let BookItemService={getbookitems,getBookItemById,addBookItem,UpdateBookItem,deleteBookItem};
export default BookItemService;