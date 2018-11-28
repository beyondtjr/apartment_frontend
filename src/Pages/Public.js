import React, { Component } from 'react'


export default class Public extends Component {
  constructor(props){
    super(props)
  }



  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.apartments.map(el => {
          return (
            <div>
              <h2>
              Street: {el.street},
              Unit: {el.unit}, {el.city}, {el.postalcode}, {el.state}, {el.country}</h2>
              <h2>Manager Information</h2>
              <p>Name: {el.manager_name}</p>
              <p>Contact number: {el.phone_number}</p>
              <p>{el.hours}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
