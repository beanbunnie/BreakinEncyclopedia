import React from 'react';

import dancers1 from '../assets/WestAfricanDancers/crazylegs.png'
import dancers2 from '../assets/WestAfricanDancers/popinpete.gif'
import dancers3 from '../assets/WestAfricanDancers/boogaloosam.gif'

const WestAfricanPeople = () => {
  return (
      <div name='home' className='w-full bg-neutral-250 flex flex-col justify-between pt-20 pb-20'>
        <p className='py-4 text-5xl text-slate-500 text-center font-bold'>West African People </p>
        <p className='py-4 text-2xl text-slate-400 text-center px-2 pb-20'>The influential figures behind West African in breakdance. </p>
          <div className='grid md:grid-cols-1 max-w-[1240px] m-auto w-5/6'>
            
            {/* Start of internal card */}
            <div className='bg-white flex text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative cursor-pointer hover:drop-shadow-cardHover mb-16'>  
                <div className="w-3/4">
                  <div className='w-80 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]'>
                    <h3 className='font-bold text-xl my-4 text-white text-center'>Crazy Legs</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    Crazy Legs: Crazy Legs is a legendary b-boy and founding member of the Rock Steady Crew. 
                    He is known for his fluid, expressive style, which incorporates elements of West African dance. 
                    In an interview with the Red Bull BC One, he spoke about how he studied West African dance 
                    and incorporated its rhythmic footwork and expressive upper body movements into his breaking.
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
                    Popin' Pete: Popin' Pete is a legendary popper and member of the Electric Boogaloos crew. 
                    While he is not primarily a b-boy, he has incorporated breaking into his style and has 
                    also studied West African dance. In an interview with Dance Spirit magazine, he spoke 
                    about how the rhythms and syncopations of West African dance have influenced his movement and musicality.


                    </p>
                </div>

            </div>
            {/* End of internal card */}
            {/* Start of internal card */}
            <div className='bg-white flex text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative cursor-pointer hover:drop-shadow-cardHover mb-16'>  
                <div className="w-3/4">
                  <div className='w-80 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]'>
                    <h3 className='font-bold text-xl my-4 text-white text-center'>Boogaloo Sam</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    Boogaloo Sam: Boogaloo Sam is a legendary popper and founder of the 
                    Electric Boogaloos crew. While he is not primarily a b-boy, he has had a huge 
                    influence on the development of breaking, particularly in the area of footwork. 
                    He has also studied West African dance and has incorporated its rhythms and movements 
                    into his popping and breaking style.

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

export default WestAfricanPeople;