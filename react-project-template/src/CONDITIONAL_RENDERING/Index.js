import React, { Component } from 'react'

import Homepage from './Homepage';
import Signup from './Signup';

export default class CONDITIONAL_RENDERING extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }

  render() {
    const {isLoggedIn}= this.state;

    // if(isLoggedIn){
    //     element = <Homepage />
    // }
    // else{
    //     element =  <Signup />
    // }
    return (
      <div>
        {isLoggedIn ? <Homepage /> : <Signup />}
      </div>
    )
  }
}
