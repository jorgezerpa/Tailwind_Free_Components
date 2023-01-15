import React from 'react'
import { navbars } from '../components'

const Headers = () => {
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

export default Headers