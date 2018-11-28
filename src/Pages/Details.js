import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { getApartment} from '../api/index'


class Details extends Component {
  constructor(props){
    super(props)
    this.state={
      apartment: undefined
    }
  }


  render(){
    console.log(this.state.apartment)
    if(this.state.apartment == undefined){
      return (<div> Loading... </div>)
    } else{
      return (
        <div>
          <h3>
            <img src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c02fb96f9cfc16d3649835b75d1b2033&auto=format&fit=crop&w=1350&q=80" style={{width:300}}/>
        <br/>
            Street: {this.state.apartment.street},
            Unit: {this.state.apartment.unit}, {this.state.apartment.city}, {this.state.apartment.postalcode}, {this.state.apartment.state}, {this.state.apartment.country}
          </h3>
          <h2>Manager Information</h2>
          <p>Name: {this.state.apartment.manager_name}</p>
          <p>Contact number: {this.state.apartment.phone_number}</p>
          <p>Hours:{this.state.apartment.hours}</p>
        </div>
      )
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id
    console.log("this is the params id " +id);
    getApartment(id)
    .then((apartment) => {
      this.setState({apartment})
    })
  }
}
export default Details;
