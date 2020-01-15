import React, { Component } from 'react';
import axios from 'axios';
import {Input, FormBtn, DropDown } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";

let peopleVar = "";

export default class AddPeople extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            peopleSeen: ""
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
                peopleSeen: peopleVar
            }
            
            axios.post("http://localhost:4000/api/add-people/" + id, dataToSend, {
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
        peopleVar = value;
    };


    render() {
        return (
        <Container fluid>
            <h2>Add People You Saw</h2>
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <Input
                            name="peopleSeen"
                            ref="fieldPeopleSeen"
                            value={this.state.peopleSeen}
                            placeholder="Enter People You Saw or Will See"
                            onChange={this.handleInputChange}
                        />
                        <div className="form-group">
                            <button className="btn btn-primary purple" color="inherit"type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
        )
    }
}