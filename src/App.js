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
import { getApartments, createApartment, getApartment} from './api/index'

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


  render() {
    console.log(this.state.apartments)
    return (
      <div>
        <Navmenu userEmail={this.state.user}/>
        <hr/>

        <Router>
					{(this.auth.loggedIn())
					// if logged in
					? <Switch>
            <Route path="/apartments/:id" component={Details} />
						<Route exact path="/apartments" component={PublicExample} />
						<Route path="/protected" component={ProtectedExample} />
						<Route path="/register" component={Register} />
            <Redirect from="/login" to="/protected" />
					</Switch>
					// if not logged in (ie Guest User)
					: <Switch>
						<Route path="/login" render ={ (props) => <Login statusUpdate={this.statusUpdate} {...props} getUser={this.getUser}/> } />
						<Route path="/apartments" component={PublicExample} />
						<Route path="/register" component={Register} />
            <Redirect from="/protected" to="/register" />
					</Switch>}
				</Router>

      </div>
    );
  }

  statusUpdate = () => {
    this.setState({authenticated: this.auth.loggedIn()})
  }
  getUser = (userEmail) => {
    this.setState({user: userEmail})
  }
}

export default App;
