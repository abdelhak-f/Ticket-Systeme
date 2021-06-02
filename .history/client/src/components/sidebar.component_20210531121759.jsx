import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './img/login.png'
import './style.component.css';
// import logo from '../assets/logo.png';

export default class Sidebar extends Component {
	render() {
		
		return(
			<>
		  
			
			<nav className="col-md-2 d-md-block bg-secondary sidebar" >


	  			<center>
					  <a href="">
						  <img src={logo} className="navbar-brand" width="120" alt="Tech support" />
					  </a>
				</center>
	    		<ul className="nav flex-column ">
	    			<li className="nav-item">
	    				<NavLink to="/" onlyActiveOnIndex={true} className="nav-link" activeClassName="active">
	    					<i className="fas fa-home"></i>
	    					Dashboard Home
	    				</NavLink>
	    			</li>
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
                		<NavLink to="/manage-projects" className="nav-link" activeClassName="active">
                			<i className="fas fa-folder"></i>
                			Manage Ticket
                		</NavLink>
            		</li>
	    		</ul>
			</nav>
	  </>
		);
	}
}
