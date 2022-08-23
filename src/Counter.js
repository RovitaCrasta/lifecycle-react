import React, { Component } from 'react'

const ErrorComponent = () => <div>{}</div>

export class Counter extends Component {
  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = {
      counter: 0,
      error: null
    }
  }
  // to add state from props
  static getDerivedStateFromProps(props, state ) {
    console.log('gerDerivedStateFromProps')
    if (props.initialCount && state.initialCount !== props.incrementCount) {
     return {counter: this.props.initialCount || 0}
    }
    return null
  }
  componentDidMount() {
    console.log('Did Mount')
    console.log('---------------------')
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.ignoreProp && nextProps.ignoreProp !== this.props.ignoreProp) {
      console.log('should component update -- do not render ', nextProps, nextState)
      return false
    }
    console.log('should component update -- render ', nextProps, nextState)
    return true
  }
  incrementCounter = () => {
    this.setState({counter: this.state.counter + 1})
  }

  decrementCounter = () => {
    this.setState({counter: this.state.counter - 1})
  }
  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState)
    return null
  }

  render() {
    console.log('render')
    console.log(this.state.error)
    if(this.props.showErrorComponent && this.state.error) {
      return <div>You have encountered an error</div>
    }
    return (
      <>
        <h1>Counter ----- Class</h1>
        <button onClick={() => { this.incrementCounter() }}>increment</button>
        <button onClick={() => { this.decrementCounter() }}>decrement</button>
        <p>{this.state.counter}</p>
        {this.props.showErrorComponent && <ErrorComponent />}
      </>)
  }
  componentDidUpdate(prevProps, prevState, snapshpt) {
    console.log('Did update', prevProps, prevState, snapshpt)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  componentDidCatch(error, info){
    console.log('Component Did Catch', error, info)
    this.setState({error})
  }

}

export default Counter