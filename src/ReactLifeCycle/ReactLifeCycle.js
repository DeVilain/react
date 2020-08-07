import React, { Component } from 'react'

export default class ReactLifeCycle extends Component {

    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            number: 1
        }
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={() => {
                    this.setState({ number: this.state.number + 1 })
                }}>+</button>
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentDidUpdate(newProps, newState){
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
}

