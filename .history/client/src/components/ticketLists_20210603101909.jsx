import React, { useState, useEffect } from 'react'
import axios from "axios";
import updateTicket from "./update/updatedTicketComponent";



export default function TicketLists() {


    const [ticketList, setTicketList] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:5000/getticket").then((response) => {
        setTicketList(response.data);
      });
    }, []);

    const deleteTicket = (id) => {
        console.log(id);
        axios.delete(`http://localhost:5000/deleteTicket/${id}`).then((result) => {
          window.location.reload(false);
        });
      };

    return (

        <div className="ticket">
            <br></br>
				<h3>Our Tickets</h3>
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Project</th>
                            {/* <th>Assigned To</th> */}
                            <th>Département</th>
                            <th>Date</th>
                            
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                          {ticketList.map((value, index) =>{
                            return(
                            <tr key={value.index}>
                             
                               <td>{value.title}</td>
                               <td>{value.type}</td>
                               <td>{value.urgence}</td>
                               <td>{value.description}</td>
                               <td>{value.etat}</td>
                               <td>{value.date}</td>
                               <td><button 
                               onClick={updateTicket}
                               className="badge bg-info">
                                 <a href={`/updatticket/${value._id}`}>Edit</a>
                                 </button></td>
                               
                               <td><button className="badge bg-danger"
                               onClick={() => deleteTicket(value._id)} 
                               ><a >Delete</a></button></td>
                             
                            </tr>
                            );
                          })} 
                        </tbody>
                    </table>
                <br></br> 
        </div>
    )
}
