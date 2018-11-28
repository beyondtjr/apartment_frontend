import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navmenu from './components/Navbar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import AuthService from './services/index.js'
import ProtectedExample from './Pages/ProtectedExample';
import PublicExample from './Pages/PublicExample'
import { getApartments, createApartment, getApartment} from './api/index'

class App extends Component {
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
    console.log(this.state.apartments)
    let auth = new AuthService()
    return (
      <div>
        <Navmenu />
        <hr/>

        <Router>
					{(auth.loggedIn())
					// if logged in
					? <Switch>
						<Route path="/public" component={PublicExample} />
						<Route path="/protected" component={ProtectedExample} />
						<Route path="/register" component={Register} />
					</Switch>
					// if not logged in (ie Guest User)
					: <Switch>
						<Route path="/login" component={Login} />
						<Route path="/public" component={PublicExample} />
						<Redirect from="/protected" to="/register" />
						<Route path="/register" component={Register} />
					</Switch>}
				</Router>

      </div>
    );
  }
}

export default App;
