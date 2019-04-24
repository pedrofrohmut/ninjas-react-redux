import React, { Component } from "react"
import Ninjas from "./components/Ninjas"
import Navbar from "./components/Navbar"

class App extends Component  {
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
  }

  render() {
    return (
      <div classNameName="App">
        <Navbar />

        <section classNameName="section">
          <div className="container">
              <Ninjas ninjas={this.state.ninjas} />
          </div>
        </section>  
      </div>
    )
  }
}

export default App
