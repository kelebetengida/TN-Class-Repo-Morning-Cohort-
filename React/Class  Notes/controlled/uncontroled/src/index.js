import React from "react"
import ReactDOM from "react-dom/client"

//Controlled components:
// A controlled input is an input element where React manages its state. This means the input's value is directly controlled by the React state, and any changes to the input are handled by React.
class Uncontroled extends React.Component {
  inputRef = React.createRef()

  handleSubmit = (event) => {
    event.preventDefault()
    alert(`Submited name:${this.inputRef.current.value}`)
  }
  render() {
    return (
      <div>
        <hl>Uncontroled</hl>
        <form onSubmit={this.handleSubmit}>
          <label>Name <input type='text' ref={this.inputRef} /></label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

// Characteristics of Controlled Inputs

//     The input's value is bound to a state variable.
//     Any change to the input triggers a function (e.g., onChange) to update the state.
//     React is the single source of truth for the input's value.

// Advantages of Controlled Inputs

//     Easy to validate and manipulate input values (e.g., restrict length, apply formatting).
//     Fully integrates with React's state-driven architecture.
//     You have full control over the input's behavior.

// Disadvantages of Controlled Inputs

//     More boilerplate code (e.g., state management and event handling).
//     Can lead to performance issues in large forms due to frequent state updates.


//uncontrolled components:
// An uncontrolled input is an input element where React does not manage its state directly. Instead, the input's value is handled by the DOM itself, and React accesses the value only when needed (e.g., using a ref).

// When to Use Each

// Use Controlled Inputs When:

// You need to dynamically update or validate inputs(e.g., disabling a button if a field is empty).
// The input's value directly affects the component's behavior or rendering.

// Use Uncontrolled Inputs When:

// You need minimal interaction with the input's value (e.g., reading the value only on form submission).
// Simplicity is preferred, and real - time validation / manipulation is unnecessary

class Controlled extends React.Component {
  state = {
    name: ""
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    alert(`Submited name:${this.state.name}`)
  }
  render() {
    return (
      <div>
        <h1>Controlled Input</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name <input type='text' value={this.state.name} onChange={this.handleChange} /></label>
          <h1>{this.state.name}</h1>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
// Characteristics of Uncontrolled Inputs

//     The input's value is not bound to React state.
//     You retrieve the input's value when needed using a ref or by directly accessing the DOM.
//     The DOM is the source of truth for the input's value.

// Advantages of Uncontrolled Inputs

//     Simpler to set up (no need for state management).
//     Useful for non-interactive inputs where you only need the value occasionally (e.g., on form submission).

// Disadvantages of Uncontrolled Inputs

//     Harder to validate or manipulate input values in real time.
//     React cannot re-render the component based on the input's value.
//     Breaks React's declarative nature, as the DOM is the source of truth!!!!!!(nice comment!)
class App extends React.Component {
  render() {

    return (
      <div>
        <Controlled />
        <Uncontroled />
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);