// import React from "react";
// import ReactDOM from "react-dom/client"

// //styling for divs
// const containerStyle = {
//   display: "flex",
//   gap: 1,
//   alignItems: "center",
//   justifyContent: "center",
//   flexDirection: "column",
// };

// const box1Style = {
//   backgroundColor: "#518cef",
//   width: 700,
//   height: 50,
//   borderRadius: 3,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   fontFamily: "Arial, sans-Serif",
//   color: "white",
//   borderRadius: 3
// };

// const box2Style = {
//     backgroundColor: "#3b10c4",
//     width: 700,
//     height: 50,
//     borderRadius: 3,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "Arial, sans-Serif",
//     color: "white",
//     borderRadius: 3
// };

// const box3Style = {
//   backgroundColor: "#98edd6",
//   width: 700,
//     height: 50,
//     borderRadius: 3,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "Arial, sans-Serif",
//     color: "white",
//     borderRadius: 3
// };

// const box4Style = {
//   backgroundColor: "#8ee183",
//   width: 700,
//   height: 50,
//   borderRadius: 3,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   fontFamily: "Arial, sans-Serif",
//   color: "white",
//   borderRadius: 3
// };

// const box5Style = {
//   backgroundColor: "#a30dd0",
//   width: 700,
//     height: 50,
//     borderRadius: 3,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "Arial, sans-Serif",
//     color: "white",
//     borderRadius: 3
// };



// //5 React component classes
// class Box1 extends React.Component {
//   render () {
//     return (
//       <div style={containerStyle}>
//         <div style={box1Style}>#518cef</div>
//       </div>
//     );
//   }
// }

// class Box2 extends React.Component {
//   render () {
//     return (
//       <div style = {containerStyle}>
//         <div style = {box2Style}>#3b10c4</div>
//       </div>
//     )
//   }
// }

// class Box3 extends React.Component {
//   render() {
//   return (
//     <div style={containerStyle}>
//       <div style={box3Style}>#9aedd6</div>
//     </div>
//   )
// }
// }

// class Box4 extends React.Component {
//   render() {
//   return (
//     <div style={containerStyle}>
//       <div style={box4Style}>#8ee763</div>
//     </div>
//   )
// }
// }

// class Box5 extends React.Component {
//   render() {
//   return (
//     <div style={containerStyle}>
//       <div style={box5Style}>#a30dd0</div>
//     </div>
//   )
// }
// }


// const App = () => {
//   return (
//     <div>
//       <Box1 />
//       <Box2 />
//       <Box3 />
//       <Box4 />
//       <Box5 />

//     </div>
//   );
// };

// const root = ReactDOM.createRoot (document.getElementById("root"));

// root.render (<App />)

////////////////////////////////////////////////////////////////////////////////////////////////////


// import React from 'react';
// import ReactDOM from 'react-dom/client';


// class ColorBlocks extends React.Component {
//   colors = ['#518cef', '#3b10c4', '#9aede6', '#8ee763', '#a30dd0'];
//   blockStyle = {
//     color: 'white',
//     padding: '20px',
//     margin: '5px',
//     borderRadius: '5px',
//     border: '2px solid #fff',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
//   };
//   render() {
//     return (
//       <div style={{ textAlign: 'center', maxWidth: '80vw', margin: 'auto' }}>
//         <h1>Here are some color bars!</h1>
//         {/* Map over the colors array to create color blocks dynamically */}
//         {this.colors.map((color, index) => (
//           <div key={index} style={{ ...this.blockStyle, backgroundColor: color }}>
//             {color}
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// const App = () => {
//   return (
//     <div>
//       <ColorBlocks />
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <App />
//   </>
// );


////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom/client';


class ColorBlocks extends React.Component {
  render() {

    const blockStyle = {
        color: 'white',
        padding: '20px',
        margin: '5px',
        borderRadius: '5px',
        border: '2px solid #fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    };

    return (

      <div style={{ textAlign: 'center', maxWidth: '80vw', margin: 'auto' }}>
        <h1>Here are some color bars!</h1>
        <div style={{ ...blockStyle, backgroundColor: '#518cef'}}>#518cef</div>
        <div style={{ ...blockStyle, backgroundColor: '#3b10c4'}}>#3b10c4</div>
        <div style={{ ...blockStyle, backgroundColor: '#9aede6'}}>#9aede6</div>
        <div style={{ ...blockStyle, backgroundColor: '#8ee763'}}>#8ee763</div>
        <div style={{ ...blockStyle, backgroundColor: '#a30dd0'}}>#a30dd0</div>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <ColorBlocks />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

