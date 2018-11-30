import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class NewApt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form:{
        street: '',
        unit: '',
        city: 'San Diego',
        state: 'CA',
        postalcode: '92126',
        country: 'Djibouti',
        manager_name: '',
        phone_number: '858-555-5555',
        hours: '5AM-5PM',
        userId: ""
      }
    }
  }

  handleChange(event){
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
    this.props.submitApartment(this.state.form)
    this.props.handleNewApartment(this.state.form)
  }

  render() {
    console.log(this.state.form);
    return (
      <div>
      <form>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel id="street">Street</ControlLabel>
            <FormControl
              type="text"
              name="street"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.street}
            />
            <ControlLabel id="unit">Unit</ControlLabel>
            <FormControl
              type="text"
              name="unit"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.unit}
            />
            <ControlLabel id="manager_name">Manager Name</ControlLabel>
            <FormControl
              type="text"
              name="manager_name"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.manager_name}
            />
          </FormGroup>
        <Button onClick={this.handleSubmit}id="submit" type="submit">Submit Apartment</Button>
      </form>
      {this.props.newApartmentSuccess && <Redirect to="/apartments" />}
    </div>
    );
  }
}

export default NewApt;
