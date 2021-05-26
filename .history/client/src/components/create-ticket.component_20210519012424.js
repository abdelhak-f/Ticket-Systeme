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
            description: this.state.description,
            projectName: this.state.projectName,
            assignee: this.state.assignee,
            priority: this.state.priority,
            status: this.state.status,
            type: this.state.type
        }

        axios.post('http://localhost:5000/tickets/create', ticket)
            .then(res => console.log(res.data))

        alert('Successfully created.');

        // clear form
        this.setState({ 
          title: '',
          description: '',
          priority: '',
          status: '',
          type: ''
        });
    }

	render() {
		return(
			<div>
				<h3>Submit a Ticket</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Title: </label>
            	<input type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
            	/>
					</div>
					<div className="form-group">
						<label>Description: </label>
            	<textarea style={{resize: 'none'}}
                  type="text"
                  maxLength="250"
                  rows="3"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
            	></textarea>
					</div>
					<div className="form-group">
						<label>Project Name: </label>
            	<select className="form-control"
                      value={this.state.projectName}
                      onChange={this.onChangeProjectName}>
                      {
                          this.state.projects.map((project) => {
                          return <option key={project}
                                         value={project}>{project}
                                 </option>;
                          })
                      }
              </select>
					</div>
          <div className="form-group">
            <label>Assigned To: </label>
              <select className="form-control"
                      value={this.state.assignee}
                      onChange={this.onChangeAssignee}>
                      {
                        this.state.users.map((user) => {
                        return <option key={user}
                                       value={user}>{user}
                               </option>;
                        })
                      }
              </select>
          </div>
					<div className="form-group">
						<label>Priority: </label>
            	<select className="form-control"
                      value={this.state.priority}
                      onChange={this.onChangePriority}>
                      {
                          priorities.map((priority) => {
                          return <option key={priority}
                                         value={priority}>{priority}
                                 </option>;
                          })
                      }
              </select>
					</div>
					<div className="form-group">
						<label>Status: </label>
            	<select className="form-control"
                      value={this.state.status}
                      onChange={this.onChangeStatus}>
                      {
                          statuses.map((status) => {
                          return <option key={status}
                                         value={status}>{status}
                                 </option>;
                          })
                      }
              </select>
					</div>
					<div className="form-group">
						<label>Type: </label>
            	<select className="form-control"
                      value={this.state.type}
                      onChange={this.onChangeType}>
                      {
                          types.map((type) => {
                          return <option key={type}
                                         value={type}>{type}
                                 </option>;
                          })
                      }
              </select>
					</div>
					<div className="form-group">
              <input type="submit"
                   value="Submit Ticket"
                   className="btn btn-primary"
              />
          </div>
				</form>
			</div>
		);
	}
}