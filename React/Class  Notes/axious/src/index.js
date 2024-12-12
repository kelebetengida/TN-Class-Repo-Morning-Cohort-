import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

class App extends React.Component {
  state = {
    data: [],
  };


  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";

    //this is the post that we will create 
    const postData={
      userId:10,
      title:"Welcome to the 1001th post",
      detail:"Its a post practice "
    }

    axios.post(url, postData).then((response)=>this.setState((prevState)=>({data:[...prevState.data, response.data]}))).catch((err) => {
      console.error("Error fetching data:", err);
    });

    axios.get(url).then((response) => this.setState({ data: response.data })).catch((err) => {
      console.error("Error fetching data:", err);
    });
  }

  render() {
    console.log(this.state.data);

    return (
      <div>
        <h1>This is the posts data from jason Placeholder website</h1>
        {
          this.state.data.map((eachData,i ) => <div key={i}> <h1>This is user {eachData.userId}. This is his {eachData.id}th post.</h1><h2>Title:{eachData.title}</h2><p>Detail:{eachData.body}</p></div>)
        }
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Use createRoot for React 18+
root.render(<App />);
