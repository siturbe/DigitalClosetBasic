import React, { Component } from 'react';
import axios from 'axios';
import {Input, FormBtn, DropDown } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";


export default class AddDatePeople extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            dateWorn: "",
            peopleSeen: "",
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
                dateWorn: this.state.dateWorn,
                peopleSeen: this.state.peopleSeen,
                events: this.state.events
            }
            
            axios.post("http://localhost:4000/api/update-data/" + id, dataToSend, {
            }).then(res => {
                console.log(res);
                
                    this.setState({
                        dateWorn: "",
                        peopleSeen: "",
                        events: ""
                    })
        
            })
        }).catch(err => console.log(err));
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };


    render() {
        return (
        <Container fluid>
            <h2>Tag Date, People or Events</h2>
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <Input
                            name="dateWorn"
                            ref="fieldDateWorn"
                            label="Date Worn"
                            value={this.state.dateWorn}
                            type="date"
                            onChange={this.handleInputChange}
                        />
                        <Input
                            name="peopleSeen"
                            ref="fieldPeopleSeen"
                            value={this.state.peopleSeen}
                            placeholder="Enter People You Saw or Will See"
                            onChange={this.handleInputChange}
                        />
                        <Input
                            name="events"
                            ref="fieldEvent"
                            value={this.state.events}
                            placeholder="Event: add event where wore this"
                            onChange={this.handleInputChange}
                        />
                        <div className="form-group">
                            <button className="btn btn-primary" color="inherit"type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
        )
    }
}