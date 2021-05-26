import React, { useState, useEffect } from "react";
import axios from 'axios';

const urgences = ['Low', 'Medium', 'High'];
const statuses = ['Open', 'In Progress', 'Resolved'];
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
          
          //     const initialData = {
          //       title:''
          // }

      // get list of ticket to set default assignee
      const [ticket,setTicket]= useState([])
      // const [formData,setData] = useState(initialData)
      // const [date,setDate] = useState('')
      const getTicket =async ()=>{
      const {data} = await axios.get('http://localhost:5000/api/ticket');
      if(data) setTicket(data)
     }
       useEffect(()=>{
        getTicket()
       },[])

	
		return(
			<div>
				<h3>Submit a Ticket</h3>
				<form onClick={handleClick}>
					<div className="form-group">
						<label>Title: </label>
            	<input type="text"
                  className="form-control"
                  value={input.title}
                  onChange={(event) => handleChange(event)}
            	/>
					</div>
					<div className="form-group">
						<label>Type: </label>
            	<input style={{resize: 'none'}}
                  type="text"
                  maxLength="250"
                  rows="3"
                  className="form-control"
                  value={input.type}
                  onChange={(event) => handleChange(event)}
            	></input>
					</div>
					<div className="form-group">
						<label>Urgence: </label>
            	<select className="form-control"
                      value={input.urgence}
                      onChange={(event) => handleChange(event)}>
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
                  value={input.description}
                  onChange={(event) => handleChange(event)}
            	></textarea>
					</div>



					<div className="form-group">
						<label>Etat: </label>
            	<select className="form-control"
                      value={input.etat}
                      onChange={(event) => handleChange(event)}>
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
            	
                          <input class="form-control" type="datetime-local" value={input.date}
                          onChange={(event) => handleChange(event)} id="example-datetime-local-input" />
           
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

    export default CreateTicket;
