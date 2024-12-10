import React from "react"
import ReactDOM from "react-dom/client"
//Mounting 
// constructor()
// static getDerivedStateFromProps()
// render()
// componentDidMount()

class Mounting extends React.Component {
  constructor(props) {
    super(props)
    this.state={count:0}
    console.log("Constructor is loadded first")
  }

  static getDerivedStateFromProps(nextprops, prevstate){
    console.log("The getDerivedStateFromProps is loaded secound")
    return null; //no change to state 
  }

  componentDidMount(){
      console.log("component did mount runs last")
      //fetch your data from an API
  }

  render() {console.log("This is the render method running third")
    return (
      
      <div>
      <h1>The first Phase of react</h1>
      </div>
    )
  }
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Mounting />
  </>
);