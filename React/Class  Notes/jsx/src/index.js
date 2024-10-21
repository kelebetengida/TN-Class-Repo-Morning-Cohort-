//This is to import react library for the page to start runing JSX and react code
import React from "react"
//ReactDOM allows us to render the react code, JSX, Component to the root div in HTML
import ReactDOM from "react-dom"

//JSX- WHen we are trying to render a simple html jsx element Just store it in a variable. 
const title = <h1>Welcome to React</h1>

const instructor = <h1>Hello, Kelebet Here your instructor</h1>

const tA = <h1>Hello, Chris is here to assist you!</h1>

const student = <h1>This react stuff is tough!</h1>

const scottL = <h2>Hello Im Scott, a student</h2>;

const michael = <h1>I am happy to Be here!</h1>
//this is the best way to write our JSX element, as component 
const App = () => {
  return (
    <div>
      {title}
      {scottL}
      {student}
      {michael}
      {tA}
    </div>
  )
}
//This root variable is refering to the root elemet in the index flie
const root = document.getElementById("root")
//WHere ReactDOM uses the render method which takes the code that needs to be rendered and where it will be rendered
ReactDOM.render(<App/>, root)
