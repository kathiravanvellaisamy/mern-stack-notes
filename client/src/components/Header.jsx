import React from 'react'

const Header = () => {
  return (
    <header className='w-full py-2 shadow border-b-2 border-slate-300/80'>
        <nav className='px-6 md:px-26 py-2 mx-auto max-w-6xl'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl md:text-3xl text-slate-700/80 font-semibold'>DevNote<span className='text-slate-950 font-extrabold'>X</span></h1>

                <button  className="px-6 py-2 rounded-full border-2 border-slate-100 bg-slate-100 text-slate-950 hover:bg-white hover:text-slate-950 transition duration-500 cursor-pointer">Create Note</button>
            </div>
        </nav>
    </header>
  )
}

export default Header