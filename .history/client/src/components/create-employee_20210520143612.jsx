import React, { useState } from "react";
import axios from 'axios';


const etats = ['technicien', 'responsable', 'admin'];

function CreateTicket() {
    const [input, setInput] = useState({
            name: '',
  		      email: '',
  		      type: '',
           
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
              name: input.name,
              email: input.email,
              type: input.type
              
            }
            axios
              .post("http://localhost:5000/postticket", newEmployee)
            //   .then((res) => {
            //     console.log("send data");
            //   })
            //   .catch((error) => console.log(error));
            //   setInput({
            //     title: '',
  		      //     type: '',
  		      //     urgence: '',
            //     description: '',
  		      //     etat: '',
  		      //     date: '',
            //   })
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
      //  useEffect(()=>{
      //   getTicket()
      //  },[])

	
		return(
			<div>
				<h3>Submit a Employee</h3>
				<form >
					<div className="form-group">
						<label>Title: </label>
            	<input type="text"
                  className="form-control"
                   name="name"
                  value={input.name}
                  onChange={handleChange}
            	/>
					</div>

                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email"
                               className="form-control"
                               value={input.name}
                               onChange={handleChange}
                        />
                    </div>
                    
					<div className="form-group">
						<label>Etat: </label>
            	<select className="form-control"
                      name="etat"
                      value={input.type}
                      onChange={handleChange}>
                      {
                          etats.map((etat) => {
                          return <option key={etat}
                                         value={etat}>{etat}
                                 </option>;
                          })
                      }
              </select>
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
