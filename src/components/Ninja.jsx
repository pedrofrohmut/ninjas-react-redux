import React from 'react'

const Ninja = ({ ninja, onDeleteNinja }) => (
  <>
    <strong>Id:</strong> {ninja.id} {" - "}
    <strong>Name:</strong> {ninja.name} {" - "}
    <strong>Age:</strong> {ninja.age} {" - "}
    <strong>Belt:</strong> {ninja.belt} {" "}
    <button className="button is-danger is-inverted" onClick={() => onDeleteNinja(ninja.id)}>Delete</button>
  </>
)

export default Ninja
