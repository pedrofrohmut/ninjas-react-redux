import React from "react"
import Ninja from "./Ninja"

const Ninjas = props => {
  
  const { ninjas } = props

  const getNinja = ninja => (
    <Ninja ninja={ninja} onDeleteNinja={props.onDeleteNinja} />
  )

  const allNinjas = (
    <ul className="list">
      { 
        ninjas
          .map((ninja, i) => (
            <li key={i} className="list-item"> 
              {getNinja(ninja)}
            </li>
          )) 
      }
    </ul>
  )

  const olderNinjas = (
    <ul className="list">
      { 
        ninjas
          .filter(ninja => ninja.age > 25)
          .map((ninja, i) => (
            <li key={i} className="list-item">
              {getNinja(ninja)}
            </li>
          ))
      }
    </ul>
  )

  const youngerNinjas = (
    <ul className="list">
      {
        ninjas
          .filter(ninja => ninja.age <= 25)
          .map((ninja, i) => (
            <li key={i} className="list-item">
              {getNinja(ninja)}
            </li>    
          ))
      }
    </ul>
  )

  return (
    <div className="ninjas-component">
      <h1 className="title is-1">Ninjas</h1>
      <br/>

      {ninjas.length > 0 ? (
        <>
          <h2 className="subtitle is-3">All Ninjas</h2>
          {allNinjas}
        </>
      ) : (
        <h2 className="subtitle is-3">There are no Ninjas to display</h2>
      )}
      <br/>
      
      {ninjas.some(ninja => ninja.age > 25) && (
        <>
          <h2 className="subtitle is-3">Older Ninjas</h2>
          {olderNinjas}
        </>
      )}
      <br/>

      {ninjas.some(ninja => ninja.age <= 25) && (
        <>
          <h2 className="subtitle is-3">Younger Ninjas</h2>
          {youngerNinjas}
        </>
      )}
    </div>
  )
}

export default Ninjas
