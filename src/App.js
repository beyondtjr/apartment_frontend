import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navmenu from './components/Navbar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import AuthService from './services/index.js'
import ProtectedExample from './Pages/ProtectedExample';
import PublicExample from './Pages/PublicExample'
import Details from './Pages/Details'
import { getApartments, createApartment, getApartment, getEmail} from './api/index'
import NewApt from './Pages/NewApt'
import UserApts from './Pages/UserApts'
import './Pages/App.css'


class App extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService()
    this.state = {
      apartments: [],
      authenticated: this.auth.loggedIn(),
      user: ""
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

  handleNewApartment = (newApartment) => {
    console.log("New Apartment TRY", newApartment)
    createApartment(newApartment)
    .then(successApartment => {
      // apartments list with successCorgi added
      console.log("SUCCESS! New Apt: ", successApartment);
      this.setState({
        // corgis: ,
        newApartmentSuccess: true
      })
    })
  }

  submitApartment= (apartment) => {
    let apartments = this.state.apartments
    apartments[apartments.length] = {id: (apartments.length), street: apartment.street,


            unit: apartment.unit,
            city: apartment.city,
            state: apartment.state,
            postalcode: apartment.postalcode,
            country: apartment.country,
            manager_name: apartment.manager_name,
            phone_number: apartment.phone_number,
            hours: apartment.hours}
    console.log("HELLO")
    this.setState({apartments: apartments})
  }

  render() {
    console.log(this.state.apartments)
    console.log("Authentication status" + this.state.authenticated);

    return (
      <div>
        <Navmenu authenticated={this.state.authenticated} userEmail={this.state.user} statusUpdate={this.statusUpdate}/>

        <Router>
					{(this.auth.loggedIn())
					// if logged in
					? <Switch>
          <Route path="/apartments/new" render={(props) => <NewApt handleNewApartment={this.handleNewApartment} submitApartment={this.submitApartment} newApartmentSuccess={this.state.newApartmentSuccess}/>} />
            <Route path="/apartments/user" component={UserApts} />
            <Route path="/apartments/:id" component={Details} />
						<Route exact path="/apartments" component={PublicExample} />
						<Route path="/protected" component={ProtectedExample} />
						<Route path="/register" component={Register} />
            <Redirect from="/login" to="/apartments" />
					</Switch>
					// if not logged in (ie Guest User)
					: <Switch>
						<Route path="/login" render ={ (props) => <Login statusUpdate={this.statusUpdate} {...props} getUser={this.getUser}/> } />
						<Route path="/apartments" component={PublicExample} />
						<Route path="/register" render={(props) => <Register statusUpdate={this.statusUpdate} {...props} />} />
            <Redirect from="/protected" to="/register" />
					</Switch>}
				</Router>

      </div>
    );
  }

  statusUpdate = () => {
    this.setState({authenticated: this.auth.loggedIn()})
  }
  // getUser = (userEmail) => {
  //   this.setState({user: userEmail})
  // }
}

export default App;
