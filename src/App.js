import React, { Component } from 'react'
import './App.css';
import Counter from './Counter.js'
import CounterFunctional from './CounterFunctional.js'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mount: false,
      ignoreProp: 0,
      showErrorComponent: false
    }
  }
  mountCounter = () => {
    this.setState({mount: true})
  }

  unmountCounter = () => {
    this.setState({mount: false})
  }
  igonePropHandler =() => {
    this.setState({ignoreProp: Math.random()})
  }
  errorComponentHandler =() => {
    this.setState({showErrorComponent: !this.state.showErrorComponent})
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => { this.mountCounter()}} disabled={this.state.mount}>Mount</button>
        <button onClick={() => { this.unmountCounter()}} disabled={!this.state.mount}>UnMount</button>
        <button onClick={() => { this.igonePropHandler()}} >ignore</button>
        <button onClick={() => { this.errorComponentHandler()}} >toggle error component</button>
        { this.state.mount && <Counter ignoreProp={this.state.ignoreProp} mount={this.state.mount} initialCount={10} showErrorComponent={this.state.sh} />}
        {!this.state.mount && <CounterFunctional />}
      </div>
    );
  }
}

export default App;
