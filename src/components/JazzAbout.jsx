import React from 'react'
import '../arrow.css';

import jazzGif from '../assets/JazzDancers/jazz.GIF'

const JazzAbout = () => {
  return (
    <div name='home' className='w-full bg-neutral-250 flex flex-col justify-between pt-contentPageTop pb-contentPageBottom'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto w-5/6 gap-10'>
          <div className="reltive  pt-10" >
              <div className='pr-10 sticky top-40'>
                  <a className="cursor-pointer hover:drop-shadow-cardHover" href='/Jazz'>
                      <div className='bg-white rounded-xl shadow-xl'>
                          <div className='p-8'>
                             
                                <img className='h-fit mx-auto' src={jazzGif} alt="/" />
                                
                          </div>
                      </div>
                  </a>
                </div>
          </div>

            <div className='flex flex-col md:items-start w-full px-2 '>
            <p className='py-4 text-5xl text-slate-500 text-center font-bold'>About Jazz </p>
              <p className='text-xl text-gray-500'>
                
              Jazz dance had a significant influence on the development of breaking in a number of ways. First, many of the foundational movements in breaking, such as the toprock and footwork, are based on jazz dance steps, including the Charleston, Lindy Hop, and other swing-era dances.
              <br/><br/>
              Second, jazz dancers often incorporated acrobatic movements into their routines, such as spins, flips, and jumps. Breaking also emphasizes acrobatic movements, and many of the signature moves in breaking, such as the windmill and the flare, require a high degree of athleticism and agility.
              <br/><br/>
              Third, jazz music played a key role in the development of breaking. Many early breaking battles took place at block parties and other events where DJs would spin funk, soul, and jazz records. The syncopated rhythms and improvisational nature of jazz music provided a natural backdrop for breaking, and many breakers would use the rhythms of the music to inspire their movements.
              <br/><br/>
              Finally, jazz culture and aesthetics have also influenced the style and attitude of breaking. Like jazz, breaking is rooted in improvisation and self-expression, and both art forms prioritize individuality and creativity over conformity. Breaking also shares jazz's focus on community and collaboration, with crews and dancers often working together to develop new moves and styles.
              <br/><br/>
              Overall, jazz dance played a significant role in the development of breaking, influencing everything from its movements to its music and cultural values.

              </p>
              
            </div>
        </div>

    </div>
    
  )
}

export default JazzAbout;