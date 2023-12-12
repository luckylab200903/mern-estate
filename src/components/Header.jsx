import React from 'react'
import { MdScreenSearchDesktop } from "react-icons/md";
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='bg-[#E127F0] shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-[#F5EB18]'>Housing</span>
            <span className='text-[#45F08B]'>Estate</span>
        </h1>
        <form className='bg-[#D1C3F2] p-3 rounded-lg flex items-center w-28 sm:w-64'>
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none'/>
            <MdScreenSearchDesktop />
        </form>
        <ul className='flex gap-4'>
            <Link to="/"><li className='hidden sm:inline font-bold text-[#45F08B] hover:underline'>Home</li></Link>
            <Link to="/about"><li className='text-[#45F08B] font-bold hover:underline'>About</li></Link>
            <Link to="Signin"><li className='text-[#45F08B] font-bold hover:underline'>Signin</li></Link>
        </ul>
    </div>
        
    </header>
  )
}
