import React from 'react'
import { navbars } from '../components/navbars'
import { TemplateLayout } from '../Layouts/TemplateLayout'

const Navbars = () => {
  return (
    <div className='bg-white pt-20'>
      <h2 className='font-bold mb-10 text-5xl sm:text-6xl text-center text-gray-900'>Navbars</h2>
      { navbars.map((Navbar,index)=>(
        <div key={'NavbarsList'+index}>
          <TemplateLayout code={ Navbar.textCode }>
            <Navbar.Component  />
          </TemplateLayout>
        </div>
      ))}
    </div>
  )
}

export default Navbars