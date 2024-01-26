import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
    console.log(showMenu)
  }

  return (
		<nav className='h-[80px] w-full bg-[#383839] fixed'>
			<div className=' h-full w-full flex justify-between'>
				<nav className='w-[50%] h-full flex justify-start items-center '>
					<NavLink to={'/'}>
						<p className='text-[40px] ml-10 font-serif text-white'>vTimer</p>
					</NavLink>
				</nav>
				<nav className='w-[50%] h-full flex justify-end items-center mr-10  text-white'>
					{/* dropdown with great styles */}
					<div className='relative inline-block text-left'>
						<div>
							<button
								type='button'
								className='border-[3px] border-gray-700 font-bold inline-flex w-full justify-center rounded-md bg-black px-4 py-2 text-sm text-gray-700 hover:bg-black'
								id='menu-button'
								aria-expanded='true'
								aria-haspopup='true'
								onClick={toggleMenu}
							>
								Dropdown
							</button>
						</div>

						{showMenu && (
							<div className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dropdown-menu show border border-gray-800'>
								<div
									className='py-1 bg-black border border-gray-800'
									role='menu'
									aria-orientation='vertical'
									aria-labelledby='menu-button'
									tabIndex={-1}
								>
									{/* navlinks : Stopwatch, Timer and Settings */}
									<NavLink
										to={'/stopwatch'}
										className='mx-5 block px-4 py-2 text-sm text-gray-700'
									>
										<p className=''>Stopwatch</p>
										<hr className='mt-2 w-[53%]' />
									</NavLink>

									<NavLink
										to={'/timer'}
										className='mx-5 block px-4 py-2 text-sm text-gray-700'
									>
										<p className=''>Timer</p>
										<hr className='mt-2 w-[30%]' />
									</NavLink>

									<NavLink
										to={'/'}
										className='mx-5 block px-4 py-2 text-sm text-gray-700'
									>
										<p className=''>Settings</p>
										<hr className='mt-2 w-[40%]' />
									</NavLink>
								</div>
							</div>
						)}
					</div>
					{/* dropdown end */}
				</nav>
			</div>
		</nav>
	)
}

export default Navbar
