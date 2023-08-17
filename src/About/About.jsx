import React from 'react'
import { useSelector } from 'react-redux'

function About() {
  const selector = useSelector((state)=> state.Shop)
  console.log(selector);
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default About