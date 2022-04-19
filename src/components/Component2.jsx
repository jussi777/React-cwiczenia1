import React from "react";

export default class Component2 extends React.Component {
  
  constructor(props){
      super(props);
      this.state = {
          messageIsActive: false
      }
      this.handleMessageButton = this.handleMessageButton.bind(this)
  }

handleMessageButton() {
    this.setState({
        messageIsActive: !this.state.messageIsActive
    })
}

    render() {

      const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam facilis maiores voluptate deleniti fugiat architecto a ea cum praesentium aut minima ab rem cumque atque earum eos, debitis quae dolores ratione aliquid! Illum distinctio perspiciatis eius sed eaque, odio harum magni qui totam. Doloremque nam ipsa sed atque labore. Cum?'

    return (
      <>
        <button onClick={this.handleMessageButton} >{this.state.messageIsActive? 'Ukryj' : 'Pokaz'}</button>
        <p>{this.state.messageIsActive? text : ''}</p>
      </>
    );
  }
}
