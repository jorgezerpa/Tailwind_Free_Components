import React, { useState } from 'react' 
  
 const items = [ 
     { linkTo:'/',label:'home' }, 
     { linkTo:'/',label:'about' }, 
     { linkTo:'/',label:'pricing' }, 
     { linkTo:'/',label:'contact' }, 
 ] 
  
 export const Navbar8 = () => { 
     const [currentPage, setCurrentPage] = useState('home') 
  
     const handleClick = (value) => setCurrentPage(value) 
  
   return ( 
     <div className='px-4 py-2'> 
         <div className='flex justify-between items-center bg-gradient-to-br from-blue-500 to-blue-800 rounded-3xl px-5 py-2 shadow-md shadow-black'> 
             {/* logo  */} 
             <div className='font-bold text-xl sm:text-2xl text-white'> 
                 Logo 
             </div> 
             {/* menu desktop */} 
             <div className='hidden sm:flex'> 
                 <ul className='flex justify-center gap-2 text-white items-center'> 
                     { items.map((item, index)=>( 
                         <li key={'header1'+ index} onClick={()=>handleClick(item.label)} className={`${currentPage===item.label && 'bg-white py-1 px-2 rounded-xl font-bold text-black'} text-lg hover:font-semibold hover:border-b-2`}>{item.label}</li> 
                     ))} 
                 </ul> 
             </div> 
             {/* menu mobile  */} 
             <div className='flex sm:hidden justify-center gap-2 text-white'> 
                 <div className='z-50'> 
                     <svg width='30' height='30' viewBox='0 0 221 172' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='221' height='46' rx='23' fill='white'/><rect y='63' width='221' height='46' rx='23' fill='white'/><rect y='126' width='221' height='46' rx='23' fill='white'/></svg> 
                 </div> 
             </div> 
             {/* actions desktop */} 
             <div className='justify-center gap-6 hidden sm:flex'> 
                 <button className='px-3 py-2 font-bold bg-white rounded-xl hover:scale-95 hover:shadow-md hover:shadow-gray-900'>log In</button> 
                 <button className='font-bold text-white hover:border-b-2 border-white'>sign Up</button> 
             </div> 
             {/* actions Mobile */} 
             <div className='justify-center gap-6 sm:hidden flex'> 
                 <button className='font-bold text-white hover:border-b-2 border-white'>sign In</button> 
             </div> 
         </div> 
     </div> 
   ) 
 } 
 
export const Navbar8String =  
"import React, { useState } from 'react' \n \
 \n \
const items = [ \n \
    { linkTo:'/',label:'home' }, \n \
    { linkTo:'/',label:'about' }, \n \
    { linkTo:'/',label:'pricing' }, \n \
    { linkTo:'/',label:'contact' }, \n \
] \n \
 \n \
export const Navbar8 = () => { \n \
    const [currentPage, setCurrentPage] = useState('home') \n \
 \n \
    const handleClick = (value) => setCurrentPage(value) \n \
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
                <ul className='flex justify-center gap-2 text-white items-center'> \n \
                    { items.map((item, index)=>( \n \
                        <li key={'header1'+ index} onClick={()=>handleClick(item.label)} className={`${currentPage===item.label && 'bg-white py-1 px-2 rounded-xl font-bold text-black'} text-lg hover:font-semibold hover:border-b-2`}>{item.label}</li> \n \
                    ))} \n \
                </ul> \n \
            </div> \n \
            {/* menu mobile  */} \n \
            <div className='flex sm:hidden justify-center gap-2 text-white'> \n \
                <div className='z-50'> \n \
                    <svg width='30' height='30' viewBox='0 0 221 172' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='221' height='46' rx='23' fill='white'/><rect y='63' width='221' height='46' rx='23' fill='white'/><rect y='126' width='221' height='46' rx='23' fill='white'/></svg> \n \
                </div> \n \
            </div> \n \
            {/* actions desktop */} \n \
            <div className='justify-center gap-6 hidden sm:flex'> \n \
                <button className='px-3 py-2 font-bold bg-white rounded-xl hover:scale-95 hover:shadow-md hover:shadow-gray-900'>log In</button> \n \
                <button className='font-bold text-white hover:border-b-2 border-white'>sign Up</button> \n \
            </div> \n \
            {/* actions Mobile */} \n \
            <div className='justify-center gap-6 sm:hidden flex'> \n \
                <button className='font-bold text-white hover:border-b-2 border-white'>sign In</button> \n \
            </div> \n \
        </div> \n \
    </div> \n \
  ) \n \
} \n \
"