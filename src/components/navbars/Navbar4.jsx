import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string';

const items = [
    { linkTo:'/',label:'home' },
    { linkTo:'/',label:'about' },
    { linkTo:'/',label:'pricing' },
    { linkTo:'/',label:'contact' },
]

export const Navbar4 = () => {
  return (
    <div className='px-4 py-2'>
        <div className='flex justify-between items-center bg-gradient-to-br from-blue-500 to-blue-800 rounded-3xl px-5 sm:px-20 py-2 shadow-md shadow-black'>
            {/* logo  */}
            <div className='font-bold text-xl sm:text-2xl text-white'>
                Logo
            </div>
                       {/* menu desktop */}
            <div className='hidden sm:block'>
                <ul className='flex justify-center gap-2 text-white'>
                    { items.map((item, index)=>(
                        <li key={'header1'+ index} className='text-lg hover:font-semibold hover:border-b-2'>{item.label}</li>
                    ))}
                </ul>
            </div>
                        {/* menu mobile  */}
            <div className='flex sm:hidden justify-center gap-2 text-white'>
                <div className='z-50'>
                    <svg width="30" height="30" viewBox="0 0 221 172" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="221" height="46" rx="23" fill="white"/><rect y="63" width="221" height="46" rx="23" fill="white"/><rect y="126" width="221" height="46" rx="23" fill="white"/></svg>
                </div>
            </div> 
        </div>
    </div>
  )
}

export const Navbar4String = 
`import React from 'react'

const items = [
    { linkTo:'/',label:'home' },
    { linkTo:'/',label:'about' },
    { linkTo:'/',label:'pricing' },
    { linkTo:'/',label:'contact' },
]

export const Navbar4 = () => {
  return (
    <div className='px-4 py-2'>
        <div className='flex justify-between items-center bg-gradient-to-br from-blue-500 to-blue-800 rounded-3xl px-5 sm:px-20 py-2 shadow-md shadow-black'>
            {/* logo  */}
            <div className='font-bold text-xl sm:text-2xl text-white'>
                Logo
            </div>
                       {/* menu desktop */}
            <div className='hidden sm:block'>
                <ul className='flex justify-center gap-2 text-white'>
                    { items.map((item, index)=>(
                        <li key={'header1'+ index} className='text-lg hover:font-semibold hover:border-b-2'>{item.label}</li>
                    ))}
                </ul>
            </div>
                        {/* menu mobile  */}
            <div className='flex sm:hidden justify-center gap-2 text-white'>
                <div className='z-50'>
                    <svg width="30" height="30" viewBox="0 0 221 172" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="221" height="46" rx="23" fill="white"/><rect y="63" width="221" height="46" rx="23" fill="white"/><rect y="126" width="221" height="46" rx="23" fill="white"/></svg>
                </div>
            </div> 
        </div>
    </div>
  )
}`