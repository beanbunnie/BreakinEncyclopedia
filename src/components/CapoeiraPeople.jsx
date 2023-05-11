import React from 'react';

import dancers1 from '../assets/CapoeiraDancers/crazylegs.jpg'
import dancers2 from '../assets/CapoeiraDancers/popinpete.jpg'
import dancers3 from '../assets/CapoeiraDancers/kenswift.jpg'
import dancers4 from '../assets/CapoeiraDancers/neguin.jpg'
import dancers5 from '../assets/CapoeiraDancers/lilou.jpg'

const CapoeiraPeople = () => {
  return (
      <div name='home' className='w-full bg-neutral-250 flex flex-col justify-between pt-20 pb-20'>
        <p className='py-4 text-5xl text-slate-500 text-center font-bold'>Capoeira People </p>
        <p className='py-4 text-2xl text-slate-400 text-center px-2 pb-20'>The influential figures behind Capoeira in breakdance. </p>
          <div className='grid md:grid-cols-1 max-w-[1240px] m-auto w-5/6'>
            
            {/* Start of internal card */}
            <div className='bg-white flex text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative cursor-pointer hover:drop-shadow-cardHover mb-16'>  
                <div className="w-3/4">
                  <div className='w-80 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]'>
                    <h3 className='font-bold text-xl my-4 text-white text-center'>Crazy Legs</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    Crazy Legs: Richard Colón, aka Crazy Legs, is a pioneering breaker from the 
                    Bronx who is widely regarded as one of the most influential figures in the history 
                    of breaking. Crazy Legs began practicing capoeira in the early 1980s and was heavily 
                    influenced by its acrobatic movements and fluid style. He incorporated 
                    capoeira-inspired moves, such as the "au" and the "macaco," into his breaking routines, 
                    and his style had a significant influence on the development of power moves like the windmill and the flare.
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
                    <h3 className='font-bold text-xl my-4 text-white text-center'>Popin' Pete</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    Popin' Pete: Timothy Solomon, aka Popin' Pete, is a legendary popper and 
                    locker who began his dance career in the 1970s. Popin' Pete was heavily 
                    influenced by capoeira and incorporated its fluid, acrobatic movements into 
                    his popping and locking routines. His style had a significant influence on the 
                    fluidity and flow of movements in breaking.

                    </p>
                </div>

            </div>
            {/* End of internal card */}
            {/* Start of internal card */}
            <div className='bg-white flex text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative cursor-pointer hover:drop-shadow-cardHover mb-16'>  
                <div className="w-3/4">
                  <div className='w-80 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]'>
                    <h3 className='font-bold text-xl my-4 text-white text-center'>Ken Swift</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    Ken Swift: Kenneth Gabbert, aka Ken Swift, is a pioneering breaker 
                    from the Bronx who is known for his innovative footwork and complex transitions. 
                    Ken Swift began practicing capoeira in the 1980s and was influenced by its 
                    emphasis on flow and musicality. He incorporated capoeira-inspired movements 
                    into his breaking, particularly in his intricate footwork, and his style had a 
                    significant influence on the musicality and flow of movements in breaking.
                    </p>
                </div>

                <div className="w-1/4 float-right">
                    <img class="aspect-square p-2 rounded-full ring-8 ring-neutral-250 dark:ring-gray-500" src={dancers3} alt="Bordered avatar"></img>

                </div>

            </div>
            {/* End of internal card */}
            {/* Start of internal card */}
            <div className='bg-white flex text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative cursor-pointer hover:drop-shadow-cardHover mb-16'>  
                <div className="w-1/4 float-right">
                    <img class="aspect-square p-2 rounded-full ring-8 ring-neutral-250 dark:ring-gray-500" src={dancers4} alt="Bordered avatar"></img>
                </div>

                <div className="w-3/4">
                  <div className='w-80 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem] float-right'>
                    <h3 className='font-bold text-xl my-4 text-white text-center'>B-Boy Neguin</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    B-Boy Neguin: Neguin is a Red Bull BC One All Star and world champion from Brazil 
                    known for his capoeira-infused breaking moves and gravity-defying flips.His passion 
                    for moving his body in dynamic ways started with capoeira when he was three years 
                    old. He then began breaking in 2000, at the age of 13, falling in love with hip-hop 
                    culture when he saw some VHS tapes of popular breaking events: B-Boy Summit in USA, 
                    and Battle of the Year (the longest running event in breaking).
                    </p>
                </div>

            </div>
            {/* End of internal card */}
            {/* Start of internal card */}
            <div className='bg-white flex text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative cursor-pointer hover:drop-shadow-cardHover mb-16'>  
                <div className="w-3/4">
                  <div className='w-80 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]'>
                    <h3 className='font-bold text-xl my-4 text-white text-center'>B-Boy Lilou</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    B-Boy Lilou: Ali Ramdani, aka B-Boy Lilou, is a French-Algerian breaker who 
                    has won numerous international breaking competitions. B-Boy Lilou began practicing 
                    capoeira in the late 1990s and was heavily influenced by its acrobatic movements and dynamic style. 
                    He incorporated capoeira-inspired movements into his breaking routines, particularly in his 
                    power moves, and his style has had a significant influence on the development of breaking in Europe and beyond.
                    </p>
                </div>

                <div className="w-1/4 float-right">
                    <img class="aspect-square p-2 rounded-full ring-8 ring-neutral-250 dark:ring-gray-500" src={dancers5} alt="Bordered avatar"></img>

                </div>

            </div>
            {/* End of internal card */}

          </div>
  
      </div>
      
    )
  }

export default CapoeiraPeople;