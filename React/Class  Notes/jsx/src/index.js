//This is to import react library for the page to start runing JSX and react code
import React from "react"
//ReactDOM allows us to render the react code, JSX, Component to the root div in HTML
import ReactDOM from "react-dom"

//JSX- WHen we are trying to render a simple html jsx element Just store it in a variable. 
const title=<h1>Welcome to React</h1>







//This root variable is refering to the root elemet in the index flie
const root = document.getElementById("root")
//WHere ReactDOM uses the render method which takes the code that needs to be rendered and where it will be rendered
ReactDOM.render(title, root )
