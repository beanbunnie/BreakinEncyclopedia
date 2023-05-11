import React from 'react'
import '../arrow.css';

import LindyHopGif from '../assets/LindyHopDancers/lindyHop.GIF'

const LindyHopAbout = () => {
  return (
    <div name='home' className='w-full bg-neutral-250 flex flex-col justify-between pt-contentPageTop pb-contentPageBottom'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto w-5/6 gap-10'>
          <div className="reltive  pt-10" >
              <div className='pr-10 sticky top-40'>
                  <a className="cursor-pointer hover:drop-shadow-cardHover" href='/LindyHop'>
                      <div className='bg-white rounded-xl shadow-xl'>
                          <div className='p-8'>
                             
                                <img className='h-fit mx-auto' src={LindyHopGif} alt="/" />
                                
                          </div>
                      </div>
                  </a>
                </div>
          </div>

            <div className='flex flex-col md:items-start w-full px-2 '>
            <p className='py-4 text-5xl text-slate-500 text-center font-bold'>About Lindy Hop</p>
              <p className='text-xl text-gray-500'>
                
              The Lindy Hop is a highly energetic dance, originating in the Harlem neighborhood of New York City in the late 1920s and early 1930s. It was popularized in dance halls and ballrooms during the swing era, when big band jazz music was the dominant form of popular music.
              <br/><br/>
              The Lindy Hop is characterized by its dynamic and improvisational style, with dancers often incorporating aerials and other acrobatic moves into their routines. The dance is typically performed by a male and female partner, who move together in a series of steps and turns that are often syncopated to the music.
              <br/><br/>
              The "Lindy Hop'' itself is a foundational move in the dance. It is an eight-count move that consists of a combination of triple steps, rock steps, and swing steps. Today, the Lindy Hop is still danced around the world, both as a social dance and as a competitive dance form. It has also had a significant influence on the development of other swing dances, such as West Coast Swing and East Coast Swing.
              <br/><br/>
              The Lindy Hop had a significant influence on the development of breaking, particularly in the way that it encouraged dancers to improvise and innovate within the dance form. The Lindy Hop was one of the first social dances that incorporated elements of acrobatics and aerials, with dancers often performing lifts and throws during their routines.
              <br/><br/>
              This emphasis on athleticism and creativity was a major influence on the early breaking pioneers, who sought to push the boundaries of what was possible in dance. The Lindy Hoppers can be seen doing complex aerial sequences that are some of the most recognizable power moves today, such as the backhandspring to backflip landing on the ground. They also weren’t shy of incorporating groundwork (otherwise known as footwork in breakin’) into their dances. For example, rhythmic patterns, such as variations of russian taps, were common to break up the monotony of the upright steps. 
              <br/><br/>     
              The swing music that was popular during the era of the Lindy Hop, with its lively rhythms and horn sections, was a major influence on the development of hip-hop music. Early breakers often danced to music that often sampled portions of the same swing songs that the Lindy Loppers would dance to.
              <br/><br/>   
              In addition to its influence on the physical movements and music of breaking, the Lindy Hop also helped to shape the culture of hip-hop. Both forms of dance emphasize the importance of community and self-expression, and both have been used as a means of social and political empowerment. The Lindy Hop helped to lay the foundation for the inclusive and collaborative spirit that is a hallmark of hip-hop culture today.
  
              </p>
              
            </div>
        </div>

    </div>
    
  )
}

export default LindyHopAbout;