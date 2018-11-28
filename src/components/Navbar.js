import { Navbar } from 'react-bootstrap'
import React, {Component} from 'react'

class Navmenu extends Component {
  render() {
    return(
      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">HomeFinder</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text>
          Hello: <Navbar.Link href="#">User Logged In "Pass instance of user" </Navbar.Link>
        </Navbar.Text>
        <Navbar.Text pullRight>Have a great day!</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
  }
}

export default Navmenu
