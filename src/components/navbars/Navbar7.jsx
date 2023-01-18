import React, { useState } from 'react'

const items = [
    { linkTo:'/', id:'item1', label:'home', subItems:['item1','item2','item3'] },
    { linkTo:'/', id:'item2', label:'about', subItems:['item1','item2','item3'] },
    { linkTo:'/', id:'item3', label:'pricing' },
    { linkTo:'/', id:'item4', label:'contact', subItems:['item1','item2','item3'] },
]

export const Navbar7 = () => {
    const [showSubmenus, setShowSubmenus] = useState(false)

    const handleMouseOver = (item) => setShowSubmenus(item)
    const handleMouseLeave = () => setShowSubmenus(false)

  return (
    <div className='px-4 py-2'>
        <div className='flex justify-between items-center bg-gradient-to-br from-blue-500 to-blue-800 rounded-3xl px-5 py-2 shadow-md shadow-black'>
            {/* logo  */}
            <div className='font-bold text-xl sm:text-2xl text-white'>
                Logo
            </div>
            {/* menu desktop */}
            <div className='hidden sm:flex'>
                <ul className='flex justify-center gap-2 text-white'>
                    { items.map((item, index)=>(
                        <li onMouseOver={()=>handleMouseOver(item.id)} onMouseLeave={handleMouseLeave} key={'header1'+ index} className='relative text-lg hover:font-semibold hover:border-b-2'>
                            {item.label}
                            <div>
                                <ul className={`${!item.subItems && 'hidden'} ${showSubmenus===item.id?'block':'hidden'} absolute top-full right-0 pt-4`}>
                                    <div className='bg-gradient-to-br from-blue-500 to-blue-800 p-4 rounded-xl shadow-md shadow-black'>
                                        { item.subItems && item.subItems.map((subItem, index)=>(
                                            <li key={'navbar6subitem'+index}  >{subItem}</li>
                                        ))}
                                    </div>
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* menu mobile  */}
            <div className='flex sm:hidden justify-center gap-2 text-white'>
                <div className='z-50'>
                    <svg width='30' height='30' viewBox='0 0 221 172' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='221' height='46' rx='23' fill='white'/><rect y='63' width='221' height='46' rx='23' fill='white'/><rect y='126' width='221' height='46' rx='23' fill='white'/></svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export const Navbar7String = 
"import React, { useState } from 'react' \n \
 \n \
const items = [ \n \
    { linkTo:'/', id:'item1', label:'home', subItems:['item1','item2','item3'] }, \n \
    { linkTo:'/', id:'item2', label:'about', subItems:['item1','item2','item3'] }, \n \
    { linkTo:'/', id:'item3', label:'pricing' }, \n \
    { linkTo:'/', id:'item4', label:'contact', subItems:['item1','item2','item3'] }, \n \
] \n \
 \n \
export const Navbar7 = () => { \n \
    const [showSubmenus, setShowSubmenus] = useState(false) \n \
 \n \
    const handleMouseOver = (item) => setShowSubmenus(item) \n \
    const handleMouseLeave = () => setShowSubmenus(false) \n \
 \n \
  return ( \n \
    <div className='px-4 py-2'> \n \
        <div className='flex justify-between items-center bg-gradient-to-br from-blue-500 to-blue-800 rounded-3xl px-5 py-2 shadow-md shadow-black'> \n \
            {/* logo  */} \n \
            <div className='font-bold text-xl sm:text-2xl text-white'> \n \
                Logo \n \
            </div> \n \
            {/* menu desktop */} \n \
            <div className='hidden sm:flex'> \n \
                <ul className='flex justify-center gap-2 text-white'> \n \
                    { items.map((item, index)=>( \n \
                        <li onMouseOver={()=>handleMouseOver(item.id)} onMouseLeave={handleMouseLeave} key={'header1'+ index} className='relative text-lg hover:font-semibold hover:border-b-2'> \n \
                            {item.label} \n \
                            <div> \n \
                                <ul className={`${!item.subItems && 'hidden'} ${showSubmenus===item.id?'block':'hidden'} absolute top-full right-0 pt-4`}> \n \
                                    <div className='bg-gradient-to-br from-blue-500 to-blue-800 p-4 rounded-xl shadow-md shadow-black'> \n \
                                        { item.subItems && item.subItems.map((subItem, index)=>( \n \
                                            <li key={'navbar6subitem'+index}  >{subItem}</li> \n \
                                        ))} \n \
                                    </div> \n \
                                </ul> \n \
                            </div> \n \
                        </li> \n \
                    ))} \n \
                </ul> \n \
            </div> \n \
            {/* menu mobile  */} \n \
            <div className='flex sm:hidden justify-center gap-2 text-white'> \n \
                <div className='z-50'> \n \
                    <svg width='30' height='30' viewBox='0 0 221 172' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='221' height='46' rx='23' fill='white'/><rect y='63' width='221' height='46' rx='23' fill='white'/><rect y='126' width='221' height='46' rx='23' fill='white'/></svg> \n \
                </div> \n \
            </div> \n \
        </div> \n \
    </div> \n \
  ) \n \
} \n \
"