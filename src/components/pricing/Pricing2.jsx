import React from 'react'

const cards = [
  { price:40, title:'Free', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto itaque.', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor'] },
  { price:60, title:'Pro', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto itaque.', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor'] },
  { price:100, title:'Team', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto itaque.', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor'] },
]

const headerStyle = [
  'text-black bg-white shadow-sm border-b-2 border-gray-200',
  'text-white bg-gradient-to-r from-blue-300 to-purple-400 border-b-2 border-gray-200',
  'text-white bg-gradient-to-br from-orange-200 to-yellow-400 border-b-2 border-gray-200',
]

const buttonStyle = [
  'text-gray-900 border-2 border-gray-600',
  'text-white bg-gray-900 border-2 border-gray-600',
  'text-gray-900 border-2 border-gray-600',
]

export const Pricing2 = () => {
  return (
    <div className=''>
      <div className='w-full min-h-screen flex justify-center items-center gap-10 flex-wrap'>
          {/* CARD  */}
        { cards.map((card, index)=>(
          <div key={'pricing1'+card.title+index} className='min-w-[250px] max-w-[300px] shadow-sm shadow-gray-700 pb-10'>
            <h2 className={`mb-10 px-10 py-5 font-bold text-lg text-center ${headerStyle[index]}`}>{card.title}</h2>
            <div className='mb-4 flex items-start justify-center'>
              <p className='font-normal text-sm'>$</p>
              <h3 className='text-5xl font-bold text-center'>
                { card.price }
                <span className='text-xl font-semibold text-center'>USD</span>  
              </h3>
            </div>
            <p className='py-2 px-5 pb-10 text-center font-medium '>{card.description}</p>
            <div className='flex justify-center'>
              <button className={`rounded-md text-lg px-5 py-2 ${buttonStyle[index]}`}>Get Started</button>
            </div>
            <ul className='py-5 px-4 flex flex-col gap-3'>
              { card.items.map((item, index)=>(
                <div className='w-full flex gap-2 justify-start items-center'>
                  <div className='w-[5px] h-[5px] bg-purple-600 rounded-full'></div>
                  <li key={'pricing1Item'+item+index} className='font-semibold text-gray-900'>{item}</li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
    
export const Pricing2Text = 
"import React from 'react' \n \
 \n \
const cards = [ \n \
  { price:40, title:'Free', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto itaque.', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor'] }, \n \
  { price:60, title:'Pro', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto itaque.', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor'] }, \n \
  { price:100, title:'Team', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto itaque.', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor'] }, \n \
] \n \
 \n \
const headerStyle = [ \n \
  'text-black bg-white shadow-sm border-b-2 border-gray-200', \n \
  'text-white bg-gradient-to-r from-blue-300 to-purple-400 border-b-2 border-gray-200', \n \
  'text-white bg-gradient-to-br from-orange-200 to-yellow-400 border-b-2 border-gray-200', \n \
] \n \
 \n \
const buttonStyle = [ \n \
  'text-gray-900 border-2 border-gray-600', \n \
  'text-white bg-gray-900 border-2 border-gray-600', \n \
  'text-gray-900 border-2 border-gray-600', \n \
] \n \
 \n \
export const Pricing2 = () => { \n \
  return ( \n \
    <div className=''> \n \
      <div className='w-full min-h-screen flex justify-center items-center gap-10 flex-wrap'> \n \
          {/* CARD  */} \n \
        { cards.map((card, index)=>( \n \
          <div key={'pricing1'+card.title+index} className='min-w-[250px] max-w-[300px] shadow-sm shadow-gray-700 pb-10'> \n \
            <h2 className={`mb-10 px-10 py-5 font-bold text-lg text-center ${headerStyle[index]}`}>{card.title}</h2> \n \
            <div className='mb-4 flex items-start justify-center'> \n \
              <p className='font-normal text-sm'>$</p> \n \
              <h3 className='text-5xl font-bold text-center'> \n \
                { card.price } \n \
                <span className='text-xl font-semibold text-center'>USD</span>   \n \
              </h3> \n \
            </div> \n \
            <p className='py-2 px-5 pb-10 text-center font-medium '>{card.description}</p> \n \
            <div className='flex justify-center'> \n \
              <button className={`rounded-md text-lg px-5 py-2 ${buttonStyle[index]}`}>Get Started</button> \n \
            </div> \n \
            <ul className='py-5 px-4 flex flex-col gap-3'> \n \
              { card.items.map((item, index)=>( \n \
                <div className='w-full flex gap-2 justify-start items-center'> \n \
                  <div className='w-[5px] h-[5px] bg-purple-600 rounded-full'></div> \n \
                  <li key={'pricing1Item'+item+index} className='font-semibold text-gray-900'>{item}</li> \n \
                </div> \n \
              ))} \n \
            </ul> \n \
          </div> \n \
        ))} \n \
      </div> \n \
    </div> \n \
  ) \n \
} \n \
"