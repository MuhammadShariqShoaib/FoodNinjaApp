import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'

export default function Interface() {
  return (
    <div className="grid grid-cols-3" >
       <div  className="col-span-1">
      <Navbar/>
      </div>
      <div className="col-span-2">
      <Menu/>
      </div>
    </div>
  )
}
