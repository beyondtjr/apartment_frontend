import { Navbar } from 'react-bootstrap'
import React, {Component} from 'react'
import AuthService from '../services/index.js'
import { getEmail } from '../api'


class Navmenu extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService()

  }



  render() {
    console.log(this.props.authenticated)

    return(
      <Navbar className="Navbar">
      <Navbar.Header>
        <Navbar.Brand pullLeft>
          <a href="#home">HomeFinder</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text pullRight>
          Logged In as: {(this.props.userEmail) ? this.props.form.user.email : "testing"}
        </Navbar.Text>
        <Navbar.Text> <a href="/apartments"> Home </a> </Navbar.Text>
        <Navbar.Text> <a href="/apartments"> Apartment Details  </a> </Navbar.Text>
        <Navbar.Text> <a href="/apartments/new"> New Apartment </a> </Navbar.Text>
        <Navbar.Text> <a href="/apartments/user">  View My Apartments </a> </Navbar.Text>
        <Navbar.Text> <a href="/register"> Register </a> </Navbar.Text>
        <Navbar.Text onClick={this.handleClick}> { (this.props.authenticated) ? "Logout" : <a href="/login"> Login </a> }
        </Navbar.Text>
        <Navbar.Text pullRight></Navbar.Text>

      </Navbar.Collapse>
    </Navbar>
  )
  }

  handleClick = () => {
    this.auth.logout()
    this.props.statusUpdate()
  }
}

export default Navmenu
