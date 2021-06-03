import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";
import "./style.component.css";
import updateTicket from "./update/updatedTicketComponent";

const urgences = ["Low", "Medium", "High"];
const departements = ["Direction", "Ressources humaines", "Production "];

function CreateTicket({ setPopup, setCardUser }) {
  const [input, setInput] = useState({
    title: "",
    type: "",
    urgence: "",
    description: "",
    etat: "",
    date: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((preventInput) => {
      return {
        ...preventInput,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    event.preventDefault();
    const newTicket = {
      title: input.title,
      type: input.type,
      urgence: input.urgence,
      description: input.description,
      etat: input.etat,
      date: input.date,
    };
    axios
      .post("http://localhost:5000/postticket", newTicket)
      .then((res) => {
        console.log("send data");
      })
      .catch((error) => console.log(error));
    setInput({
      title: "",
      type: "",
      urgence: "",
      description: "",
      etat: "",
      date: "",
    });
    window.location.reload(false);
  }

  const [ticketList, setTicketList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/getticket").then((response) => {
      setTicketList(response.data);
    });
  }, []);

  // http://localhost:5000/deleteTicket/

  const deleteTicket = (id) => {
    console.log(id);
    axios.delete(`http://localhost:5000/deleteTicket/${id}`).then((result) => {
      window.location.reload(false);
    });
  };

  return (
    <div className="ticket">
      <h3>Submit a Ticket</h3>
      <form>
        <div className="form-group">
          <label>Title: </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={input.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Type: </label>
          <input
            style={{ resize: "none" }}
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
          <select
            className="form-control"
            name="urgence"
            value={input.urgence}
            onChange={handleChange}
            required
          >
            {urgences.map((urgence) => {
              return (
                <option key={urgence} value={urgence}>
                  {urgence}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label>Description: </label>
          <textarea
            style={{ resize: "none" }}
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
          <label>Département: </label>
          <select
            className="form-control"
            name="etat"
            value={input.etat}
            onChange={handleChange}
            required
          >
            {departements.map((etat) => {
              return (
                <option key={etat} value={etat}>
                  {etat}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Date: </label>

          <input
            className="form-control"
            type="datetime-local"
            name="date"
            value={input.date}
            onChange={handleChange}
            id="example-datetime-local-input"
            required
          />
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
          {ticketList.map((value, index) => {
            return (
              <tr key={value.index}>
                <td>{value.title}</td>
                <td>{value.type}</td>
                <td>{value.urgence}</td>
                <td>{value.description}</td>
                <td>{value.etat}</td>
                <td>{value.date}</td>
                <td>
                  <button onClick={updateTicket} className="badge bg-info">
                    <a href={`/updatticket/${value._id}`}>Edit</a>
                  </button>
                </td>

                <td>
                  <button
                    className="badge bg-danger"
                    onClick={() => deleteTicket(value._id)}
                  >
                    <a>Delete</a>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br></br>
    </div>
  );
}

export default CreateTicket;
