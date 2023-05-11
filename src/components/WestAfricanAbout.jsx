import React from 'react'
import '../arrow.css';

import WestAfricanGif from '../assets/WestAfricanDancers/westAfrican.GIF'

const WestAfricanAbout = () => {
  return (
    <div name='home' className='w-full bg-neutral-250 flex flex-col justify-between pt-contentPageTop pb-contentPageBottom'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto w-5/6 gap-10'>
          <div className="reltive  pt-10" >
              <div className='pr-10 sticky top-40'>
                  <a className="cursor-pointer hover:drop-shadow-cardHover" href='/WestAfrican'>
                      <div className='bg-white rounded-xl shadow-xl'>
                          <div className='p-8'>
                             
                                <img className='h-fit mx-auto' src={WestAfricanGif} alt="/" />
                                
                          </div>
                      </div>
                  </a>
                </div>
          </div>

            <div className='flex flex-col md:items-start w-full px-2 '>
            <p className='py-4 text-5xl text-slate-500 text-center font-bold'>About West African </p>
              <p className='text-xl text-gray-500'>
                
              Rhythmic footwork: Many West African dance styles feature rhythmic footwork that involves stomping, shuffling, and sliding the feet in intricate patterns. This type of footwork has influenced the footwork of breaking, which often involves complex, syncopated movements of the feet.
              <br/><br/>
              Spins and turns: West African dance styles often feature spinning and turning movements, such as the Yoruba dance of Nigeria, which involves rapid spins and turns. These spinning movements have influenced the development of breaking moves such as the windmill and the flare.
              <br/><br/>
              Syncopated movements: West African dance often features syncopated movements that are off-beat, which have influenced the musicality of breaking. Breakers often use these syncopated movements to create their own unique style and rhythm.
              <br/><br/>
              Expressive upper body movements: Many West African dance styles involve expressive upper body movements, such as the use of arm gestures and chest isolations. These expressive upper body movements have influenced the fluidity and expressiveness of breaking movements.
              <br/><br/>
              Call-and-response patterns: West African dance often features call-and-response patterns, where one dancer performs a movement and the other dancers respond with a complementary movement. This call-and-response style has influenced the improvisational nature of breaking, where dancers respond to each other's movements and create their own unique style on the spot.           
              
              </p>
              
            </div>
        </div>

    </div>
    
  )
}

export default WestAfricanAbout;