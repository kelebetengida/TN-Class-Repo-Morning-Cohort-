/////////////////////////////////////Hooks//////////////////////////////////
//Definition of hooks: Hooks are a function that allow you to use state and other lifecycle methods without having to use class components. 
//basic hooks
//useState()-it helps us manage state in functional component
//useEffect()=its helps us manage sideeffects (data fetching (Api calls), DOM manuplations )
//useContext()
import React, { useState } from "react"
import ReactDOM from "react-dom/client"

// //intial data
// const numbers=[3,"kelebet",3,4]
// //destructured data 
// const [a, b, c, four] = numbers

// const Count = () => {
//     const [count, setCount] = useState(0);

//     const increment = () => setCount(count + 1);
//     const decrement = () => setCount(count - 1);
//   return(
//     <>
//     <h1>Count: {count}</h1>
//     <button onClick={increment}>Add one</button>
//     <button onClick = {decrement}>Minus one</button>
//     </>
//   );
// };




const App = () => {
  const intialValue = {
    firstName: "",
    lastName: ""
  }

  const [formData, setFormData] = useState(intialValue)

  const handleChange = (e) => {
    const [name, value] = e.target
    setFormData({ ...formData, [name]: value })
  }
  return (
    <>
      <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="firstname" />
        </div>
        {/* <h1>{formData.firstName}</h1> */}
        <div>
          <label>Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="lastName" />
        </div>
        {/* <h1>{formData.lastName}</h1> */}
      </form>
    </>
  )
}


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Use createRoot for React 18+
root.render(<App />);
