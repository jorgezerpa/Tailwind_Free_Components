import React from 'react'
import { pricing } from '../components/pricing'
import { TemplateLayout } from '../Layouts/TemplateLayout'

const Pricing = () => {
  return (
    <div className='bg-white pt-20'>
      <h2 className='font-bold mb-10 text-5xl sm:text-6xl text-center text-gray-900'>Pricing Cards</h2>
      { pricing.map((Pricing,index)=>(
        <div key={'HeaderList'+index}>
          <TemplateLayout code={Pricing.textCode} >
            <Pricing.Component />
          </TemplateLayout>
        </div>
      ))}
    </div>
  )
}

export default Pricing