import React, { Component } from 'react';
import axios from 'axios';

const priorities = ['Low', 'Medium', 'High'];
const statuses = ['Open', 'In Progress', 'Resolved'];
const types = ['Bug/Error', 'Feature Request', 'Security', 'Other'];

export default class CreateTicket extends Component {
	constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeUrgence = this.onChangeUrgence.bind(this);
        this.onChangDescription = this.onChangDescription.bind(this);
        this.onChangeEtat = this.onChangeEtat.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { 
      	// 	title: '',
  		//     description: '',
  		//     projectName: '',
        //   assignee: '',
  		//     priority: '',
  		//     status: '',
  		//     type: '',
        //   users: [],
        //   projects: []
            title: '',
  		    type: '',
  		    urgence: '',
            description: '',
  		    etat: '',
  		    date: '',
            
        };
    }

    componentDidMount() {
      // set default values for state properties
      this.setState({
        // urgence: urgences[0],
        // // status: statuses[0],
        // type: types[0]
      });

      // get list of users to set default assignee
      axios.get('http://localhost:5000/users/')
        .then(res => {
            if(res.data.length > 0) {
                this.setState({
                    users: res.data.map(user => user.name),
                    assignee: res.data[0].name
                })
            }
        })
        .catch((error) => { console.log(error); })

        // get list of projects to set default project
      axios.get('http://localhost:5000/projects/')
        .then(res => {
            if(res.data.length > 0) {
                this.setState({
                    projects: res.data.map(project => project.name),
                    projectName: res.data[0].name
                })
            }
        })
        .catch((error) => { console.log(error); })
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
        })
    }

    onChangePriority(e) {
        this.setState({
            urgence: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeProjectName(e) {
        this.setState({
            etat: e.target.value
        })
    }

    onChangeAssignee(e) {
        this.setState({
            date: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const ticket = {
            title: this.state.title,
            type: this.state.type,
            urgence: this.state.urgence,
            description: this.state.description,
            etat: this.state.etat,
            date: this.state.date
          }
        axios.post('http://localhost:5000/tickets/create', ticket)
            .then(res => console.log(res.data))

        alert('Successfully created.');

        // clear form
        this.setState({ 
            title: '',
            type: '',
            urgence: '',
            description: '',
            etat: '',
            date: ''
        });
    }

	render() {
		return(
			<div>
				<h3>Submit a Ticket</h3>
				
 
                   <form onSubmit={this.onSubmit}>
                     <div class="form-row">
                       <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                       </div>
                       <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                         <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                       </div>
                     </div>
                     <div class="form-group">
                       <label for="inputAddress">Address</label>
                       <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                     </div>
                     <div class="form-group">
                       <label for="inputAddress2">Address 2</label>
                       <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                     </div>
                     <div class="form-row">
                       <div class="form-group col-md-6">
                         <label for="inputCity">City</label>
                         <input type="text" class="form-control" id="inputCity">
                       </div>
                       <div class="form-group col-md-4">
                         <label for="inputState">State</label>
                         <select id="inputState" class="form-control">
                           <option selected>Choose...</option>
                           <option>...</option>
                         </select>
                       </div>
                       <div class="form-group col-md-2">
                         <label for="inputZip">Zip</label>
                         <input type="text" className="form-control" id="inputZip">
                       </div>
                     </div>
                     <div class="form-group">
                       <div class="form-check">
                         <input class="form-check-input" type="checkbox" id="gridCheck">
                         <label class="form-check-label" for="gridCheck">
                           Check me out
                         </label>
                       </div>
                     </div>
                     <button type="submit" class="btn btn-primary">Sign in</button>
                   </form>
                 
 			</div>
 		);
 	}
 }