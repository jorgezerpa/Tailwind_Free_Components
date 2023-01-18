import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'

const items = [
    { linkTo:'/',label:'home' },
    { linkTo:'/',label:'about' },
    { linkTo:'/',label:'pricing' },
    { linkTo:'/',label:'contact' },
]

export const Navbar2 = () => {
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
            {/* search bar Desktop */}
            <div className='md:flex hidden'>
                <div className='bg-white rounded-l-2xl flex justify-center items-center'>
                <svg width="25" height="25" viewBox="0 0 191 191" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M150.412 161.554L105.846 116.988C101.867 120.171 97.2906 122.691 92.1177 124.548C86.9448 126.405 81.4403 127.333 75.6042 127.333C61.1465 127.333 48.9119 122.328 38.9003 112.316C28.8834 102.299 23.875 90.0618 23.875 75.6042C23.875 61.1465 28.8834 48.9093 38.9003 38.8924C48.9119 28.8808 61.1465 23.875 75.6042 23.875C90.0618 23.875 102.299 28.8808 112.316 38.8924C122.328 48.9093 127.333 61.1465 127.333 75.6042C127.333 81.4403 126.405 86.9448 124.548 92.1177C122.691 97.2906 120.171 101.867 116.987 105.846L161.753 150.611C163.212 152.07 163.942 153.861 163.942 155.983C163.942 158.106 163.146 159.963 161.554 161.554C160.095 163.013 158.238 163.743 155.983 163.743C153.728 163.743 151.872 163.013 150.412 161.554ZM75.6042 111.417C85.5521 111.417 94.0091 107.936 100.975 100.975C107.936 94.0091 111.417 85.5521 111.417 75.6042C111.417 65.6563 107.936 57.1992 100.975 50.233C94.0091 43.2721 85.5521 39.7917 75.6042 39.7917C65.6562 39.7917 57.1992 43.2721 50.233 50.233C43.2721 57.1992 39.7917 65.6563 39.7917 75.6042C39.7917 85.5521 43.2721 94.0091 50.233 100.975C57.1992 107.936 65.6562 111.417 75.6042 111.417Z" fill="black"/></svg>
                </div>
                <input type="text" className='rounded-r-2xl outline-none border-gray-200 p-3 h-[2rem]' />
            </div>
            {/* search bar Mobile  */}
            <div className='flex md:hidden'>
                <div className='flex justify-center items-center'>
                    <svg width="25" height="25" viewBox="0 0 191 191" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M150.412 161.554L105.846 116.988C101.867 120.171 97.2906 122.691 92.1177 124.548C86.9448 126.405 81.4403 127.333 75.6042 127.333C61.1465 127.333 48.9119 122.328 38.9003 112.316C28.8834 102.299 23.875 90.0618 23.875 75.6042C23.875 61.1465 28.8834 48.9093 38.9003 38.8924C48.9119 28.8808 61.1465 23.875 75.6042 23.875C90.0618 23.875 102.299 28.8808 112.316 38.8924C122.328 48.9093 127.333 61.1465 127.333 75.6042C127.333 81.4403 126.405 86.9448 124.548 92.1177C122.691 97.2906 120.171 101.867 116.987 105.846L161.753 150.611C163.212 152.07 163.942 153.861 163.942 155.983C163.942 158.106 163.146 159.963 161.554 161.554C160.095 163.013 158.238 163.743 155.983 163.743C153.728 163.743 151.872 163.013 150.412 161.554ZM75.6042 111.417C85.5521 111.417 94.0091 107.936 100.975 100.975C107.936 94.0091 111.417 85.5521 111.417 75.6042C111.417 65.6563 107.936 57.1992 100.975 50.233C94.0091 43.2721 85.5521 39.7917 75.6042 39.7917C65.6562 39.7917 57.1992 43.2721 50.233 50.233C43.2721 57.1992 39.7917 65.6563 39.7917 75.6042C39.7917 85.5521 43.2721 94.0091 50.233 100.975C57.1992 107.936 65.6562 111.417 75.6042 111.417Z" fill="white"/></svg>
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

export const Navbar2String = 
`import React from 'react'

const items = [
    { linkTo:'/',label:'home' },
    { linkTo:'/',label:'about' },
    { linkTo:'/',label:'pricing' },
    { linkTo:'/',label:'contact' },
]

export const Navbar2 = () => {
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
            {/* search bar Desktop */}
            <div className='md:flex hidden'>
                <div className='bg-white rounded-l-2xl flex justify-center items-center'>
                <svg width="25" height="25" viewBox="0 0 191 191" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M150.412 161.554L105.846 116.988C101.867 120.171 97.2906 122.691 92.1177 124.548C86.9448 126.405 81.4403 127.333 75.6042 127.333C61.1465 127.333 48.9119 122.328 38.9003 112.316C28.8834 102.299 23.875 90.0618 23.875 75.6042C23.875 61.1465 28.8834 48.9093 38.9003 38.8924C48.9119 28.8808 61.1465 23.875 75.6042 23.875C90.0618 23.875 102.299 28.8808 112.316 38.8924C122.328 48.9093 127.333 61.1465 127.333 75.6042C127.333 81.4403 126.405 86.9448 124.548 92.1177C122.691 97.2906 120.171 101.867 116.987 105.846L161.753 150.611C163.212 152.07 163.942 153.861 163.942 155.983C163.942 158.106 163.146 159.963 161.554 161.554C160.095 163.013 158.238 163.743 155.983 163.743C153.728 163.743 151.872 163.013 150.412 161.554ZM75.6042 111.417C85.5521 111.417 94.0091 107.936 100.975 100.975C107.936 94.0091 111.417 85.5521 111.417 75.6042C111.417 65.6563 107.936 57.1992 100.975 50.233C94.0091 43.2721 85.5521 39.7917 75.6042 39.7917C65.6562 39.7917 57.1992 43.2721 50.233 50.233C43.2721 57.1992 39.7917 65.6563 39.7917 75.6042C39.7917 85.5521 43.2721 94.0091 50.233 100.975C57.1992 107.936 65.6562 111.417 75.6042 111.417Z" fill="black"/></svg>
                </div>
                <input type="text" className='rounded-r-2xl outline-none border-gray-200 p-3 h-[2rem]' />
            </div>
            {/* search bar Mobile  */}
            <div className='flex md:hidden'>
                <div className='flex justify-center items-center'>
                    <svg width="25" height="25" viewBox="0 0 191 191" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M150.412 161.554L105.846 116.988C101.867 120.171 97.2906 122.691 92.1177 124.548C86.9448 126.405 81.4403 127.333 75.6042 127.333C61.1465 127.333 48.9119 122.328 38.9003 112.316C28.8834 102.299 23.875 90.0618 23.875 75.6042C23.875 61.1465 28.8834 48.9093 38.9003 38.8924C48.9119 28.8808 61.1465 23.875 75.6042 23.875C90.0618 23.875 102.299 28.8808 112.316 38.8924C122.328 48.9093 127.333 61.1465 127.333 75.6042C127.333 81.4403 126.405 86.9448 124.548 92.1177C122.691 97.2906 120.171 101.867 116.987 105.846L161.753 150.611C163.212 152.07 163.942 153.861 163.942 155.983C163.942 158.106 163.146 159.963 161.554 161.554C160.095 163.013 158.238 163.743 155.983 163.743C153.728 163.743 151.872 163.013 150.412 161.554ZM75.6042 111.417C85.5521 111.417 94.0091 107.936 100.975 100.975C107.936 94.0091 111.417 85.5521 111.417 75.6042C111.417 65.6563 107.936 57.1992 100.975 50.233C94.0091 43.2721 85.5521 39.7917 75.6042 39.7917C65.6562 39.7917 57.1992 43.2721 50.233 50.233C43.2721 57.1992 39.7917 65.6563 39.7917 75.6042C39.7917 85.5521 43.2721 94.0091 50.233 100.975C57.1992 107.936 65.6562 111.417 75.6042 111.417Z" fill="white"/></svg>
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
`
