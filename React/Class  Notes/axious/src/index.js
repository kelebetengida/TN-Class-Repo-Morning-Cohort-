 import React from "react"
 import ReactDOM from "react-dom"
import axios from "axios"


class App extends React.Component{
  state={
    data:[]
  }
  componentDidMount(){
      const url="https://jsonplaceholder.typicode.com/comments"
      axios.get(url).then((response)=>this.setState({data:response.data})).catch(err=>{console.log(err)})
    
  }
  render(){
    console.log(this.state.data)
    return(
      <div>

      </div>
    )
  }
}


const rootElement=document.getElementById("root")
ReactDOM.render(<App/>,rootElement)