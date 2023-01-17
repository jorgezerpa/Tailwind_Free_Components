import React from 'react'
import { pricing } from '../components'

const Pricing = () => {
  return (
    <div>
      { pricing.map((Header,index)=>(
        <div key={'HeaderList'+index}>
          <Header  />
        </div>
      ))}
    </div>
  )
}

export default Pricing