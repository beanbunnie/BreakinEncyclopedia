import React from 'react';

import dancers1 from '../assets/JazzDancers/nicholasBrothers.gif'
import dancers2 from '../assets/JazzDancers/jamesBrown.gif'
import dancers3 from '../assets/JazzDancers/fredAstaire.gif'
import dancers4 from '../assets/JazzDancers/theLockers.gif'

const JazzPeople = () => {
  return (
      <div name='home' className='w-full bg-neutral-250 flex flex-col justify-between pt-20 pb-20'>
        <p className='py-4 text-5xl text-slate-500 text-center font-bold'>Jazz People </p>
        <p className='py-4 text-2xl text-slate-400 text-center px-2 pb-20'>The influential figures behind Jazz in breakdance. </p>
          <div className='grid md:grid-cols-1 max-w-[1240px] m-auto w-5/6'>
            
            {/* Start of internal card */}
            <div className='bg-white flex text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative cursor-pointer hover:drop-shadow-cardHover mb-16'>  
                <div className="w-3/4">
                  <div className='w-80 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]'>
                    <h3 className='font-bold text-xl my-4 text-white text-center'>The Nicholas Brothers</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                      The Nicholas Brothers: The Nicholas Brothers were a famous dance duo in the 1930s and 1940s 
                      who incorporated acrobatics and tap dance into their routines. They were known for their incredible 
                      athleticism and precision, and their style had a significant influence on the acrobatic movements in breaking.
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
                    <h3 className='font-bold text-xl my-4 text-white text-center'>James Brown</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    James Brown: Although not a jazz dancer per se, James Brown's performances in the 1960s and 
                    1970s were highly influential in the development of breaking. His energetic stage presence and 
                    signature dance moves, such as the "camel walk" and the "mashed potato," became popular among 
                    young people in the Bronx, and many breakers incorporated these moves into their routines.
                    </p>
                </div>

            </div>
            {/* End of internal card */}
            {/* Start of internal card */}
            <div className='bg-white flex text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative cursor-pointer hover:drop-shadow-cardHover mb-16'>  
                <div className="w-3/4">
                  <div className='w-80 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]'>
                    <h3 className='font-bold text-xl my-4 text-white text-center'>Fred Astaire</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    Fred Astaire: Fred Astaire was a famous dancer and actor in the 1930s and 1940s who is widely 
                    regarded as one of the greatest dancers of all time. His style, which blended tap dance, ballroom 
                    dance, and jazz dance, had a significant influence on the footwork and fluidity of movements in breaking.
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
                    <h3 className='font-bold text-xl my-4 text-white text-center'>The Lockers</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    The Lockers: The Lockers were a dance group from Los Angeles who were active in the 
                    1970s and 1980s. Their style, which combined jazz, funk, and street dance, had a 
                    significant influence on the style and attitude of breaking. Some of their signature moves, such 
                    as the "locking" and "popping" techniques, have become key components of breaking.
                    </p>
                </div>

            </div>
            {/* End of internal card */}

          </div>
  
      </div>
      
    )
  }

export default JazzPeople;