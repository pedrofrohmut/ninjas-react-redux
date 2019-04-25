import React from 'react'

const Ninja = ({ ninja, onDeleteNinja }) => (
  <>
    <strong>Id:</strong> {ninja.id} {" - "}
    <strong>Name:</strong> {ninja.name} {" - "}
    <strong>Age:</strong> {ninja.age} {" - "}
    <strong>Belt:</strong> {ninja.belt} {" "}
    <a style={{ cursor: "pointer" }} className="text-danger ml-3" onClick={() => onDeleteNinja(ninja.id)}>Delete</a>
  </>
)

export default Ninja
