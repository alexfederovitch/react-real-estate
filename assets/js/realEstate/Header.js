import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<header> Header 

    <div> Logo </div>

    <nav>

      <a href="#">create ads</a>
      <a href="#">about us</a>
      <a href="#">login</a>
      <a href="#" className="register-btn">Register</a>

    </nav>
    
    </header>)
  }
}
