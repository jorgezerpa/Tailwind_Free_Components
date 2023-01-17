import React, { useState } from 'react'

export const TemplateLayout = ({ children }) => {
  const [showCodeBlock, setShowCodeBlock] = useState(false)
  return (
    <div className='mb-10'>
        <div className='w-full pb-1 px-10 flex gap-5 justify-end'>
            <p onClick={()=>setShowCodeBlock(!showCodeBlock)} className=''>See Code</p>           
            <p className=''>Copy Code</p>           
        </div>
        <div className={`${!showCodeBlock && 'hidden'} w-full min-h-[400px] bg-purple-600`}>

        </div>
        <div className='relative'>
            { children }             
        </div>
    </div>
  )
}

