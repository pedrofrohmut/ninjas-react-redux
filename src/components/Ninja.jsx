import React from 'react'

const Ninja = ({ ninja }) => (
  <>
    <strong>Id:</strong> {ninja.id} {" - "}
    <strong>Name:</strong> {ninja.name} {" - "}
    <strong>Age:</strong> {ninja.age} {" - "}
    <strong>Belt:</strong> {ninja.belt}
  </>
)

export default Ninja
