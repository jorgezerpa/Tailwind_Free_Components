import React from 'react'

const cards = [
  { price:40, title:'Free', description:'', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor', 'Qeloremt sin ammet'] },
  { price:60, title:'Pro', description:'', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor', 'Qeloremt sin ammet'] },
  { price:100, title:'Team', description:'', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor', 'Qeloremt sin ammet'] },
]

export const Pricing1 = () => {
  return (
    <div className=''>
      <div className='w-full min-h-screen flex justify-center items-center gap-10'>
          {/* CARD  */}
        { cards.map((card, index)=>(
          <div key={'pricing1'+card.title+index} className='min-w-[250px] max-w-[350px] shadow-lg shadow-black '>
            <h2 className='mb-10 px-10 py-5 font-bold text-lg text-center text-white bg-gradient-to-br from-purple-600 to-purple-900 shadow-md shadow-black'>{card.title}</h2>
            <div className='mb-10 flex items-start justify-center'>
              <p className='font-normal text-sm'>$</p>
              <h3 className='text-5xl font-bold text-center'>
                { card.price }
                <span className='text-xl font-semibold text-center'>USD</span>  
              </h3>
            </div>
            <p>{card.description}</p>
            <ul>
              { card.items.map((item, index)=>(
                <li key={'pricing1Item'+item+index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
    
export const Pricing1Text = 
"import React from 'react' \n \
 \n \
const cards = [ \n \
  { price:40, title:'Free', description:'', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor', 'Qeloremt sin ammet'] }, \n \
  { price:60, title:'Pro', description:'', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor', 'Qeloremt sin ammet'] }, \n \
  { price:100, title:'Team', description:'', items: ['lorem ipsum', 'Doloremque sin ammet', 'Rem Sin Ammet lor', 'Qeloremt sin ammet'] }, \n \
] \n \
 \n \
export const Pricing1 = () => { \n \
  return ( \n \
    <div className=''> \n \
      <div className='w-full min-h-screen flex justify-center items-center gap-10'> \n \
          {/* CARD  */} \n \
        { cards.map((card, index)=>( \n \
          <div key={'pricing1'+card.title+index} className='min-w-[250px] max-w-[350px] shadow-lg shadow-black '> \n \
            <h2 className='mb-10 px-10 py-5 font-bold text-lg text-center text-white bg-gradient-to-br from-purple-600 to-purple-900 shadow-md shadow-black'>{card.title}</h2> \n \
            <div className='mb-10 flex items-start justify-center'> \n \
              <p className='font-normal text-sm'>$</p> \n \
              <h3 className='text-5xl font-bold text-center'> \n \
                { card.price } \n \
                <span className='text-xl font-semibold text-center'>USD</span>   \n \
              </h3> \n \
            </div> \n \
            <p>{card.description}</p> \n \
            <ul> \n \
              { card.items.map((item, index)=>( \n \
                <li key={'pricing1Item'+item+index}>{item}</li> \n \
              ))} \n \
            </ul> \n \
          </div> \n \
        ))} \n \
      </div> \n \
    </div> \n \
  ) \n \
} \n \
"