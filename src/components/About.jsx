import React from 'react'

import maggie from '../assets/maggie.jpg'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto w-2/3'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-slate-700'>About</h2>
                <p className='text-2xl py-6 text-gray-500'>

                Founded by a college breakdancer, Breakin' Encyclopedia is made by the community for the
                community with the intension of sharing the history and origins of breakdancing as well as
                names of more influential figures.

                </p>
            </div>

            {/* Start of internal card */}
            <div className='bg-white flex text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative cursor-pointer hover:drop-shadow-cardHover mt-16 mb-16'>  
                <div className="w-3/4">
                  <div className='w-80 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]'>
                    <h3 className='font-bold text-xl my-4 text-white text-center'>Maggie - Tufts University</h3>
                  </div>
                    <p className='text-xl text-gray-500 p-10'>
                      The Nicholas Brothers: The Nicholas Brothers were a famous dance duo in the 1930s and 1940s 
                      who incorporated acrobatics and tap dance into their routines. To reach out to Maggie for projects via linkedin<a href="/information" className="text-fuchsia-450 pl-2">click here</a>.
                    </p>
                </div>

                <div className="w-1/4 float-right">
                    <img class="aspect-square p-2 rounded-full ring-8 ring-neutral-250 dark:ring-gray-500" src={maggie} alt="Bordered avatar"></img>

                </div>

            </div>
            {/* End of internal card */}

            <div className='text-center'>
                <p className='text-2xl py-10 text-gray-500'> 
                Take your time and explore around, there is plenty of information on breakdance and it's origins,
                additionally feel free to reach out to either of the sites creators through the links provided above.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About