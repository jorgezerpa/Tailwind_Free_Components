import React from 'react'
import Image from 'next/image'
import styles from '../../styles/componentCard.module.css'
import { useRouter } from 'next/router'

const components = [
    { link:'/navbars', title:'navbars', icon:'/images/navbarIcon.png' },
    { link:'/headers', title:'headers', icon:'/images/headerIcon.png' },
    { link:'/pricing', title:'pricing Cards', icon:'/images/pricingIcon.png' },
]

export const ComponentsList = () => {
    const router = useRouter()

  return (
    <div className='px-2 py-10 min-h-screen'>
        <h2 className='text-center text-3xl sm:text-5xl font-extrabold mb-20 text-white'>Components</h2>
        <div className='flex justify-center flex-wrap gap-20'>
            { components.map((component, index)=>(
                <div style={{ perspective:600 }} onClick={()=>router.push(component.link)}>
                    <div key={'homeComponentList'+index}  className={`${styles.card} hover:scale-95  w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] flex flex-col items-center justify-center bg-gray-600 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100`}>
                        <div className='relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full'>
                            <Image src={component.icon}  alt='' fill style={{ objectFit: 'contain' }} />
                        </div>
                        <h5 className='font-bold text-1xl text-center text-white text-2xl'>{ component.title }</h5>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
