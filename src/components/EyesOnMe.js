// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{

  constructor(){
    super()
  }

  focusEvent(){
    console.log('Good!')
  }

  blurEvent(){
    console.log('Hey! Eyes on me!')

  }

  render(){
    return(

      <button onFocus = {this.focusEvent} onBlur = {this.blurEvent} > button </button>
    )
  }
}

export default EyesOnMe

// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
