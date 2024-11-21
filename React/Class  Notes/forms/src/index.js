import React from "react"
import ReactDOM from "react-dom/client"

const option = [{
  value: "",
  label: "Input country here"
},
{
  value: "USA",
  label: "USA"
},

{
  value: "England",
  label: "England"
},

{
  value: "Canada",
  label: "Canada"
},
{
  value: "India",
  label: "India"
},

{
  value: "Africa",
  label: "Africa"
},
{
  value: "Japan",
  label: "Japan"
}]


const selectCountry = option.map(({ value, label,i}) => (<option value={value}key={i}>{label}</option>))
class App extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    country: "",
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    }
  }
  handlechange = (e) => {
    const { name, value, type, checked } = e.target
    // Checkbox Code and File Upload
    if (type === "checkbox") {
      this.setState(({
        skills: {
          ...this.state.skills,
          [name]: checked,
        },
      }));
    } else if (type === "file") {
      this.setState({ file: e.target.files[0] });
    } else {
      // const value = e.target.value
      this.setState({ [name]: value })
    }
  }



  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div id="firstname-input">
            <label>First Name</label>
            <input id="firstname" type="text" name="firstname" value={this.state.firstname} onChange={this.handlechange} placeholder="First Name" required />
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
            <input id="phone" type="tel" name="tel" pattern = "\s\(\d{3}\)\s\d{3}-\d{4}" value={this.state.tel}  onChange={this.handlechange} placeholder="(xxx) xxx-xxxx" required />
            <h1>{this.state.tel}</h1>
          </div>
          <div className="mb-3" id="country-input">
            <label htmlFor="country" className="form-label">Select Country</label>
            <select
              id="country"
              name="country"
              className="form-select"
              onChange={this.handleChange}
              required
            >
              {selectCountry}
            </select>
          </div>
          <div id="dateOfBirth-input">
            <label>Date of Birth</label>
            <input id="dateOfBirth" type="date" value={this.state.dateOfBirth} onChange={this.handlechange} placeholder="" required />
          </div>
          {/* Favorite Color */}
          <div id="favoriteColor-input">
            <label htmlFor="favoriteColor">Your favorite color</label>
            <input
              type="color"
              id="favoriteColor"
              name="favoriteColor"
              value={this.state.favoriteColor}
              onChange={this.handleChange}
            />
            <h1>{this.state.favoriteColor}</h1>
          </div>
          <div id="weight-input">
            <label>Weight</label>
            <input id="weight" type="number" value={this.state.weight} onChange={this.handlechange} placeholder="Weigth (lbs)" required />
          </div>
          {/* Gender */}
          <div id="gender-input">
            <label>Gender</label>
            <div>
              {["Female", "Male", "Other"].map((gender, i) => (
                <div key={gender}>
                  <input
                    type="radio"
                    id={gender}
                    name="gender"
                    value={gender}
                    onChange={this.handleChange}
                    checked={this.state.gender === gender}
                  />
                  <label htmlFor={gender} key={i}>
                    {gender}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* File */}
          <div id="file-input">
            <label>File</label>
            <input id="file" type="file" onchange={this.handleChange} placeholder="Upload a file" />
          </div>
          {/* Skills */}
          <div id="skills-input">
            <label>What are your Skills?</label>
            <div>
              {Object.keys(this.state.skills).map((skill) => (
                <div key={skill}>
                  <input
                    type="checkbox"
                    id={skill}
                    name={skill}
                    checked={this.state.skills[skill]}
                    onChange={this.handleChange}
                  />
                  <label htmlFor={skill}>
                    {skill.toUpperCase()}
                  </label>
                </div>
              ))}
            </div>
            {/* File Upload */}
            <div id="file-upload">
              <label htmlFor="file">Upload File</label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={this.handleChange}
              />
            </div>
            {/* Bio */}
            <div id="bio-input">
              <label htmlFor="bio">Enter your bio</label>
              <textarea
                id="bio"
                name="bio"
                rows="3"
                value={this.state.bio}
                onChange={this.handleChange}
                placeholder="Enter a short bio here..."
              />
            </div>
          </div>
          {/* Submit */}
          <button type="submit">Submit</button>
        </form >
      </div>
    )
  }
}







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
