import React, { Component } from 'react'
import { getApartments } from '../api/index'

class PublicExample extends Component {
  constructor(props){
    super(props)
    this.state = {
        apartments: []
      }
    }

    componentWillMount() {
      getApartments()
      .then(APIapartments => {
        console.log("these are our apartments " + APIapartments)
        this.setState({
          apartments: APIapartments
        })
      })
    }


    render() {
      console.log(this.props)
      return(
                <div>
                  {this.state.apartments.map(el => {
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

export default PublicExample
