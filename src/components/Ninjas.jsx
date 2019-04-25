import React from "react"
import Ninja from "./Ninja"

const Ninjas = props => {
  
  const { ninjas } = props

  const getNinja = ninja => (
    <Ninja ninja={ninja} onDeleteNinja={props.onDeleteNinja} />
  )

  const allNinjas = (
    <ul className="list-group">
      { 
        ninjas
          .map((ninja, i) => (
            <li key={i} className="list-group-item list-group-item-dark"> 
              {getNinja(ninja)}
            </li>
          )) 
      }
    </ul>
  )

  const olderNinjas = (
    <ul className="list-group">
      { 
        ninjas
          .filter(ninja => ninja.age > 25)
          .map((ninja, i) => (
            <li key={i} className="list-group-item list-group-item-dark">
              {getNinja(ninja)}
            </li>
          ))
      }
    </ul>
  )

  const youngerNinjas = (
    <ul className="list-group">
      {
        ninjas
          .filter(ninja => ninja.age <= 25)
          .map((ninja, i) => (
            <li key={i} className="list-group-item list-group-item-dark">
              {getNinja(ninja)}
            </li>    
          ))
      }
    </ul>
  )

  return (
    <div className="ninjas-component">
      <h1>Ninjas</h1>
      <br/>

      {ninjas.length > 0 ? (
        <>
          <h2>All Ninjas</h2>
          {allNinjas}
        </>
      ) : (
        <h2>There are no Ninjas to display</h2>
      )}
      <br/>
      
      {ninjas.some(ninja => ninja.age > 25) && (
        <>
          <h2>Older Ninjas</h2>
          {olderNinjas}
        </>
      )}
      <br/>

      {ninjas.some(ninja => ninja.age <= 25) && (
        <>
          <h2>Younger Ninjas</h2>
          {youngerNinjas}
        </>
      )}
    </div>
  )
}

export default Ninjas
