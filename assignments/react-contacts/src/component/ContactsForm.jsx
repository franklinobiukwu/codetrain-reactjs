import React from "react";

export default class ContactForm extends React.Component {
        constructor(props){
                super(props);
                this.state = {
                        name : "",
                        phone : "",
                        location : ""
                }
        }

        handleChange = (e)=>{
                e.preventDefault();
                this.setState({
                        [e.target.name] : e.target.value
                })
        };

        handleSubmit = (e)=>{
                e.preventDefault();
                this.props.addUser(this.state);
                this.setState({
                        name: "",
                        phone: "",
                        location: ""
                });
        };

        handleDelete = (e) => {
                e.preventDefault();
        }

        render(){
                return (
                        <>
                                <form className="form" onSubmit={this.handleSubmit}>
                                        <h3 className="text-xl text-center pb-3 font-semibold">Submit Data</h3>
                                        <div className="inputWrapper flex flex-col">
                                                <input className="form--name hover:color-red" name = "name" value = {this.state.name}type="text" placeholder="Name" onChange={this.handleChange}required/>
                                                <input className="form--phone" name = "phone" value={this.state.phone}type="tel" placeholder="Phone" onChange={this.handleChange}required/>
                                                <input className="form--location" name = "location" value={this.state.location} type="text" placeholder="Location" onChange={this.handleChange}required/>
                                        </div>
                                        <div className="form--submit--wrapper">
                                                <button className="form--submit">Submit</button>
                                        </div>
                                </form>
                        </>
                );
        }
}
