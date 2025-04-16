import React from 'react'


const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
        <div className="container flex h-14 items-center max-lg:pd-5">
            <a className='lg:hidden flex-1 cursor-pointer z-2' href="">
                <img src="/images/xora.svg" width={115} height={55} alt="logo" />
            </a>
            <div className="w-full border-2 border-amber-400">
                <nav>
                    <ul className='flex max-lg:block max-lg:px-12'>
                        <li className='nav-li'>
                            <NavLink />

                        </li>
                    </ul>
                </nav>
            </div>
        </div> 
    </header>
  )
}

export default Header