import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
        book: {}
        };
    }

    componentDidMount() {
        axios.get('/getticket'+this.props.match.params.id)
        .then(res => {
            this.setState({ book: res.data });
            console.log(this.state.book);
        });
    }

    onChange = (e) => {
        const state = this.state.book
        state[e.target.name] = e.target.value;
        this.setState({book:state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { isbn, title, author, description, published_date, publisher } = this.state.book;

        axios.put('/api/book/'+this.props.match.params.id, { isbn, title, author, description, published_date, publisher })
        .then((result) => {
            this.props.history.push("/show/"+this.props.match.params.id)
        });
    }

    render() {
        return (
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
                </div>        
        );
    }
}

export default Edit;