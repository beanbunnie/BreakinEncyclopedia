import React from 'react'
import '../arrow.css';

import capoeiraGif from '../assets/CapoeiraDancers/capoeira.GIF'

const CapoeiraAbout = () => {
  return (
    <div name='home' className='w-full bg-neutral-250 flex flex-col justify-between pt-contentPageTop pb-contentPageBottom'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto w-5/6 gap-10'>
          <div className="reltive  pt-10" >
              <div className='pr-10 sticky top-40'>
                  <a className="cursor-pointer hover:drop-shadow-cardHover" href='/Jazz'>
                      <div className='bg-white rounded-xl shadow-xl'>
                          <div className='p-8'>
                             
                                <img className='h-fit mx-auto' src={capoeiraGif} alt="/" />
                                
                          </div>
                      </div>
                  </a>
                </div>
          </div>

            <div className='flex flex-col md:items-start w-full px-2 '>
            <p className='py-4 text-5xl text-slate-500 text-center font-bold'>About Capoeira </p>
              <p className='text-xl text-gray-500'>
                
              Capoeira, a Brazilian martial art that combines elements of dance, acrobatics, and music, had a significant influence on the development of breaking. Here are a few specific ways in which capoeira influenced breaking:
              <br/><br/>
              Acrobatics: Capoeira is known for its acrobatic movements, which involve spins, flips, and jumps. These movements were incorporated into breaking, particularly in moves like the windmill and the flare, which require a high degree of athleticism and agility.
              <br/><br/>
              Flow: Capoeira emphasizes fluidity and flow in its movements, with practitioners moving smoothly from one movement to the next. This emphasis on flow and continuity had a significant influence on the footwork and transitions in breaking, with breakers seeking to create seamless and fluid movements between different positions and poses.
              <br/><br/>
              Groundwork: Capoeira is often practiced on the ground, with practitioners performing movements like the "au" and the "negativa" from a low stance. This influence can be seen in the toprock and footwork in breaking, which often involve low stances and intricate movements on the ground.
              <br/><br/>
              Musicality: Capoeira is often performed to live music, with practitioners and musicians improvising together in a call-and-response style. This emphasis on musicality and improvisation had a significant influence on the musicality of breaking, with breakers using the rhythms and beats of the music to inspire their movements.
              <br/><br/>
              Overall, capoeira provided a rich source of inspiration for breakers, and its emphasis on acrobatics, flow, and musicality helped to shape the unique style and attitude of breaking. The incorporation of capoeira movements and techniques into breaking helped to create a dance form that reflected the creativity, innovation, and diversity of its practitioners.
              </p>
              
            </div>
        </div>

    </div>
    
  )
}

export default CapoeiraAbout;