import React from 'react'

import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Content</h6>
                <ul>
                    <a href="/information" className="hover:text-fuchsia-450"><li className='py-1'>Jazz</li></a>
                    <a href="/information" className="hover:text-fuchsia-450"><li className='py-1'>Capoeira</li></a>
                    <a href="/information" className="hover:text-fuchsia-450"><li className='py-1'>Kungfu</li></a>
                    <a href="/information" className="hover:text-fuchsia-450"><li className='py-1'>West African</li></a>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <a href="/information" className="hover:text-fuchsia-450"><li className='py-1'>About</li></a>
                    <a href="/information" className="hover:text-fuchsia-450"><li className='py-1'>Blog</li></a>
                    <a href="/information" className="hover:text-fuchsia-450"><li className='py-1'>Jobs</li></a>
                    <a href="/information" className="hover:text-fuchsia-450"><li className='py-1'>Partners</li></a>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Information</h6>
                <ul>
                    <a href="/information" className="hover:text-fuchsia-450"><li className='py-1'>FAQ</li></a>
                    <a href="/information" className="hover:text-fuchsia-450"><li className='py-1'>Privacy</li></a>
                    <a href="/information" className="hover:text-fuchsia-450"><li className='py-1'>Terms & Conditions</li></a>
                    <a href="/information" className="hover:text-fuchsia-450"><li className='py-1'>Policies</li></a>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Contact</h6>
                <ul>
                    <li className='py-1'>Phone: </li>
                    <li className='py-1'>617 207 7442</li>
                    <li className='py-1'>Email: </li>
                    <li className='py-1'>breakinEncyclopedia@gmail.com</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2 pl-20'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>Our latest updates, promotional offers and general news.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4 hover:text-fuchsia-450'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2023 Breakin' Encyclopedia All rights reserved</p>
        <div className='flex justify-between sm:w-[100px] pt-4 text-2xl'>
            <FaFacebook className="hover:text-fuchsia-450 cursor-pointer"/>
            <FaInstagram className="hover:text-fuchsia-450 cursor-pointer"/>
        </div>
        </div>
    </div>
  )
}

export default Footer