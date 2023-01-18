import React from 'react' 
import Image from 'next/image'
  
 export const Header = () => { 
  const scrollButton = () => window.scrollTo({ top: window.innerHeight, behavior:'smooth' })

   return ( 
     <div className=''> 
       <div className='w-full min-h-[140vh] sm:min-h-[120vh] flex justify-end items-center'> 
         <div className='relative min-h-[80vh] w-[90vw] bg-gradient-to-br bg-gray-600 rounded-l-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 shadow-2xl shadow-black'> 
           <div className='flex flex-col-reverse sm:flex-row pb-20 sm:pb-0'> 
               <div className='flex-1 flex justify-center items-center h-[80vh]'> 
                 <div className='max-w-[400px] text-white p-5'> 
                   <h2 className='font-bold text-4xl mb-5'>Best UI components</h2> 
                      <p className='text-sm mb-5'>
                        Here you will find a compilation of free TailwindCSS ReactJS/NextJS components. Headers, Navbars, Pricing Cards and so much more, simply look for one that you like, copy the code, and implement it to your project.
                        <br/> <span className='font-bold'>Happy Coding!</span>                     
                      </p> 
                   <div> 
                     <button onClick={scrollButton} className='outline-none px-4 py-2 bg-orange-600 font-bold rounded-xl'>See Templates</button> 
                   </div> 
                 </div> 
               </div> 
               <div className='flex-1 flex justify-center items-center p-5'> 
               <div className='relative w-[250px] h-[300px] sm:w-[300px] sm:h-[450px] md:w-[400px] md:h-[500px] rounded-full'>
                  <Image className='absolute animate-floating' src='/images/astronaut.png'  alt='' fill style={{ objectFit: 'contain' }} />
                </div> 
               </div> 
           </div> 
           <div className='absolute top-full w-full flex justify-center'> 
               <div className='translate-y-[-50%] max-w-[200px] bg-gradient-to-br from-green-400 to-green-700 p-5 text-white font-bold rounded-xl shadow-sm shadow-white' > 
                  do you want to collaborate? This is an open source project, see how to <a className='border-b-white border-b-2 hover:scale-[97%] hover:text-purple-900 inline-block transition-all' href="https://github.com/jorgezerpa/Tailwind_Free_Components" target={'_blank'}>contribute here</a> 
               </div> 
           </div> 
         </div> 
       </div> 
     </div> 
   ) 
 } 
 