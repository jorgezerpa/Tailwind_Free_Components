import React, { useState } from 'react' 
import { useRouter } from 'next/router'

 const items = [ 
     { linkTo:'/', id:'item1', label:'home' }, 
     { linkTo:'/', id:'item2', label:'components', subItems:['navbars', 'headers','pricing'] }, 
     { linkTo:'/', id:'item3', label:'github' }, 
 ] 
  
 export const Navbar = () => { 
    const router = useRouter()
     const [showSubmenus, setShowSubmenus] = useState(false) 
     const [showMenu, setShowMenu] = useState(false)
  
     const handleMouseOver = (item) => setShowSubmenus(item) 
     const handleMouseLeave = () => setShowSubmenus(false) 
     const handleMobileClick = (item) => {
         if(item.subItems){
             setShowSubmenus(!showSubmenus)
        } else {
            setShowMenu(false)
            router.push(item.linkTo); 
        }
     }
     console.log(showSubmenus)
  
   return ( 
     <div className='px-4 sm:px-20 py-10 z-50 absolute w-full'> 
     {/* bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-300 rounded-3xl px-5 py-2 shadow-md shadow-white */}
         <div className={`flex justify-between items-center ${ router.pathname==='/' ? 'text-white' : 'text-gray-900' } font-bold`}> 
             {/* logo  */} 
             <div className='font-bold text-xl sm:text-2xl'> 
                 Logo 
             </div> 
             {/* menu desktop */} 
             <div className='hidden sm:flex'> 
                 <ul className='flex justify-center gap-2'> 
                     { items.map((item, index)=>( 
                         <li onClick={()=>router.push(item.linkTo)} onMouseOver={()=>handleMouseOver(item.id)} onMouseLeave={handleMouseLeave} key={'header1'+ index} className='relative text-lg hover:font-semibold hover:border-b-2'> 
                             {item.label} 
                             <div> 
                                 <ul className={`${!item.subItems && 'hidden'} ${showSubmenus===item.id?'block':'hidden'} absolute top-full right-0 pt-4`}> 
                                     <div className={`${ router.pathname==='/' ? 'bg-gradient-to-br from-blue-500 to-blue-800' : 'bg-white text-black' } p-4 rounded-xl shadow-md shadow-black`}> 
                                         { item.subItems && item.subItems.map((subItem, index)=>( 
                                             <li onClick={()=>router.push(`/${subItem}`)} key={'navbar6subitem'+index}  >{subItem}</li> 
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
                 <div className='z-50' onClick={()=>setShowMenu(!showMenu)}> 
                    { router.pathname==='/' 
                        ? <svg width='30' height='30' viewBox='0 0 221 172' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='221' height='46' rx='23' fill='white'/><rect y='63' width='221' height='46' rx='23' fill='white'/><rect y='126' width='221' height='46' rx='23' fill='white'/></svg> 
                        : <svg width='30' height='30' viewBox='0 0 221 172' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='221' height='46' rx='23' fill='black'/><rect y='63' width='221' height='46' rx='23' fill='black'/><rect y='126' width='221' height='46' rx='23' fill='black'/></svg>  
                    }
                 </div>
                 <div className={`${ !showMenu && 'hidden' } fixed top-0 left-0 right-0 bottom-0 bg-blue-700 bg-opacity-80 font-bold font-white`}>
                    <div className='flex flex-col items-center justify-center gap-2 h-full'>
                        { items.map((item, index)=>(
                            <div key={'mobileSubmenuItem'+index}>
                                <p onClick={()=>handleMobileClick(item)}>{item.label}</p>
                                { (item.subItems && showSubmenus) && (
                                    <div className='font-normal'>
                                        <ul className='flex flex-col items-center gap-1'>
                                            { item.subItems && item.subItems.map((subitem, index)=>(
                                                <li onClick={()=>{
                                                    setShowMenu(false)
                                                    setShowSubmenus(false)
                                                    router.push('/'+subitem)
                                                }}>{subitem}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                 </div>
             </div> 
         </div> 
     </div> 
   ) 
 } 
 