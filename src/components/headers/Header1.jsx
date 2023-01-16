import React from 'react'

export const Header1 = () => {
  return (
    <div className=''>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col items-center pt-5 gap-4 bg-red-100 px-6 sm:px-10 shadow-red-300 shadow-sm'>
            <div className='w-[50px] h-[50px] rounded-full bg-blue-600'></div>
            <div className='flex flex-row md:flex-col gap-5 pb-5'>
              <p className='text-xs sm:text-sm font-semibold '>Jhon Due</p>
              <p className='text-xs sm:text-sm font-semibold '>UI Designer</p>
              <p className='text-xs sm:text-sm font-semibold '>Web Developer</p>
            </div>
          </div>
            <div className='flex-1 flex flex-col justify-center items-center h-screen px-5'>
                <div className='max-w-[500px] px-10'>
                  <p className='text-sm text-center md:text-left mt-10 md:mt-0 mb-5 sm:mb-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <h3 className='text-3xl sm:text-4xl md:text-5xl font-medium mb-10 text-center md:text-left'>Beautiful pages, Good Software</h3>
                  <div className='flex justify-center '>
                    <div className='w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] shadow-black shadow-md p-1 '>
                      <svg width="100%" height="auto" viewBox="0 0 351 320" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_108_169" style={{ maskType:'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="351" height="320"><path d="M350.5 150.5C350.5 233.343 236.843 320 154 320C71.1573 320 0.5 218.843 0.5 136C0.5 53.1573 117.657 0.5 200.5 0.5C283.343 0.5 350.5 67.6573 350.5 150.5Z" fill="#D9D9D9"/></mask><g mask="url(#mask0_108_169)"><rect x="-99" y="-25" width="489" height="371" fill="url(#paint0_linear_108_169)" fillOpacity="0.8"/><path d="M76.3438 -46.8652C93.1891 -57.5969 114.582 -58.1538 131.963 -48.3132L209.014 -4.6886C232.305 8.4979 242.422 36.7549 232.794 61.7276L220.792 92.86C216.641 103.626 209.152 112.779 199.421 118.978L141.227 156.052C116.074 172.076 82.6935 164.675 66.6695 139.523L14.0141 56.8704C-2.00999 31.7176 5.39029 -1.66287 30.5431 -17.687L76.3438 -46.8652Z" fill="url(#paint1_linear_108_169)"/><path d="M176.638 213.1C163.154 246.754 182.256 298.015 193.492 319.438C266.528 338.719 340.813 275.618 349.553 228.876C358.292 182.134 325.831 164.021 295.868 160.516C265.904 157.01 193.492 171.033 176.638 213.1Z" fill="black"/><path d="M-42.1508 386.315C-79.3886 378.112 -93.4001 332.392 -67.1527 304.733L75.0721 154.859C86.8962 142.399 104.382 137.041 121.157 140.736L169.288 151.339C206.526 159.542 220.538 205.262 194.29 232.921L52.0654 382.795C40.2413 395.255 22.7559 400.613 5.98066 396.918L-42.1508 386.315Z" fill="#9E00FF" fillOpacity="0.69"/></g><defs><linearGradient id="paint0_linear_108_169" x1="76.5" y1="-25" x2="253.935" y2="288.977" gradientUnits="userSpaceOnUse"><stop stopColor="#F5C173"/><stop offset="1" stopColor="#F99500"/></linearGradient><linearGradient id="paint1_linear_108_169" x1="225.377" y1="-19.6839" x2="40.3418" y2="98.1965" gradientUnits="userSpaceOnUse"><stop stopColor="#FF7A00"/><stop offset="1" stopColor="#FF0F00"/></linearGradient></defs></svg>
                    </div>
                  </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col justify-end items-center pb-20 mt-12 md:mt-0'>
              <div className='p-2 '>
                <h4 className='text-2xl text-center md:text-left font-bold max-w-[500px] mb-2'>The best actitud</h4>
                <p className='max-w-[400px] mb-6 text-center md:text-left text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione et sit dolor, architecto molestias optio nulla voluptas sunt facilis asperiores quibusdam eum natus voluptates aspernatur laboriosam alias? Ratione, est vero.</p>
                <div className='w-full flex justify-center md:justify-start'>
                  <button className='px-4 py-2 rounded-xl bg-black text-white font-semibold'>Start Journy</button>
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}
