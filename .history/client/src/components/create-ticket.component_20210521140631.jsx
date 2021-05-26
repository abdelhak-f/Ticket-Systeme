import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const urgences = ['Low', 'Medium', 'High'];
const etats = ['Open', 'In Progress', 'Resolved'];
// const types = ['Bug/Error', 'Feature Request', 'Security', 'Other'];

function CreateTicket() {
    const [input, setInput] = useState({
            title: '',
  		      type: '',
  		      urgence: '',
            description: '',
  		      etat: '',
  		      date: ''
            
        });
        
        function handleChange(event) {
          const {name, value} = event.target;
            setInput(preventInput => {
                 return {
                   ...preventInput,
                   [name]: value
                 }
            })
          }
          function handleClick(event) {
            event.preventDefault();
            const newTicket = {
              title: input.title,
              type: input.type,
              urgence: input.urgence,
              description: input.description,
              etat: input.etat,
              date: input.date
            }
            axios
              .post("http://localhost:5000/postticket", newTicket)
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
          
          //     const initialData = {
          //       title:''
          // }

      // get list of ticket to set default assignee
      // const [ticket,setTicket]= useState([])
      // const [formData,setData] = useState(initialData)
      // const [date,setDate] = useState('')
    //   const getTicket =async ()=>{
    //   const {data} = await axios.get('http://localhost:5000/api/ticket');
    //   if(data) setTicket(data)
    //  }

    const [ticketList, setTicketList] = useState([])
       useEffect(()=>{
        axios.get('http://localhost:5000/getticket').then((response)=>{
          setTicketList(response.data)
        })
       },[])

	
		return(
			<div>
				<h3>Submit a Ticket</h3>
				<form >
					<div className="form-group">
						<label>Title: </label>
            	<input type="text"
                  className="form-control"
                   name="title"
                  value={input.title}
                  onChange={handleChange}
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
                  value={input.type}
                  onChange={handleChange}
                  required
            	></input>
					</div>
					<div className="form-group">
						<label>Urgence: </label>
            	<select className="form-control"
              name="urgence"
                      value={input.urgence}
                      onChange={handleChange} required>
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
                  value={input.description}
                  onChange={handleChange}
                  required
            	></textarea>
					</div>



					<div className="form-group">
						<label>Etat: </label>
            	<select className="form-control"
                      name="etat"
                      value={input.etat}
                      onChange={handleChange} required>
                      {
                          etats.map((etat) => {
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
                           value={input.date}
                          onChange={handleChange} id="example-datetime-local-input" required />
           
					</div>
					<div className="mt-2 form-group">
              <input 
              onClick={handleClick}
              type="submit"
                   value="Submit Ticket"
                   className="btn btn-primary"
              />
          </div>
				</form>

        <br></br>
				<h3>All Tickets</h3>
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Project</th>
                            <th>Assigned To</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                          {ticketList.map((value, key) =>{
                            return(
                            <div key={key}>
                             <tr>
                               <td>{value.title}</td>
                               <td>{value.type}</td>
                               <td>{value.title}</td>
                               <td>{value.title}</td>
                               <td>{value.title}</td>
                               <td>{value.title}</td>
                               <td>{value.title}</td>
                               <td><Link to={"/edit/"} className="badge badge-info">Edit</Link></td>
                             </tr>
                            </div>
                            );
                          })} 
                        </tbody>
                    </table>
                <br></br>

			</div>
		);
	}

    export default CreateTicket;
