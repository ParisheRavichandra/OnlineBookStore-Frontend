import axios from 'axios';
const http = axios.create({
    headers: { 'content-type': 'application/json' },
    baseURL: 'http://localhost:37208'
});
const doPayment = Payment=> {
    return http.post('/api/Payment', Payment);
}

const doStatus = Payment=> {
    return http.get('/api/Payment', Payment);
}
let PaymentService ={doPayment,doStatus}
export default PaymentService;