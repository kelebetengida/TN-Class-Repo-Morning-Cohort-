import React from "react"
import ReactDOM from "react-dom"

// function introduction(firstName, lastName, age) {
//   return `Hello! My name is ${firstName} ${lastName} and I am ${age} years old.`
// }
// introduction("Scott", "Lewis", 43);

// const data = {
//   firstName: "Scott",
//   lastName: "lewis",
//   age: 43
// }

// const name=["kevin", "scott", "Chris", "Michale", "kelebet"]
// //breaking down something, the array data 

// const [first, secound, third, fourth, fifth]=name

// console.log(third)//"chris"
// console.log(first)//"kevin"

const introstyle={
  backgroundColor:"yellow",

}
const StudentIntroduction = ({firstName, lastName, age, myComment, myStatement, statment, missionStatement}) => {
  return (
    <div style={introstyle}>
      <h2>Hello! My name is {firstName} {lastName} and I am {age} years old.</h2>
      <h4>{missionStatement} {statment}</h4>
      <h4>{myStatement}{myComment}</h4>
    </div>
  );
}

const OfferedSkills = ({skillsList}) => {
  const formatedSkills=skillsList.map((skill, i)=><li key={i}>{skill}</li>);
    return(
        <div>
          <h2>The skills offered in this class are:</h2>
          <ol>
            {formatedSkills}
          </ol>
        </div>
    )
}

const ClassInfo = () => {
  let skills = ["HTML", "CSS", "JavaScript", "React", "PhotoShop", "InDesign", "Python", "Illustrator", "Premiere Pro", "After Effects"]
  let persevereMission="Persevere Now's mission is to help people who have been incarcerated gain the skills and support they need to reenter society and break the cycle of poverty and incarceration"
  let commitment="I am commited to the 6 months of peresevere coding"
  return (
    <div>
      <h1>Welcome to React</h1>
      <StudentIntroduction firstName="Scott" lastName="Lewis" age={43} missionStatement ="I believe in " statment={persevereMission} myStatement= "Also," myComment={commitment} />
      
      <StudentIntroduction firstName="Michael" lastName="Mahone" age={47} missionStatement = "I fully endorse this statement: statement" statment = {persevereMission} personalStatement = "Additionally, " myComment = {commitment}/>
      
      <StudentIntroduction firstName="Kevin" lastName="Daniels" age={50} missionStatement= "I believe in the Persevere mission statement"statment={persevereMission} myStatement="As well,"myComment={commitment} />
    
      <OfferedSkills skillsList={skills}/>
      </div>
  )
}

const root = document.getElementById("root")
ReactDOM.render(<ClassInfo/>, root)