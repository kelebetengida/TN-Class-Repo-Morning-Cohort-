import React from "react"
import ReactDOM from "react-dom"


class App extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    country: ""
  }
  handlechange = (e) => {

    const { name, value } = e.target
    // const value = e.target.value
    this.setState({ [name]: value })

  }
  render() {
    return (
      <div>
        <form>
          <div id="firstname-input">
            <label>First Name</label>
            <input id="firstname" type="text" name="firstname " value={this.state.firstname} onChange={this.handlechange} placeholder="First Name" required />
          </div>
          <div id="lastname-input">
            <label>Last Name</label>
            <input id="lastname" type="text" name="lastname" value={this.state.lastname} onChange={this.handlechange} placeholder="Last Name" required />
          </div>
          <div id="email-input">
            <label>Email</label>
            <input id="email" type="text" name="email" value={this.state.email} onChange={this.handlechange} placeholder="Email" required />
            <h1>{this.state.email}</h1>
          </div>
          <div id="tel-input">
            <label>Telephone</label>
            <input id="phone" type="tel" name="tel" value={this.state.tel} pattern ="" onChange={this.handlechange} placeholder="Telephone Number" required />
            <h1>{this.state.tel}</h1>
          </div>
          <div id="country-input">
            <label>Country</label>
            <input id="country" type="text" name="country" value={this.state.country} onChange={this.handlechange} placeholder="Country" required />
          </div>
        </form >
      </div >
    )
  }
}







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
