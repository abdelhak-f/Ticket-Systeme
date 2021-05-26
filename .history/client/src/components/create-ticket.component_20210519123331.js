import React, { Component } from 'react';
import axios from 'axios';

// const priorities = ['Low', 'Medium', 'High'];
// const statuses = ['Open', 'In Progress', 'Resolved'];
// const types = ['Bug/Error', 'Feature Request', 'Security', 'Other'];

function CreateTicket() {
    const [input, setInput] = useState({
            title: '',
  		    type: '',
  		    urgence: '',
            description: '',
  		    etat: '',
  		    date: '',
            
        });
        
        function handleChange(event) {
            setInput({ ...input, [event.target.name]: event.target.value });
          }
          function handleClick(event) {
            event.preventDefault();
            axios
              .post("http://localhost:5000/postticket", input)
              .then((res) => {
                console.log("send data");
              })
              .catch((error) => console.log(error));
              setInput({
                title: '',
  		        type: '',
  		        urgence: '',
                description: '',
  		        etat: '',
  		        date: '',
              })
          }

   

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
					<div className="form-group">
						<label>Title: </label>
            	<input type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
            	/>
					</div>
					<div className="form-group">
						<label>Type: </label>
            	<input style={{resize: 'none'}}
                  type="text"
                  maxLength="250"
                  rows="3"
                  className="form-control"
                  value={this.state.type}
                  onChange={this.onChangeType}
            	></input>
					</div>
                    {/* <div className="form-group">
						<label>Type: </label>
            	<select className="form-control"
                      value={this.state.date}
                      onChange={this.onChangeDate}>
                      {
                          types.map((date) => {
                          return <option key={date}
                                         value={date}>{date}
                                 </option>;
                          })
                      }
              </select>
					</div> */}
					{/* <div className="form-group">
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
					</div> */}
          {/* <div className="form-group">
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
          </div> */}
					<div className="form-group">
						<label>Urgence: </label>
            	<select className="form-control"
                      value={this.state.urgence}
                      onChange={this.onChangeUrgence}>
                      {
                          priorities.map((urgence) => {
                          return <option key={urgence}
                                         value={urgence}>{urgence}
                                 </option>;
                          })
                      }
              </select>
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
						<label>Etat: </label>
            	<select className="form-control"
                      value={this.state.etat}
                      onChange={this.onChangeEtat}>
                      {
                          statuses.map((etat) => {
                          return <option key={etat}
                                         value={etat}>{etat}
                                 </option>;
                          })
                      }
              </select>
					</div>
					<div className="form-group">
						<label>Date: </label>
            	
                          <input class="form-control" type="datetime-local" value={this.state.date}
                          onChange={this.onChangeDate} id="example-datetime-local-input" />
           
					</div>
					<div className="mt-2 form-group">
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