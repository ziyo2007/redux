import React from 'react'
import { useDispatch } from 'react-redux'

function Home() {
  const dispatch = useDispatch()
  function add (e){
    e.preventDefault()
    dispatch({type: e.target.type.value, payload: e.target.payload.value})
  }
  return (
    <div>
      <h1>Home</h1>\
      <form className='form-cantrol' onSubmit={add} action="#">
        <input className='form-cantrol' type="text" placeholder='type' />
        <br />
        <input className='form-cantrol' type="text" placeholder='payload' name='payload' />
        <br />
        <button className='btn' type='submit'>add</button>
      </form>
    </div>
  )
}

export default Home