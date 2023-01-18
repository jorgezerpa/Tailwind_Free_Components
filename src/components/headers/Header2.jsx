import React from 'react'

export const Header2 = () => {
  return (
    <div className=''>
      <div className='w-full min-h-[140vh] sm:min-h-[120vh] flex justify-end items-center bg-gradient-to-br from-blue-400 to-blue-900'>
        <div className='relative min-h-[80vh] w-[90vw] bg-gradient-to-br from-blue-500 to-blue-900 shadow-2xl shadow-black'>
          <div className='flex flex-col-reverse sm:flex-row pb-20 sm:pb-0'>
              <div className='flex-1 flex justify-center items-center h-[80vh]'>
                <div className='max-w-[400px] text-white p-5'>
                  <h2 className='font-bold text-4xl mb-5'>Some Very Good Title</h2>
                  <p className='text-sm mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt voluptatum minus harum animi quibusdam cum voluptas ipsum, soluta placeat praesentium! Porro ipsum magnam velit mollitia eos quaerat? Repudiandae, voluptate.</p>
                  <div>
                    <button className='px-4 py-2 bg-orange-600 font-bold rounded-xl'>See More</button>
                  </div>
                </div>
              </div>
              <div className='flex-1 flex justify-center items-center p-5'>
                <div className='w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]'>
                  <svg width='100%' height='auto' viewBox='0 0 300 313' fill='none' xmlns='http://www.w3.org/2000/svg'><g clipPath='url(#clip0_110_160)'><g filter='url(#filter0_d_110_160)'><path d='M295.513 186.274C275.472 266.674 194.013 315.549 113.728 295.506C33.3256 275.465 -15.5486 194.01 4.49398 113.726C24.5354 33.3257 105.875 -15.5486 186.278 4.49399C266.563 24.4182 315.556 105.873 295.513 186.274Z' fill='url(#paint0_linear_110_160)'/></g><path d='M221.42 136.999C224.35 116.214 209.232 104.965 188.373 97.5069L195.17 69.2636L178.764 64.9843L172.201 92.494C167.865 91.3937 163.412 90.2933 158.959 89.3151L165.521 61.6831L149.115 57.4038L142.436 85.5249C138.803 84.669 135.287 83.8132 131.889 82.9573V82.8351L109.154 76.9663L104.818 95.3061C104.818 95.3061 117.006 98.2405 116.771 98.3628C123.451 100.075 124.623 104.721 124.389 108.389L116.654 140.544C117.123 140.667 117.709 140.789 118.412 141.156C117.826 141.033 117.24 140.911 116.654 140.667L105.873 185.66C105.053 187.739 102.943 190.918 98.373 189.695C98.4902 189.94 86.4199 186.639 86.4199 186.639L78.2168 206.323L99.6621 211.948C103.646 213.048 107.514 214.026 111.381 215.126L104.584 243.614L120.99 247.894L127.787 219.65C132.24 220.873 136.693 222.096 140.912 223.196L134.232 251.317L150.639 255.596L157.436 227.109C185.561 232.61 206.654 230.41 215.443 203.878C222.592 182.604 215.092 170.255 200.326 162.185C211.225 159.618 219.311 152.16 221.42 136.999ZM183.803 192.018C178.764 213.292 144.311 201.8 133.178 198.865L142.201 161.085C153.334 164.019 189.193 169.766 183.803 192.018ZM188.959 136.632C184.271 156.072 155.678 146.169 146.42 143.723L154.623 109.489C163.881 111.934 193.764 116.458 188.959 136.632Z' fill='white'/></g><defs><filter id='filter0_d_110_160' x='-4' y='0' width='308' height='311' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'><feFlood floodOpacity='0' result='BackgroundImageFix'/><feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/><feOffset dy='7'/><feGaussianBlur stdDeviation='2'/><feComposite in2='hardAlpha' operator='out'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/><feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_110_160'/><feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_110_160' result='shape'/></filter><linearGradient id='paint0_linear_110_160' x1='149.919' y1='-0.072' x2='149.919' y2='299.97' gradientUnits='userSpaceOnUse'><stop stopColor='#F9AA4B'/><stop offset='1' stopColor='#F7931A'/></linearGradient><clipPath id='clip0_110_160'><rect width='300' height='313' fill='white'/></clipPath></defs></svg>
                </div>
              </div>
          </div>
          <div className='absolute top-full w-full flex justify-center'>
              <div className='translate-y-[-50%] max-w-[200px] bg-red-600 p-5 text-white font-bold rounded-xl shadow-md shadow-white' >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Header2String = 
"import React from 'react' \n \
 \n \
export const Header2 = () => { \n \
  return ( \n \
    <div className=''> \n \
      <div className='w-full min-h-[140vh] sm:min-h-[120vh] flex justify-end items-center bg-gradient-to-br from-blue-400 to-blue-900'> \n \
        <div className='relative min-h-[80vh] w-[90vw] bg-gradient-to-br from-blue-500 to-blue-900 shadow-2xl shadow-black'> \n \
          <div className='flex flex-col-reverse sm:flex-row pb-20 sm:pb-0'> \n \
              <div className='flex-1 flex justify-center items-center h-[80vh]'> \n \
                <div className='max-w-[400px] text-white p-5'> \n \
                  <h2 className='font-bold text-4xl mb-5'>Some Very Good Title</h2> \n \
                  <p className='text-sm mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt voluptatum minus harum animi quibusdam cum voluptas ipsum, soluta placeat praesentium! Porro ipsum magnam velit mollitia eos quaerat? Repudiandae, voluptate.</p> \n \
                  <div> \n \
                    <button className='px-4 py-2 bg-orange-600 font-bold rounded-xl'>See More</button> \n \
                  </div> \n \
                </div> \n \
              </div> \n \
              <div className='flex-1 flex justify-center items-center p-5'> \n \
                <div className='w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]'> \n \
                  <svg width='100%' height='auto' viewBox='0 0 300 313' fill='none' xmlns='http://www.w3.org/2000/svg'><g clipPath='url(#clip0_110_160)'><g filter='url(#filter0_d_110_160)'><path d='M295.513 186.274C275.472 266.674 194.013 315.549 113.728 295.506C33.3256 275.465 -15.5486 194.01 4.49398 113.726C24.5354 33.3257 105.875 -15.5486 186.278 4.49399C266.563 24.4182 315.556 105.873 295.513 186.274Z' fill='url(#paint0_linear_110_160)'/></g><path d='M221.42 136.999C224.35 116.214 209.232 104.965 188.373 97.5069L195.17 69.2636L178.764 64.9843L172.201 92.494C167.865 91.3937 163.412 90.2933 158.959 89.3151L165.521 61.6831L149.115 57.4038L142.436 85.5249C138.803 84.669 135.287 83.8132 131.889 82.9573V82.8351L109.154 76.9663L104.818 95.3061C104.818 95.3061 117.006 98.2405 116.771 98.3628C123.451 100.075 124.623 104.721 124.389 108.389L116.654 140.544C117.123 140.667 117.709 140.789 118.412 141.156C117.826 141.033 117.24 140.911 116.654 140.667L105.873 185.66C105.053 187.739 102.943 190.918 98.373 189.695C98.4902 189.94 86.4199 186.639 86.4199 186.639L78.2168 206.323L99.6621 211.948C103.646 213.048 107.514 214.026 111.381 215.126L104.584 243.614L120.99 247.894L127.787 219.65C132.24 220.873 136.693 222.096 140.912 223.196L134.232 251.317L150.639 255.596L157.436 227.109C185.561 232.61 206.654 230.41 215.443 203.878C222.592 182.604 215.092 170.255 200.326 162.185C211.225 159.618 219.311 152.16 221.42 136.999ZM183.803 192.018C178.764 213.292 144.311 201.8 133.178 198.865L142.201 161.085C153.334 164.019 189.193 169.766 183.803 192.018ZM188.959 136.632C184.271 156.072 155.678 146.169 146.42 143.723L154.623 109.489C163.881 111.934 193.764 116.458 188.959 136.632Z' fill='white'/></g><defs><filter id='filter0_d_110_160' x='-4' y='0' width='308' height='311' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'><feFlood floodOpacity='0' result='BackgroundImageFix'/><feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/><feOffset dy='7'/><feGaussianBlur stdDeviation='2'/><feComposite in2='hardAlpha' operator='out'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/><feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_110_160'/><feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_110_160' result='shape'/></filter><linearGradient id='paint0_linear_110_160' x1='149.919' y1='-0.072' x2='149.919' y2='299.97' gradientUnits='userSpaceOnUse'><stop stopColor='#F9AA4B'/><stop offset='1' stopColor='#F7931A'/></linearGradient><clipPath id='clip0_110_160'><rect width='300' height='313' fill='white'/></clipPath></defs></svg> \n \
                </div> \n \
              </div> \n \
          </div> \n \
          <div className='absolute top-full w-full flex justify-center'> \n \
              <div className='translate-y-[-50%] max-w-[200px] bg-red-600 p-5 text-white font-bold rounded-xl shadow-md shadow-white' > \n \
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.  \n \
              </div> \n \
          </div> \n \
        </div> \n \
      </div> \n \
    </div> \n \
  ) \n \
} \n \
"