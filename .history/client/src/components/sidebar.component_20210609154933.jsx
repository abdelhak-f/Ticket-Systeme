import React, {useContext} from 'react';
import { NavLink, useHistory, } from 'react-router-dom';
import logo from './img/login.png'
// import loged from './Login-employer';
import './style.component.css';
// import logo from '../assets/logo.png';
import axios from 'axios'
import {UserContext} from './UserContext';
const Sidebar = () => {
	const {user, setUser} = useContext(UserContext)
	
		const history = useHistory();
		const logout = async () =>{
			const out = await axios.post('http://localhost:5000/logout');
			user && setUser(null)
			if(out) return history.push('/')
		}
		console.log('test user', user);
		return(
			<>
		  
			
			<nav className="col-md-2 d-md-block bg-secondary sidebar" >

               
	  			<center>
					  
						  {/* <img src={logo} className="navbar-brand" width="120" alt="Tech support" /> */}
					  
				</center>
	    		<ul className="nav flex-column ">
				<li className="nav-item">
	    				<NavLink to="/" onlyActiveOnIndex={true} className="nav-link" activeClassName="active">
	    					<i className="fas fa-home">
							<img src={logo} className="navbar-brand" width="120" alt="Tech support" /> 
							</i>
	    					
	    				</NavLink>
	    			</li>
	    			{/* <li className="nav-item">
	    				<NavLink to="/" onlyActiveOnIndex={true} className="nav-link" activeClassName="active">
	    					<i className="fas fa-home"></i>
	    					Dashboard Home
	    				</NavLink>
	    			</li> */}
	    			<li>
                		<NavLink to="/tickets/create" className="nav-link" activeClassName="active">
                			<i className="fas fa-ticket-alt"></i>
                			Submit a Ticket
                		</NavLink>
            		</li>
            		<li>
                		<NavLink to="/add-employer" className="nav-link" activeClassName="active">
                			<i className="fas fa-users"></i>
                			Add Employée
                		</NavLink>
            		</li>
            		<li>
                		<NavLink to="/manage-tickets" className="nav-link" activeClassName="active">
                			<i className="fas fa-folder"></i>
                			Manage Ticket
                		</NavLink>
            		</li>
					
            		<li>
                		<NavLink to="" className="nav-link" activeClassName="active">
                			<button type="submit" className="btn btn-warning" onClick={logout}>
                			Logout
							</button>
                		</NavLink>
            		</li>
							
					
	    		</ul>
			</nav>
	   {/* <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/sign-in" component={loged} />
          </Switch>
        </div>
      </div> */}
	  </>
		);
}

export default Sidebar;

