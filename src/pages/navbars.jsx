import React from 'react'
import { navbars } from '../components'

const Navbars = () => {
  return (
    <div>
      { navbars.map((Navbar,index)=>(
        <div key={'NavbarsList'+index}>
          <Navbar  />
        </div>
      ))}
    </div>
  )
}

export default Navbars