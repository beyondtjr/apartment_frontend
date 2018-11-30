import { Navbar } from 'react-bootstrap'
import React, {Component} from 'react'
import AuthService from '../services/index.js'


class Navmenu extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService()
  }
  render() {
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
          Logged In as: <Navbar.Link href="#">{this.props.userEmail}</Navbar.Link>
        </Navbar.Text>

        <Navbar.Text> <a href="/apartments"> Home </a> </Navbar.Text>
        <Navbar.Text> <a href="/login"> Login </a> </Navbar.Text>
        <Navbar.Text> <a href="/apartments"> Apartment Details  </a> </Navbar.Text>
        <Navbar.Text> <a href="/apartments"> Contact Leasing Office  </a> </Navbar.Text>
        <Navbar.Text> <a href="/register"> Register </a> </Navbar.Text>
        <Navbar.Text> Hi {this.props.authenticated}
        </Navbar.Text>
        <Navbar.Text onClick={this.handleClick}> { (this.props.authenticated) ? "Logout" : ""}
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
