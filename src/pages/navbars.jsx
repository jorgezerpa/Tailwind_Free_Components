import React from 'react'
import { navbars } from '../components'
import { TemplateLayout } from '../Layouts/TemplateLayout'

const Navbars = () => {
  return (
    <div>
      { navbars.map((Navbar,index)=>(
        <div key={'NavbarsList'+index}>
          <TemplateLayout>
            <Navbar  />
          </TemplateLayout>
        </div>
      ))}
    </div>
  )
}

export default Navbars