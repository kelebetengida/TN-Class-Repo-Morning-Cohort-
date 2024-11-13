import React from 'react';
import ReactDOM from 'react-dom/client';
//class component General Syntax

class StudentIntroduction extends React.Component {
  constructor({ firstStudent, secoundStudent, TA }) {
    super({ firstStudent, secoundStudent, TA })
  }
  render() {
    let age = 78
    return (
      <div>
        <h1>Welcome to React Class</h1>
        <p>These are the participants of this class</p>
        <ol>
          <h4>{firstStudent}</h4>
          <h4>{TA}</h4>
          <h1>{age}</h1>
        </ol>
      </div>
    )
  }
}

//Each student create their class component with their firstname and last name 

class Students extends React.Component {
  constructor({firstName, lastName}) {
  super({firstName, lastName}) 
     
  }
  
  

  render() {
    return (
      <div>
        <h1>I'm a newbie to React</h1>
        <p>I am a participant.  See my name below:</p>
        <ul>
          <h4>{firstName} {lastName}</h4>
        </ul>

      </div>
    )
  }
}

class Scottie extends React.Component {
constructor({firstName, lastName}) {
    super({firstName, lastName})
  }

  render() {
    return (
      <div>
        <h1>Hello, my name is {firstName} {lastName}</h1>
        <h2>I'm currently learning React.js</h2>
      </div>
    );
  }
}



const App = () => {
  let participants = {
    firstStudent: "Scott",
    secoundStudent: "Michale",
    TA: "Chris"
  }
  let thirdStudent = {
    firstName: 'Scott',
    lastName: 'Lewis'
  }
  let secondStudent = {
    firstName: "Michael",
    lastName: "Mahone"
  }
  return (
    <div>
      <StudentIntroduction intro={participants} />
      <Scottie name={thirdStudent} />
      <Students info={secondStudent} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

