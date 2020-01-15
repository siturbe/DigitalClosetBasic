import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {Input, TextArea, FormBtn } from "../components/Form"; 
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";


const styles ={
    imageBtnStyle: {
        width: "200px"
    }
}


class InputItem extends Component {

    
    constructor(props){
        super(props);

        this.state = {
            type: "",
            color: "",
            date: "",
            people: "",
            topOrBottom: "",
            image: "",
            email: "",
        };
    }

    componentDidMount(){

    }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });

    };

    handleFormSubmit = event => {
        event.preventDefault();
        let email = localStorage.getItem("currentUser") || "";
        // const imageInput = document.getElementById('image-input');
        // imageInput.addEventListener('change', (e) => doSomethingWithFiles(e.target.files));

        // function doSomethingWithFiles(fileList){
        //     let file = null;
        //     for (let i = 0; i < fileList.length; i++) {
        //         if (fileList[i].type.match(/^image\//)) {
        //           file = fileList[i];
        //           break;
        //         }
        //     }
          
        //     if (file !== null) {
        //         imageInput.src = URL.createObjectURL(file);
        //         console.log(imageInput.src);
        //     }

        // }

        console.log(this.state.color);
        console.log(this.state.type);
        console.log(this.state.date);
        console.log(this.state.people);
        console.log(this.state.topOrBottom);
        console.log(this.state.image);
        console.log(email);
    
          API.saveItem({
            title: this.state.type,
            color: this.state.color,
            date: this.state.date,
            people: this.state.people,
            topOrBottom: this.state.topOrBottom,
            image: this.state.image,
            email: email
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
      };


    render() {
        return(
        <Container fluid>
            <h2>Input Outfit Information</h2>
            <form>
                <Input
                    name="date"
                    value={this.state.date}
                    type="date"
                    onChange={this.handleInputChange}
                />
                <Input
                    name="color"
                    value={this.state.color}
                    placeholder="Enter Color"
                    onChange={this.handleInputChange}
                />
                <Input
                    name="people"
                    value={this.state.people}
                    placeholder="Enter People You Saw or Will See"
                    onChange={this.handleInputChange}
                />
                <Input
                    name="type"
                    value={this.state.type}
                    placeholder="Type (ie. shirt, blouse, sweater)"
                    onChange={this.handleInputChange}
                />
                <Input
                    name="topOrBottom"
                    value={this.state.topOrBottom}
                    placeholder="Top or Bottom"
                    onChange={this.handleInputChange}
                />
                <input type="file" accept="image/*" capture className="waves-effect waves-light btn"
                        name="image"
                        value={this.state.image}
                        onChange={this.handleInputChange}
                        id="image-input"
                    >
                    </input>
                <FormBtn onClick={this.handleFormSubmit}>
                    Save Item
                </FormBtn>
            </form>    
        </Container>
        )
    }

}

export default InputItem;