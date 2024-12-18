//https://jsonplaceholder.typicode.com/

import React from "react"
import ReactDOM from "react-dom/client"
import axios from "axios"

class Example extends React.Component {
  //first compartment Above the render method
  //This is to declare state, methods and anything with object oriented code
  state = {
    data: []
  }

  componentDidMount () {
   //url -https protocol, an adress,, a resource(endpoint)
    const url = "https://jsonplaceholder.typicode.com/comments"
    //axios makes the request 
    axios.get(url)
    //.then caths the response and we store it in the state 
    .then((response) => {
      //we can check first if we get data in our console
      console.log("response.data",response.data);
      // Storing the data into our state 
    this.setState({data:response.data})
    })
    //this is to catch any errors in the request response process 
    .catch((error) => console.error('Error fetching data:', error));
  }
  

  render() {
    //your normal javascript code Declare a variable
    //const array=[]
    console.log("state.data", this.state.data);
    return (
      //return JSX
      <div>
        {this.state.data.map((eachData, i) => (
          <ol key={i}>
            <li>Name:<b>{eachData.name}</b></li>
            <li>Body:{eachData.body}</li>
          </ol>

        ))}
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Use createRoot for React 18+
root.render(<Example />);