import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { getUserApartments, deleteApartment, getEmail } from '../api/index'
import AuthService from '../services/index.js'
import '../Pages/App.css'

class UserApts extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService();
    this.state={
          apartments: '',
          email: ''
      }
  }

  componentWillMount() {
    getUserApartments(this.auth.getUserId())
    .then(APIapartments => {
      console.log("these are our apartments " + APIapartments)
      this.setState({
        apartments: APIapartments
      })
    }).then(()=> {    getEmail(this.auth.getUserId())
        .then(email => {
          console.log("these is my email " + email)
          this.setState({email: email})
        })})
  }



  render(){
    console.log(this.state)
    console.log(this.auth.getUserId())
    if(this.state.apartments) {
    return(

      <div className="ApartmentList">
      <h1>{this.state.email}</h1>
        {this.state.apartments.map(el => {
          return (
            <div className="IndividualList">
              <h3>
              <a href={`/apartments/${el.id}`}>
              <img id="ImageHolder" src="https://liveadamscrossing.com/wp-content/uploads/2016/09/Luxury-Flats.jpg" style={{width:300}}/>
              <br/>

              Address: <br/>
              {el.street} { }
              Unit: {el.unit} <br/>
              {el.city} {el.state} {el.postalcode} {el.country}
              </a>
              <br />
              <span onClick={this.handleDelete.bind(this, el.id)}>Delete this apartment</span>
              </h3>

            </div>
          )
        })}
      </div>
      )
    } else if (this.state.apartments.length == '') {
      return(
        <div>loading</div>
      )
    }
  }

  handleDelete = (id) => {
    deleteApartment(id)
    .then(() => {
      getUserApartments(this.auth.getUserId())
      .then(json => {
        this.setState({apartments: json})
      })
    })
    console.log(this.auth.getUserId);
  }


}


export default UserApts
