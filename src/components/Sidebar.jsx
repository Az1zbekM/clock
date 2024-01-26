import React from 'react'
import { sidebarItems } from '../constants'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

	return (
		// sidebar with great styles
		<div className='w-[150px] h-full  bg-[#383839] '>
			<ul className='flex flex-col gap-4 mt-2'>
				{sidebarItems.map((item) => {
					return (
						<li
							key={item.name}
							className={`p-4 leftsidebar-link group`}
						>
							<NavLink
								to={item.route}
								className='text-white text-[16px] flex flex-col items-center justify-center gap-2 hover:bg-[#2f2f2f] p-2 rounded w-full'
								title={item.name}
							>
								{/* {item.icon} - {item.name} */}
									<img src={item.iconPath} alt={item.name} width={'40px'} height={'40px'} />
								{item.name}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Sidebar
