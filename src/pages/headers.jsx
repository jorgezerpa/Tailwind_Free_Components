import React from 'react'
import { headers } from '../components'

const Navbars = () => {
  return (
    <div>
      { headers.map((Header,index)=>(
        <div key={'HeaderList'+index}>
          <Header  />
        </div>
      ))}
    </div>
  )
}

export default Navbars