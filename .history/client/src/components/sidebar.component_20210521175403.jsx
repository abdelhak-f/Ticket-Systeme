import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../assets/logo.png';

export default class Sidebar extends Component {
	render() {
		return(
			<nav className="fixed col-md-2 d-md-block bg-secondary">
	  			{/* <center><img src={logo} className="navbar-brand" width="120" alt="Tech support" /></center> */}
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
                		<NavLink to="/manage-users" className="nav-link" activeClassName="active">
                			<i className="fas fa-users"></i>
                			Add Employée
                		</NavLink>
            		</li>
            		<li>
                		<NavLink to="/manage-projects" className="nav-link" activeClassName="active">
                			<i className="fas fa-folder"></i>
                			Manage Projects
                		</NavLink>
            		</li>
	    		</ul>
			</nav>
		);
	}
}
