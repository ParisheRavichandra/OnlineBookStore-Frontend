import axios from 'axios';
const http = axios.create({
    headers: { 'content-type': 'application/json' },
    baseURL: 'http://localhost:18236'
});

const doLogin = loginCredentails => {
    return http.post('/api/Users/Login', loginCredentails);
}

let LoginService = {doLogin};
export default LoginService;