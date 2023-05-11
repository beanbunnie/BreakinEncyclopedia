import React from 'react';

import dancers1 from '../assets/LindyHopDancers/jamescolter.gif'
import dancers2 from '../assets/LindyHopDancers/buddahstretch.png'
import dancers3 from '../assets/LindyHopDancers/normamiller.gif'

const LindyHopPeople = () => {
  return (
      <div name='home' className='w-full bg-neutral-250 flex flex-col justify-between pt-20 pb-20'>
        <p className='py-4 text-5xl text-slate-500 text-center font-bold'>Lindy Hop People </p>
        <p className='py-4 text-2xl text-slate-400 text-center px-2 pb-20'>The influential figures behind Lindy Hop in breakdance. </p>
          <div className='grid md:grid-cols-1 max-w-[1240px] m-auto w-5/6'>
            
            {/* Start of internal card */}
            <div className='bg-white flex text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative cursor-pointer hover:drop-shadow-cardHover mb-16'>  
                <div className="w-3/4">
                  <div className='w-80 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]'>
                    <h3 className='font-bold text-xl my-4 text-white text-center'>James "Cricket" Colter</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    James "Cricket" Colter - A pioneering b-boy from California, Cricket was known 
                    for his innovative and acrobatic breaking style. He has cited the Lindy Hop and 
                    other swing dances as major influences on his approach to breaking
                    </p>
                </div>

                <div className="w-1/4 float-right">
                    <img class="aspect-square p-2 rounded-full ring-8 ring-neutral-250 dark:ring-gray-500" src={dancers1} alt="Bordered avatar"></img>

                </div>

            </div>
            {/* End of internal card */}
            {/* Start of internal card */}
                <div className='bg-white flex text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative cursor-pointer hover:drop-shadow-cardHover mb-16'>  
                <div className="w-1/4 float-right">
                    <img class="aspect-square p-2 rounded-full ring-8 ring-neutral-250 dark:ring-gray-500" src={dancers2} alt="Bordered avatar"></img>
                </div>

                <div className="w-3/4">
                  <div className='w-80 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem] float-right'>
                    <h3 className='font-bold text-xl my-4 text-white text-center'>Buddha Stretch</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    Buddha Stretch - A dancer and choreographer who has worked with artists such 
                    as Mariah Carey and Will Smith, Buddha Stretch has also been influenced by the 
                    Lindy Hop. He has incorporated elements of swing and jazz dance into his hip-hop 
                    choreography, and has cited the Lindy Hop as a key influence on his style.


                    </p>
                </div>

            </div>
            {/* End of internal card */}
            {/* Start of internal card */}
            <div className='bg-white flex text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative cursor-pointer hover:drop-shadow-cardHover mb-16'>  
                <div className="w-3/4">
                  <div className='w-80 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]'>
                    <h3 className='font-bold text-xl my-4 text-white text-center'>Norma Miller</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    Norma Miller - Known as the "Queen of Swing," Norma Miller is a legendary Lindy 
                    Hop dancer who performed with some of the biggest swing bands of the 1930s and 1940s. 
                    While not a direct influence on breaking, her contributions to the Lindy Hop and swing dance 
                    more broadly have had a lasting impact on the history and culture of dance.

                    </p>
                </div>

                <div className="w-1/4 float-right">
                    <img class="aspect-square p-2 rounded-full ring-8 ring-neutral-250 dark:ring-gray-500" src={dancers3} alt="Bordered avatar"></img>

                </div>

            </div>
            {/* End of internal card */}


          </div>
  
      </div>
      
    )
  }

export default LindyHopPeople;