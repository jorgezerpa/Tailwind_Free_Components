import React from 'react'

export const Header4 = () => {
  return (
    <div className=''>
        <div className='flex flex-col gap-10 md:gap-0 md:flex-row'>
            <div className='bg-gradient-to-r from-purple-500 to-purple-600 relative flex-1 flex flex-col justify-center items-center h-auto md:h-screen px-5 py-20 md:pt-0'>
                <div className='px-10'>
                  <h3 className='text-white text-center md:text-left text-4xl md:text-6xl lg:text-7xl font-semibold mb-5'>UX/UI Development</h3>
                  <p className='text-white text-center md:text-left  text-sm leading-7 font-semiboldtext-left mt-10 md:mt-0 mb-5 sm:mb-0'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, similique voluptate. Nisi placeat inventore praesentium. Neque sapiente quisquam in sequi nisi quis, et sint, odio ipsam expedita adipisci fugiat deserunt.
                  </p>
                </div>
            </div>
            <div className='relative flex-1 flex items-center justify-center md:justify-end'>
              <div className='hidden md:block absolute top-0 left-0 max-h-screen overflow-y-hidden bg-gradient-to-r from-purple-600 to-purple-900'>
                <svg width="157" height="982" viewBox="0 0 157 982" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M55.7119 0L69.098 40.9167C82.9303 81.8333 109.703 163.667 99.4398 245.5C89.6234 327.333 42.3259 409.167 18.6771 491C-4.97166 572.833 -4.97166 654.667 11.9841 736.5C28.4936 818.333 62.405 900.167 79.3607 941.083L96.3164 982H157V941.083C157 900.167 157 818.333 157 736.5C157 654.667 157 572.833 157 491C157 409.167 157 327.333 157 245.5C157 163.667 157 81.8333 157 40.9167V0L55.7119 0Z" fill="white"/></svg>
              </div>
              <div className='z-50 mb-10  '>
                <img src="https://res.cloudinary.com/zerpacode/image/upload/v1673881719/Web_Template_je6kwi.png" alt="" />
              </div>
            </div>

        </div>
    </div>
  )
}
