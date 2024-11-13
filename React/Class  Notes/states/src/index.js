import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstImage from "./images/image-1.png"
import SecondImage from "./images/image-2.png"
import ThirdImage from "./images/image-3.png"
import FourthImage from "./images/image-4.png"


class Count extends React.Component {
  state = {
    count: 0
  }
  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }
  multiply = () => {
    this.setState({ count: this.state.count * this.state.count })
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.addOne}>add one</button>
        <button onClick={this.minusOne}>Decrement</button>
        <button onClick={this.multiply}>Multiply</button>
      </div>
    )

  }
}

class Images extends React.Component {

  state = {
    images =[FirstImage, SecondImage, ThirdImage, FourthImage]
  };

  addImage = (newImage) => {
    this.setState((prevState) => ({
      images: [...prevState.images, newImage],
    }));
  };
  render() {
    return (
    <div>
      {{
        this.state.images.map((image, index) => (
          <img
            key={index}
            src={image}
          />
        ))
      }}
    </div>
 ) }
}



const App = () => {
  return (<div>
    <Count />
    <Images />
  </div>
  );
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
