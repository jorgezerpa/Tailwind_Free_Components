import React from 'react'

const cards = [
  { price:40, title:'Free', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto itaque.', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor', 'lorem ipsum', 'Doloremque sin ammet'] },
  { price:60, title:'Pro', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto itaque.', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor', 'lorem ipsum', 'Doloremque sin ammet'] },
  { price:100, title:'Team', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto itaque.', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor', 'lorem ipsum', 'Doloremque sin ammet'] },
]


export const Pricing3 = () => {
  return (
    <div className=''>
      <div className='w-full min-h-screen flex justify-center items-center gap-10 flex-wrap'>
          {/* CARD  */}
        { cards.map((card, index)=>(
          <div key={'pricing1'+card.title+index} className='rounded-2xl overflow-hidden min-w-[250px] sm:min-w-[300px] shadow-sm shadow-gray-700 pb-10'>
            <div className='text-white bg-gradient-to-r from-fuchsia-500 to-fuchsia-700 pb-10 rounded-b-[70px]'>
              <h2 className={`mb-1 px-10 pt-8 font-bold text-lg text-center`}>{card.title}</h2>
              <h3 className='text-3xl font-bold text-center'>
                ${ card.price }/month
              </h3>
            </div>
            <ul className='py-5 px-4 flex flex-col gap-3'>
              { card.items.map((item, index)=>(
                <div className='w-full flex gap-2 justify-center items-center'>
                  <li key={'pricing1Item'+item+index} className='font-bold text-gray-500'>{item}</li>
                </div>
              ))}
            </ul>
            <div className='flex justify-center'>
              <button className={`rounded-2xl text-lg font-bold border-2 border-white px-5 py-2 text-white bg-gradient-to-r from-fuchsia-500 to-fuchsia-700`}>Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
    
export const Pricing3Text = 
"import React from 'react' \n \
 \n \
const cards = [ \n \
  { price:40, title:'Free', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto itaque.', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor', 'lorem ipsum', 'Doloremque sin ammet'] }, \n \
  { price:60, title:'Pro', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto itaque.', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor', 'lorem ipsum', 'Doloremque sin ammet'] }, \n \
  { price:100, title:'Team', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto itaque.', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor', 'lorem ipsum', 'Doloremque sin ammet'] }, \n \
] \n \
 \n \
 \n \
export const Pricing3 = () => { \n \
  return ( \n \
    <div className=''> \n \
      <div className='w-full min-h-screen flex justify-center items-center gap-10 flex-wrap'> \n \
          {/* CARD  */} \n \
        { cards.map((card, index)=>( \n \
          <div key={'pricing1'+card.title+index} className='rounded-2xl overflow-hidden min-w-[250px] sm:min-w-[300px] shadow-sm shadow-gray-700 pb-10'> \n \
            <div className='text-white bg-gradient-to-r from-fuchsia-500 to-fuchsia-700 pb-10 rounded-b-[70px]'> \n \
              <h2 className={`mb-1 px-10 pt-8 font-bold text-lg text-center`}>{card.title}</h2> \n \
              <h3 className='text-3xl font-bold text-center'> \n \
                ${ card.price }/month \n \
              </h3> \n \
            </div> \n \
            <ul className='py-5 px-4 flex flex-col gap-3'> \n \
              { card.items.map((item, index)=>( \n \
                <div className='w-full flex gap-2 justify-center items-center'> \n \
                  <li key={'pricing1Item'+item+index} className='font-bold text-gray-500'>{item}</li> \n \
                </div> \n \
              ))} \n \
            </ul> \n \
            <div className='flex justify-center'> \n \
              <button className={`rounded-2xl text-lg font-bold border-2 border-white px-5 py-2 text-white bg-gradient-to-r from-fuchsia-500 to-fuchsia-700`}>Get Started</button> \n \
            </div> \n \
          </div> \n \
        ))} \n \
      </div> \n \
    </div> \n \
  ) \n \
} \n \
"