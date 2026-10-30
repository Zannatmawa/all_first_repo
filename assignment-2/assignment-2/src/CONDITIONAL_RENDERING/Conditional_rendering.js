import React, { Component } from 'react'
import Home from './Home'
import SignUp from './SignUp'

class Conditional_rendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {
    const {isLoggedIn} = this.state
    return(
       <div>
         {isLoggedIn ? <Home /> :<SignUp />}
       </div>
    )
    
  }
}
export default Conditional_rendering


// if(this.state.isLoggedIn)
//     return (<Home />)
// else{
//     return(<SignUp />)
// }
