import React, { Component } from "react"
import Ninjas from "./components/Ninjas"
import Navbar from "./components/Navbar"
import AddNinja from "./components/AddNinja"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ninjas: [
        { id: 1, name: "Ryu", age: 30, belt: "Black" },
        { id: 2, name: "Yoshi", age: 25, belt: "Red" },
        { id: 3, name: "Mario", age: 35, belt: "Green" },
        { id: 4, name: "Crystal", age: 20, belt: "Pink" }
      ]
    }
    this.handleAddNinja = this.handleAddNinja.bind(this)
    this.handleDeleteNinja = this.handleDeleteNinja.bind(this)
  }

  handleAddNinja(newNinja) {
    this.setState({
      ninjas: [...this.state.ninjas, newNinja]
    })
  }

  handleDeleteNinja(id) {
    this.setState({
      ninjas: this.state.ninjas.filter(n => n.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container my-5">
          <AddNinja onAddNinja={this.handleAddNinja} />
          <hr/>
          <Ninjas ninjas={this.state.ninjas} onDeleteNinja={this.handleDeleteNinja} />
        </div>
      </div>
    )
  }
}

export default App
