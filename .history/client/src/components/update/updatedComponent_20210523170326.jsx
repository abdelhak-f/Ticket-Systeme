import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
 
const EditTicket = () => {
   
  let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
  
 
  const [ticket ,setTicket] = useState({
    title:"",
    type:"",
    urgence:"",
    description:"",
    etat:"",
    date:""
  })
 
 
  const { title, type, urgence, description, etat, date } = ticket;
 
  const onInputChange = e => {
    setTicket({ ...ticket,[e.target.name]: e.target.value });
  };
 
  useEffect(() => {
    loadTicket();
  }, []);
 
   
  const updateEmployee = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/v1/employee/${id}`, ticket);
    history.push("/");
  };
 
  const loadTicket =  () => {
    fetch(`http://localhost:5000/api/v1/employee/${id}`,{
            method: "GET",
          })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
        setUser({
                    id: id,
                    update: true,
                    title: result.response[0].first_name,
          lname: result.response[0].last_name,
          email: result.response[0].email,
          phone: result.response[0].phone,
          salary: result.response[0].salary,
 
                });
            })
            .catch((error) => console.log("error", error));
  };
 
  return (
    <div className="container">
     <div className="mt-4 row"> 
      <div className="p-5 mx-auto shadow col-sm-5 col-offset-3">
        <h4 className="mb-4 text-center">Edit A employee</h4>
       
          <h5 className="text-success">Employee ID : {ticket.id} </h5>
          <div className="mb-3 form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="fname"
              value={fname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="mb-3 form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Price"
              name="lname"
              value={lname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="mb-3 form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Description"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="mb-3 form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Description"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="mb-3 form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Description"
              name="salary"
              value={salary}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button onClick={updateEmployee} className="btn btn-secondary btn-block">Update Ticket</button>
       
       </div>
      </div> 
    </div>
  );
};
 
export default EditTicket;