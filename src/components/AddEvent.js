import React, { Component } from 'react';
import axios from 'axios';
import {Input, FormBtn, DropDown } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";

let eventVar = "";

export default class AddEvents extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            events: ""
        }
    }


    onSubmit(e) {
        e.preventDefault()
        let currentUser = localStorage.getItem("currentUser") || "";
        let currentTop = localStorage.getItem("currentTop");
        let id;


        axios.get("http://localhost:4000/api/get-tops/" + currentUser).then(function (res) {
            id = res.data[currentTop]._id;
            console.log(id);

            let dataToSend = {
                events: eventVar
            }

            console.log(dataToSend);
            
            axios.post("http://localhost:4000/api/add-event/" + id, dataToSend, {
            }).then(res => {
                console.log(res);
        
            })
        }).catch(err => console.log(err));
        
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        eventVar = value;
    };


    render() {
        return (
        <Container fluid>
            <h2>Add Event Worn To</h2>
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group"></div>
                        <Input
                            name="events"
                            ref="fieldEvent"
                            value={this.state.events}
                            placeholder="Event: add event where wore this"
                            onChange={this.handleInputChange}
                        />
                        <div className="form-group">
                            <button className="btn btn-primar purple" color="inherit" type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
        )
    }
}