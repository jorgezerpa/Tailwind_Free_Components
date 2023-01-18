import React from 'react'

export const Footer = () => {
  return (
    <div className='px-3 py-10 w-full flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10 sm:gap-0 bg-gradient-to-br from-blue-400 to-blue-800 text-white'>
        <div className='flex-1 flex justify-center font-bold text-4xl'>LOGO</div>
        <div className='flex-1 flex justify-center'>
            <div>
                <h6 className='font-bold text-lg text-center sm:text-left'>Contact</h6>
                <div className='flex flex-col items-start gap-1'>
                    <a href="/">email: contact@zerpacode.com</a>
                    <a href="/">linkedin: jorge-zerpa-code</a>
                    <a href="/">instagram: @zerpacode</a>
                    <a href="/">medium: @zerpacode</a>
                </div>
            </div>
        </div>
    </div>
  )
}
