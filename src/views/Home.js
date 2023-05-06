import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const add = () => {
    dispatch({ type: 'increment' })
  }
  const minus = () => {
    dispatch({ type: "decrement" })
  }
  return (
    <>
      <Navbar />
      <div className='container-lg'>
        <h5>Counter: {data.counter}</h5>
        <button disabled={data.isMinusDisabled} onClick={minus} className='btn btn-sm btn-info'>Decrement</button>
        <button onClick={add} className='btn btn-sm mx-2 btn-primary'>Add</button>
      </div>
    </>
  )
}

export default Home