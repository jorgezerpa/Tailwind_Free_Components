import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs/';

const textCode = `<p>No Code provided.</p>`

export const TemplateLayout = ({ children, code=textCode }) => {
  const [showCodeBlock, setShowCodeBlock] = useState(false)
  return (
    <div className='mb-20'>
        <div className='w-full pb-1 px-10 mb-5'>
            <p onClick={()=>setShowCodeBlock(!showCodeBlock)} className='w-full font-bold text-gray-900 text-xl border-b-2 border-black pb-2 text-right'>See Code</p>           
        </div>
        <div className={`${!showCodeBlock && 'hidden'} w-full px-5`}>
            <SyntaxHighlighter  language='javascript' style={dracula} showLineNumbers>
              { code }
            </SyntaxHighlighter>
        </div>
        <div className='relative'>
            { children }             
        </div>
    </div>
  )
}

