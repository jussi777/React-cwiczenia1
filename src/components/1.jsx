import React from "react"

export default class Component1 extends React.Component {
state = {
value: ""
}

handleInputChange = (e) => {
this.setState({
    value: e.target.value
})
}

handleResetClick = () => {
    this.setState({
        value:""
    })
}

render() {
    return (
        <>
        <input value={this.state.value} onChange={this.handleInputChange} type="text" />
        <button onClick={this.handleResetClick} >Reset</button>
        <h1>{this.state.value.toLocaleUpperCase()}</h1>
        </>
    )
}
}