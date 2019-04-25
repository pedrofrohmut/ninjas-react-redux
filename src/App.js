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
  }

  handleAddNinja(newNinja) {
    this.setState({
      ninjas: [...this.state.ninjas, newNinja]
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <section className="section">
          <div className="container">
            <AddNinja onAddNinja={this.handleAddNinja} />
            <hr/>
            <Ninjas ninjas={this.state.ninjas} />
          </div>
        </section>
      </div>
    )
  }
}

export default App
