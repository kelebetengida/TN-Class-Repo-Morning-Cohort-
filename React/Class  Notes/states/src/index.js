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
  //Defining the initial state with an array of images(a way to store them) and the beginning  index o  
  state = {
    images: [FirstImage, SecondImage, ThirdImage, FourthImage],
    //index      0            1            2            3 
    //length     1            2            3            4
    currentIndex: 0,
  };
  //Establishes a function that will allow you to move forward through each index of the images array
  nextImage = () => {
    //a function is assigned to nextImage
    this.setSate((prevState) => ({
      //using the setState method and assigning a parameter called prevState 
      currentIndex: (prevState.currentIndex + 1)
    }));
    //allows you to update the prevState by increasing the index of the images array by one, then assinging it to the value of the currentIndex
  };
  // This is a method to go to the previous image in the array.
  prevImage = () => {
    this.setState((prevState) => ({
      currentIndex:
        // Checks if the currentIndex is 0, which means the first image is currently displayed.
        prevState.currentIndex === 0
          // If the current index is 0, we set currentIndex to prevState.images.length - 1 which is the last image in the array. That way you can go from the first image to the last image instead of to position -1, which doesnt exist.
          ? prevState.images.length - 1
          // If currentIndex is not 0, we just decrement currentIndex by 1, which moves to the previous image in the array.
          : prevState.currentIndex - 1,
    }));
  }

  // Render...renders everything that we instruct it to render and allows it to be accesible to other components. 
  render() {
    return (
      // allows you to return the following below:
      <div style={{ textAlign: "center" }}>
        {/*  styles the text within the center of the container */}
        <h2 >Image Gallery</h2>
        {/*creates a header for the content */}
        <div>
          <button onClick={this.prevImage}>Previous Image</button>
          {/*creates a button, that triggers the function assinged to prevImage.  Each time the button is clicked, the images array will move backwards through the array*/}

          {/* This is an image element */}
          <img
            // This expression accesses the image path or url at the currentIndex position in the images array. this.state.images refers to the images array stored in the components state, this array contains the images paths or urls.
            src={this.state.images[this.state.currentIndex]}
            // this is alternative text for the image that appears if the image fails to load.
            alt={`Image ${this.state.currentIndex + 1}`}
            //this is to style the image element.
            style={{ width: "300px", height: "auto", margin: "0 10px" }}>
          </img>
          {/* This the button used to go to the next image, it uses an onclick listener to trigger the nextImage method using this.nextImage when the user clicks. */}
          <button onClick={this.nextImage}>Next Image</button>

        </div>
      </div>);
  }

}



class Condition extends React.Component {
  state={
    login:true
  }
  render() {
    return (
      <div>
         { this.state.login === true ? <Count/> :<Images/>}
      </div>
    )
  }
}


const App = () => {
  return (<div>
    <Condition />
  </div>
  );
};




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
