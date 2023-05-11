import React from 'react'
import '../arrow.css';

import KungfuGif from '../assets/KungfuDancers/kungfu.GIF'

const KungfuAbout = () => {
  return (
    <div name='home' className='w-full bg-neutral-250 flex flex-col justify-between pt-contentPageTop pb-contentPageBottom'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto w-5/6 gap-10'>
          <div className="reltive  pt-10" >
              <div className='pr-10 sticky top-40'>
                  <a className="cursor-pointer hover:drop-shadow-cardHover" href='/Kungfu'>
                      <div className='bg-white rounded-xl shadow-xl'>
                          <div className='p-8'>
                             
                                <img className='h-fit mx-auto' src={KungfuGif} alt="/" />
                                
                          </div>
                      </div>
                  </a>
                </div>
          </div>

            <div className='flex flex-col md:items-start w-full px-2 '>
            <p className='py-4 text-5xl text-slate-500 text-center font-bold'>About Kungfu </p>
              <p className='text-xl text-gray-500'>
                
              Kung Fu, a Chinese martial art, also had a significant influence on the development of breaking. Here are a few specific ways in which kung fu influenced breaking:
              <br/><br/>
              Stance: Kung Fu emphasizes a low, wide stance that provides a stable base for balance and power. This influence can be seen in the low stances and wide leg positions of many breaking moves, particularly in footwork and freezes.
              <br/><br/>
              Power: Kung Fu emphasizes the use of explosive power to generate maximum force in strikes and kicks. This influence can be seen in the power moves of breaking, such as the windmill, flare, and airflare, which require a high degree of strength and explosiveness.
              <br/><br/>
              Precision: Kung Fu emphasizes precise movements and control, with practitioners seeking to execute techniques with maximum efficiency and effectiveness. This influence can be seen in the clean, precise movements of many breaking moves, particularly in toprock and footwork.
              <br/><br/>
              Philosophy: Kung Fu has a rich philosophical tradition that emphasizes discipline, respect, and self-mastery. This influence can be seen in the ethos of breaking, with breakers often emphasizing the importance of dedication, hard work, and personal growth.
              <br/><br/>
              Overall, the influence of kung fu on breaking helped to shape the physical and philosophical aspects of the dance form, with breakers seeking to embody the discipline, power, and precision of martial arts while also expressing their own creativity and individuality. The incorporation of kung fu movements and techniques into breaking helped to create a dance form that reflected the diverse influences and experiences of its practitioners.            
              
              
              </p>
              
            </div>
        </div>

    </div>
    
  )
}

export default KungfuAbout;