import React from 'react'
import { headers } from '../components/headers'
import { TemplateLayout } from '../Layouts/TemplateLayout'

const Navbars = () => {
  return (
    <div className='bg-white pt-20'>
      <h2 className='font-bold mb-10 text-5xl sm:text-6xl text-center text-gray-900'>Headers</h2>
      { headers.map((Header,index)=>(
        <div key={'HeaderList'+index}>
          <TemplateLayout code={Header.textCode}>
            <Header.component  />
          </TemplateLayout>
        </div>
      ))}
    </div>
  )
}

export default Navbars