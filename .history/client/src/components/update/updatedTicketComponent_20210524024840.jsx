import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import './style.component.css';
// import updateTicket from "./update/updatedTicketComponent"

// // For real time
// import io from 'socket.io-client'
// const socket = io('http://localhost:5000/');

const urgences = ['Low', 'Medium', 'High'];
const etats = ['Open', 'In Progress', 'Resolved'];
// const types = ['Bug/Error', 'Feature Request', 'Security', 'Other'];

function EditTicket({ setPopup, setCardUser }) {
    const [input, setInput] = useState({
            title: '',
  		      type: '',
  		      urgence: '',
            description: '',
  		      etat: '',
  		      date: ''
            
        });
        const [ticketList, setTicketList] = useState([])
        useEffect(()=>{
         axios.get('http://localhost:5000/getticket').then((response)=>{
           setTicketList(response.data)
         })
        },[])
        
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
          

    // const [ticketList, setTicketList] = useState([])
    //    useEffect(()=>{
    //     axios.get('http://localhost:5000/getticket').then((response)=>{
    //       setTicketList(response.data)
    //     })
    //    },[])

       // updated ticket 

    //    const updateTicket = () => {
    //     const updateData = {
    //       title: input.title,
    //       type: input.type,
    //       urgence: input.urgence,
    //       description: input.description,
    //       etat: input.etat,
    //       date: input.date,
    //         _id: input._id
    //     }
    //     axios.put("http://localhost:5000/Updateticket",updateData)

    // //     socket.once('user-updated', (updatedData) => {
    // //         setCardUser(updatedData)
    // //     })

    // //     // setPopup(false)
    // }

	
		return(
			<div className="ticket">
				<h3>Update a Ticket</h3>
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
                  value={input.ticketList.type}
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
			</div>
		);
	}

export default EditTicket;


