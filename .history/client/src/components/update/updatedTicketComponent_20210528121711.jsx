import React, {Component } from "react";
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import './style.component.css';

const urgences = ['Low', 'Medium', 'High'];
const departements = ['Direction', 'Ressources humaines', 'Production'];


class EditTicket extends Component{
    
  constructor(props) {
    super(props)

    this.onChangeTicketTitle = this.onChangeTicketTitle.bind(this);
    this.onChangeTicketType = this.onChangeTicketType.bind(this);
    this.onChangeTicketUrgence = this.onChangeTicketUrgence.bind(this);
    this.onChangeTicketDescription = this.onChangeTicketDescription.bind(this);
    this.onChangeTicketEtat = this.onChangeTicketEtat.bind(this);
    this.onChangeTicketDate = this.onChangeTicketDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      title: '',
      type: '',
      urgence: '',
      description: '',
      etat: '',
      date: ''
    }
    // history.push('/'); 
  }
       
        
  componentDidMount() {
    axios.get(`http://localhost:5000/getticket/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ 
          title: res.data.title,
          type: res.data.type,
          urgence: res.data.urgence,
          description: res.data.description,
          etat: res.data.etat,
          date: res.data.date
        });
        

      })
      .catch((error) => {
        console.log(error);
      })
      
  }


  onChangeTicketTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeTicketType(e) {
    this.setState({ type: e.target.value })
  }

  onChangeTicketUrgence(e) {
    this.setState({ urgence: e.target.value })
  }

  onChangeTicketDescription(e) {
    this.setState({ description: e.target.value })
  }

  onChangeTicketEtat(e) {
    this.setState({ etat: e.target.value })
  }

  onChangeTicketDate(e) {
    this.setState({ date: e.target.value })
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    const ticketObject = {
      title: this.state.title,
      type: this.state.type,
      urgence: this.state.urgence,
      description: this.state.description,
      etat: this.state.etat,
      date: this.state.date
    };

      axios.put('http://localhost:5000/Updateticket/' +this.props.match.params.id, ticketObject)
      .then((res) => {
        console.log(res.data)
        console.log('ticket successfully updated')
      }).catch((error) => {
        console.log(error)
      })
      
    // Redirect to Ticket List 
    //this.props.history.push('./create-ticket.component')
  }

          
	render(){
		return(
			<div className="ticket">
				<h3>Update a Ticket</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Title: </label>
            	<input type="text"
                  className="form-control"
                   name="title"
                  value={this.state.title}
                  onChange={this.onChangeTicketTitle}
                  required
            	/>
					</div>
					<div className="form-group">
						<label>Type: </label>
            	<input style={{resize: 'none'}}
                  type="text"
                  maxLength="250"
                  rows="3"
                  className="form-control"
                  name="type"
                  value={this.state.type}
                  onChange={this.onChangeTicketType}
                  required
            	></input>
					</div>
					<div className="form-group">
						<label>Urgence: </label>
            	<select className="form-control"
              name="urgence"
                      value={this.state.urgence}
                      onChange={this.onChangeTicketUrgence} 
                      required>
                      {
                          urgences.map((urgence) => {
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
                  name="description"
                  value={this.state.description}
                  onChange={this.onChangeTicketDescription}
                  required
            	></textarea>
					</div>



					<div className="form-group">
						<label>Département: </label>
            	<select className="form-control"
                      name="etat"
                      value={this.state.etat}
                      onChange={this.onChangeTicketEtat} 
                      required>
                      {
                          departements.map((etat) => {
                          return <option key={etat}
                                         value={etat}>{etat}
                                 </option>;
                          })
                      }
              </select>
					</div>
					<div className="form-group">
						<label>Date: </label>
            	
                          <input className="form-control" type="datetime-local"
                          name="date"
                           value={this.state.date}
                          onChange={this.onChangeTicketDate} id="example-datetime-local-input" required />
           
					</div>
					<div className="mt-2 form-group">
              <input
              type="submit"
                   value="Submit Ticket"
                   className="btn btn-primary"
              />
          </div>
				</form>
			</div>
		);
	}
}

export default EditTicket;

