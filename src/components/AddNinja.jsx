import React, { Component } from 'react'

class AddNinja extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: "",
      belt: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}> 
          <div className="field">
            <label htmlFor="name" className="label">Name</label>
            <div className="control">
              <input type="text" name="name" className="input" onChange={this.handleChange} placeholder="Name" autoFocus/>
            </div>
          </div>

          <div className="field">
            <label htmlFor="age" className="label">Age</label>
            <div className="control">
              <input type="number" name="age" className="input" onChange={this.handleChange} placeholder="Age"/>
            </div>
          </div>

          <div className="field">
            <label htmlFor="belt" className="label">Belt</label>
            <div className="control">
              <input type="text" name="belt" className="input" onChange={this.handleChange} placeholder="Belt Color"/>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
        </form>
      </>
    )
  } // render

  handleChange(e) {
    const inputName = e.target.name
    const inputValue = e.target.type === "checkbox" ? true : e.target.value
    this.setState({
      [inputName]: inputValue
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, age, belt } = this.state
    const newNinja = { name, age, belt }
    this.props.onAddNinja(newNinja)
  }
}

export default AddNinja
