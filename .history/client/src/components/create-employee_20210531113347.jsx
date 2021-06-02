import React, { useState } from "react";
import axios from 'axios';


const etats = ['technicien', 'responsable', 'admin'];

function CreateEmployee() {
    const [input, setInput] = useState({
            name: '',
  		      email: '',
            password: '',
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
            const newEmployer = {
              name: input.name,
              email: input.email,
              password: input.password,
              type: input.type
              
            }
            axios
              .post("http://localhost:5000/postemployer", newEmployer)
              .then((res) => {
                console.log("send data");
              })
              .catch((error) => console.log(error));
              setInput({
                name: '',
  		          email: '',
                password: '',
  		          type: '',
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
      //  useEffect(()=>{
      //   getTicket()
      //  },[])

	
		return(
			<div className="employer">
				<h3>Submit a Employee</h3>
				<form >
					<div className="form-group">
						<label>Name: </label>
            	<input type="text"
                  className="form-control"
                   name="name"
                  value={input.name}
                  onChange={handleChange}
                  required
            	/>
					</div>

          <div className="form-group">
              <label>Email: </label>
              <input type="email"
                     name="email"
                     className="form-control"
                     value={input.email}
                     onChange={handleChange}
                     required
              />
          </div>

          <div className="form-group">
                        <label>Password: </label>
                        <input type="password"
                               name="password"
                               className="form-control"
                               value={input.password}
                               onChange={handleChange}
                               required
                        />
                    </div>
                    
					<div className="form-group">
						<label>Role: </label>
            	<select className="form-control"
                      name="type"
                      value={input.type}
                      onChange={handleChange} required>
                      {
                          etats.map((type) => {
                          return <option key={type}
                                         value={type}>{type}
                                 </option>;
                          })
                      }
              </select>
					</div>
					<div className="mt-2 form-group">
              <input 
              onClick={handleClick}
              type="submit"
                   value="Submit"
                   className="btn btn-primary"
              />
          </div>
				</form>
			</div>
		);
	}

    export default CreateEmployee;
