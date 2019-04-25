import React from "react"
import Ninja from "./Ninja"

const Ninjas = props => {
  
  const { ninjas } = props

  const ninjasList = (
    <ul>
      { 
        ninjas
          .map((ninja, i) => (
            <li key={i}> 
              <Ninja ninja={ninja} /> 
            </li>
          )) 
      }
    </ul>
  )

  const olderNinjas = (
    <ul>
      { 
        ninjas
          .filter(ninja => ninja.age > 25)
          .map((ninja, i) => (
            <li key={i}>
              <Ninja ninja={ninja} />
            </li>
          ))
      }
    </ul>
  )

  const youngerNinjas = (
    <ul>
      {
        ninjas
          .filter(ninja => ninja.age <= 25)
          .map((ninja, i) => (
            <li key={i}>
              <Ninja ninja={ninja} />
            </li>    
          ))
      }
    </ul>
  )

  return (
    <div className="ninjas-component">
      <h1 className="title is-1">Ninjas</h1>
      <br/>

      <h2 className="subtitle is-3">All Ninjas</h2>
      {ninjas.length > 0 && ninjasList}
      <br/>
      
      <h2 className="subtitle is-3">Older Ninjas</h2>
      {ninjas.some(ninja => ninja.age > 25) && olderNinjas}
      <br/>

      <h2 className="subtitle is-3">Younger Ninjas</h2>
      {ninjas.some(ninja => ninja.age <= 25) && youngerNinjas}
    </div>
  )
}

export default Ninjas
