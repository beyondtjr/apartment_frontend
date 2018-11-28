import { Navbar } from 'react-bootstrap'
import React, {Component} from 'react'

class Navmenu extends Component {
  render() {
    return(
      <Navbar>
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

        <Navbar.Text pullRight></Navbar.Text>

      </Navbar.Collapse>
    </Navbar>
  )
  }
}

export default Navmenu
