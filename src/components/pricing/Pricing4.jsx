import React from 'react'

const cards = [
  { price:40, title:'Free', description:'Doloribus architecto itaque.', items: ['Qeloremt sin ammet', 'lorem ipsum', 'Doloremque sin ammet',] },
  { price:60, title:'Pro', description:'Doloribus architecto itaque.', items: ['Qeloremt sin ammet', 'lorem ipsum', 'Doloremque sin ammet',] },
  { price:100, title:'Team', description:'Doloribus architecto itaque.', items: ['Qeloremt sin ammet', 'lorem ipsum', 'Doloremque sin ammet',] },
]

export const Pricing4 = () => {
  return (
    <div className='bg-gray-800'>
      <div className='w-full min-h-screen flex flex-wrap justify-center items-center gap-10'>
          {/* CARD  */}
        { cards.map((card, index)=>(
          <div key={'pricing1'+card.title+index} className='py-8 text-white min-w-[250px] max-w-[300px] shadow-sm shadow-gray-700 border-8 border-purple-500 rounded-xl'>
            <h2 className='px-10 py-5 font-bold text-lg text-center text-white '>{card.title}</h2>
            <div className='mb-4 flex items-start justify-center'>
              <p className='font-normal text-sm'>$</p>
              <h3 className='text-5xl font-bold text-center'>
                { card.price }
                <span className='text-xl font-semibold text-center'>USD</span>  
              </h3>
            </div>
            <p className='py-2 px-5 pb-10 text-center font-medium '>{card.description}</p>
            <div className='flex justify-center'>
              <button className='rounded-xl text-lg text-white font-bold px-4 py-2 bg-purple-500'>Get Started</button>
            </div>
            <ul className='py-5 px-4 '>
              { card.items.map((item, index)=>(
                <div className='w-full flex gap-2 justify-center items-center'>
                  <div className='w-[7px] h-[7px] bg-white rounded-full'></div>
                  <li key={'pricing1Item'+item+index} className='font-semibold'>{item}</li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
    
export const Pricing4Text = 
"import React from 'react' \n \
 \n \
const cards = [ \n \
  { price:40, title:'Free', description:'Doloribus architecto itaque.', items: ['Qeloremt sin ammet', 'lorem ipsum', 'Doloremque sin ammet',] }, \n \
  { price:60, title:'Pro', description:'Doloribus architecto itaque.', items: ['Qeloremt sin ammet', 'lorem ipsum', 'Doloremque sin ammet',] }, \n \
  { price:100, title:'Team', description:'Doloribus architecto itaque.', items: ['Qeloremt sin ammet', 'lorem ipsum', 'Doloremque sin ammet',] }, \n \
] \n \
 \n \
export const Pricing4 = () => { \n \
  return ( \n \
    <div className='bg-gray-800'> \n \
      <div className='w-full min-h-screen flex flex-wrap justify-center items-center gap-10'> \n \
          {/* CARD  */} \n \
        { cards.map((card, index)=>( \n \
          <div key={'pricing1'+card.title+index} className='py-8 text-white min-w-[250px] max-w-[300px] shadow-sm shadow-gray-700 border-8 border-purple-500 rounded-xl'> \n \
            <h2 className='px-10 py-5 font-bold text-lg text-center text-white '>{card.title}</h2> \n \
            <div className='mb-4 flex items-start justify-center'> \n \
              <p className='font-normal text-sm'>$</p> \n \
              <h3 className='text-5xl font-bold text-center'> \n \
                { card.price } \n \
                <span className='text-xl font-semibold text-center'>USD</span>   \n \
              </h3> \n \
            </div> \n \
            <p className='py-2 px-5 pb-10 text-center font-medium '>{card.description}</p> \n \
            <div className='flex justify-center'> \n \
              <button className='rounded-xl text-lg text-white font-bold px-4 py-2 bg-purple-500'>Get Started</button> \n \
            </div> \n \
            <ul className='py-5 px-4 '> \n \
              { card.items.map((item, index)=>( \n \
                <div className='w-full flex gap-2 justify-center items-center'> \n \
                  <div className='w-[7px] h-[7px] bg-white rounded-full'></div> \n \
                  <li key={'pricing1Item'+item+index} className='font-semibold'>{item}</li> \n \
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