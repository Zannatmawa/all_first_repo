import React, { Component } from 'react'

export default class USE_STATE_HOOK1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    handleIncrement = () =>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    const {count} = this.state
    return (
      <div>
       <h1>count: {count}</h1>
        <button onClick={this.handleIncrement}>increment</button>
      </div>
    )
  }
}
