import React, { Component } from 'react';
import axios from 'axios';
import {Input, FormBtn, DropDown } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";

let dateVar ="";

export default class AddDate extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {dateWorn: ""}
        
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
                dateWorn: dateVar
            }
            
            
            axios.post("http://localhost:4000/api/add-date/" + id, dataToSend, {
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
        dateVar = value;
    };


    render() {
        return (
        <Container fluid>
            <h2>Add Dates Worn</h2>
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