import React, { Component } from 'react';
import axios from 'axios';
import {Input, FormBtn, DropDown } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import SimpleSelect from "../components/TopOrBottomSelect";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PersonIcon from '@material-ui/icons/Person';
import PictureIcon from '@material-ui/icons/Photo';
import BrandIcon from '@material-ui/icons/BrandingWatermark';
import ColorIcon from '@material-ui/icons/ColorLensRounded';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import ShirtIcon from '@material-ui/icons/ShoppingBasket';
import EventIcon from '@material-ui/icons/PartyMode';

export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: '',
            color: '',
            picture: "",
            type: "",
            dateWorn: "",
            peopleSeen: "",
            events: "",
            topOrBottom: "top",
            brand: "",
            email: ""
        }
    }

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        let email = localStorage.getItem("currentUser") || "";
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        

        axios.post("/api/item-profile", formData, {
        }).then(res => {
            console.log(res);
            let imgSrc = res.data.itemCreated.profileImg;

            let dataToSend = {
                color: this.state.color.toLowerCase(),
                picture: imgSrc,
                type: this.state.type,
                dateWorn: this.state.dateWorn,
                peopleSeen: this.state.peopleSeen,
                events: this.state.events,
                topOrBottom: this.state.topOrBottom,
                brand: this.state.brand,
                email: email
            }

            console.log(dataToSend);

            axios.post("/api/save-garment", dataToSend, {
            }).then(res => {
                console.log(res); 
                this.setState({
                    profileImg: '',
                    color: '',
                    picture: "",
                    type: "",
                    dateWorn: "",
                    peopleSeen: "",
                    events: "",
                    topOrBottom: "top",
                    brand: "",
                    email: ""
                })
            })
    
        }).catch(err => console.log(err));

        e.target.reset();
        
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
            <h2>Input Garment's Information</h2>
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <Input
                            name="brand"
                            ref="fieldBrand"
                            value={this.state.brand}
                            placeholder="Enter Brand"
                            onChange={this.handleInputChange}
                        />
                        <Input
                            name="color"
                            ref="fieldColor"
                            value={this.state.color}
                            placeholder="Enter Color"
                            onChange={this.handleInputChange}
                        />
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
                            name="type"
                            ref="fieldType"
                            value={this.state.type}
                            placeholder="Type (ie. shirt, blouse, sweater)"
                            onChange={this.handleInputChange}
                        />
                        <Input
                            name="events"
                            ref="fieldEvent"
                            value={this.state.events}
                            placeholder="Event: add event where wore this"
                            onChange={this.handleInputChange}
                        />
                        <SimpleSelect
                            name="topOrBottom"
                            ref="fieldTopOrBottom"
                            value={this.state.topOrBottom}
                            placeholder="Top or Bottom"
                            onChange={this.handleInputChange}
                        />
                        
                        <div className="form-group">
                            <button className="btn btn-primary purple" color="inherit"type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
        )
    }
}