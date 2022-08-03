import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Register from'./components/Register';
import Login from './components/Login';
import UpdateBookItem from './components/UpdateBookItem';
import BookListById from './components/BookListById';
import Menu from './components/Menu';
import ProductList from './components/Cart';
import Product from './components/CartList';


import { useState } from 'react';

import LoginService from './services/LoginService';

import BookList from './components/BookList';
import AddBookItem from './components/AddBookItem';
import Payment from './components/Payment';


import PaymentStatus from './components/PaymentStatus';

import ViewOrderCustomer from './components/ViewOrderCustomer';


import ManageOrder from './components/ManageOrder';
function App() {
  const [userDetails, setUserDetails] = useState({
   
    role: '',
    isLoggedIn: false
  })
  
 
  const nav = useNavigate();
  const handleLogin = credentials => {
    LoginService.doLogin(credentials).then(obj => {
      setUserDetails({ ...obj.data, isLoggedIn: true });
      window.localStorage.setItem('apitoken', obj.data.token);
      if(obj.data.role =="Customer"){
        nav('/menu');
        }
        else if(obj.data.role =="Admin"){
          nav('/booklist')
        }
        else{
          nav('/vieworder')
        }
      
      
    }).catch(obj => {
      alert(obj.response.statusText);
    });
  }

  const handleLogout = () => {
    const obj = {
      firstName: '',
      lastName: '',
      gender: '',
      userDetails: '',
      role: '',
      isLoggedIn: false
    };
    setUserDetails(obj);
    window.localStorage.removeItem('apitoken');
    nav('/');
  }
  return (<>
    <NavBar role={userDetails.role}
      isLoggedIn={userDetails.isLoggedIn}
      handleLogout={handleLogout} />

    <div className='container'>
      <div className='row'>
        <div className='col-12'>
       
          <Routes>
            <Route path='/' element={<Login handleLogin={handleLogin} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/booklist' element={<BookList />} />
            <Route path='/add-bookitem' element={<AddBookItem />} />
            <Route path='/update-bookitem/:bookId' element={<UpdateBookItem/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/booklist/:bookId' element={<BookListById/>}/> 
            <Route path='/ProductList' element={<ProductList/>}/>
            <Route path='/manageorder' element={<ManageOrder/>}/>
            <Route path='/Product' element={<Product/>}/>
            <Route path='/Payment' element={<Payment/>}/> 

            <Route path='/viewpaymentstatus' element={<PaymentStatus/>}/>
            <Route path='/viewordercustomer' element={<ViewOrderCustomer/>}/>
          
          </Routes>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
