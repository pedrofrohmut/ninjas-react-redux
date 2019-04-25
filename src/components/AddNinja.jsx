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
      <div className="add-ninja-wrapper row">
        <div className="col-md-6 mx-auto">
          <h1>Add Ninjas</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" className="form-control" onChange={this.handleChange} placeholder="Name"/>
            </div>
            <div className="form-group">
              <label>Age</label>
              <input type="number" name="age" className="form-control" onChange={this.handleChange} placeholder="Age"/>
            </div>
            <div className="form-group">
              <label>Belt</label>
              <input type="text" name="belt" className="form-control" onChange={this.handleChange} placeholder="Belt"/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
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
