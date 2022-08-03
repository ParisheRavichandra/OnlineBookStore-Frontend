import axios from "axios";
const http=axios.create({
    headers:{'contet-type': 'application/json'},
    baseURL:'http://localhost:40825/'
});
const getbookitems=()=>{
    console.log(http.config);
    return http.get('api/Cart');
}
let TotalBillServices = {getbookitems}
export default TotalBillServices;