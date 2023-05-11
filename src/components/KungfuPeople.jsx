import React from 'react';

import dancers1 from '../assets/KungfuDancers/brucelee.gif'
import dancers2 from '../assets/KungfuDancers/jackiechan.gif'
import dancers3 from '../assets/KungfuDancers/wutangclan.gif'
import dancers4 from '../assets/KungfuDancers/lionelaraya.gif'
import dancers5 from '../assets/KungfuDancers/katsuhiro.gif'

const KungfuPeople = () => {
  return (
      <div name='home' className='w-full bg-neutral-250 flex flex-col justify-between pt-20 pb-20'>
        <p className='py-4 text-5xl text-slate-500 text-center font-bold'>Kungfu People </p>
        <p className='py-4 text-2xl text-slate-400 text-center px-2 pb-20'>The influential figures behind Kungfu in breakdance. </p>
          <div className='grid md:grid-cols-1 max-w-[1240px] m-auto w-5/6'>
            
            {/* Start of internal card */}
            <div className='bg-white flex text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative cursor-pointer hover:drop-shadow-cardHover mb-16'>  
                <div className="w-3/4">
                  <div className='w-80 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]'>
                    <h3 className='font-bold text-xl my-4 text-white text-center'>Bruce Lee</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    Bruce Lee: Bruce Lee is perhaps the most well-known example of a Kung 
                    Fu practitioner who has had a significant influence on breaking. Lee was a 
                    pioneer in the development of Jeet Kune Do, a martial art that emphasized 
                    fluidity, speed, and efficiency in combat. His approach to martial arts had a 
                    profound impact on the breaking community, particularly in the way that breakers 
                    sought to incorporate speed and fluidity into their movements.
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
                    <h3 className='font-bold text-xl my-4 text-white text-center'>Jackie Chan</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    Jackie Chan: Jackie Chan is another Kung Fu practitioner who has had a significant 
                    impact on the development of breaking. Chan's acrobatic and high-energy approach to 
                    martial arts has been a major influence on the power moves of breaking, such as the 
                    windmill and flare. His emphasis on creativity and improvisation has also been an 
                    important influence on the freestyle aspect of breaking battles.

                    </p>
                </div>

            </div>
            {/* End of internal card */}
            {/* Start of internal card */}
            <div className='bg-white flex text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative cursor-pointer hover:drop-shadow-cardHover mb-16'>  
                <div className="w-3/4">
                  <div className='w-80 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]'>
                    <h3 className='font-bold text-xl my-4 text-white text-center'>Wu Tang Clan</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    Wu Tang Clan: While not Kung Fu practitioners in the traditional sense, the Wu 
                    Tang Clan's music and lyrics have been a major influence on the breaking culture. 
                    The group's lyrics often reference Kung Fu philosophy and history, and they have 
                    incorporated martial arts imagery and movements into their music videos and live 
                    performances. The Wu Tang Clan's influence on the breaking community has been 
                    particularly strong in the area of freestyle battles, where their emphasis on 
                    individuality and creativity has helped to shape the way that breakers approach battles and performances.
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
                    <h3 className='font-bold text-xl my-4 text-white text-center'>Lionel Araya</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    Lionel Araya: Lionel Araya, also known as B-Boy Bruce Almighty, is a notable 
                    breakdancer who has also studied Kung Fu. He has integrated his martial arts 
                    training into his breaking style, incorporating fluid and dynamic movements 
                    inspired by Kung Fu into his performances.
                    </p>
                </div>

            </div>
            {/* End of internal card */}
            {/* Start of internal card */}
            <div className='bg-white flex text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative cursor-pointer hover:drop-shadow-cardHover mb-16'>  
                <div className="w-3/4">
                  <div className='w-80 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]'>
                    <h3 className='font-bold text-xl my-4 text-white text-center'>Katsuhiro Yamamoto</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                    Katsuhiro Yamamoto: Katsuhiro Yamamoto, also known as B-Boy Lil Katsu, is a 
                    Japanese breakdancer who has trained in Kung Fu since he was a child. He has been 
                    able to incorporate his martial arts training into his breaking style, developing a 
                    unique blend of fluid Kung Fu-inspired movements and explosive power moves.
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

export default KungfuPeople;