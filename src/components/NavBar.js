import { Link } from 'react-router-dom';
const NavBar = props => {
    const onLogout = () =>{
        props.handleLogout();
    }
    return <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">ONLINE BOOK STORE MANAGEMENT</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {props.isLoggedIn === false &&
                       <>
                       <li className="nav-item">
                            <Link to='/' className='nav-link'>Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/register' className='nav-link'>Register</Link>
                    </li></> 
                    }
                    {props.role === 'Admin' &&
                        <><li className="nav-item">
                            <Link to='/booklist' className='nav-link'>Books</Link>
                        </li>
                            <li className="nav-item">
                                <Link to='/add-bookitem' className='nav-link'>Add-NewBook </Link>
                            </li>
                            
                            
                            <li className="nav-item">
                                <Link to='/manageorder' className='nav-link'>Book-Orders</Link>
                                
                            </li>
                            <li className='nav-item'><Link to='/viewpaymentstatus' className='nav-link'>Payment Status</Link></li>
                           
                        
                        </>
                   }

                 

                   {props.role === 'Customer' &&
                   <><li className="nav-item">
                   <Link to='/menu' className='nav-link'>Books</Link>
                   </li>
                   <li className='nav-item'><Link to='/ProductList' className='nav-link'>Cart</Link></li>
                   <li className="nav-item">
                                <Link to='/viewordercustomer' className='nav-link'>Order History</Link>
                               
                            </li>
                            
                   
                   </>
               
                
                   }
                        
                

                    {props.isLoggedIn === true &&
                        <li className="nav-item">
                            <a href='#' className='nav-link' onClick={onLogout}>Logout</a>
                        </li>
                    }
                </ul>
            </div>
        </div>
    </nav>
}
export default NavBar;