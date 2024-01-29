import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const RootLayout = () => {
	return (
		<div className='h-full w-full'>
			<nav className='w-full h-[10%]'>
				<Navbar />
			</nav>

			<div className='flex h-[90%] w-full'>
				<Sidebar />
				<section className='w-full h-full bg-[#272727] flex flex-1'>
					<Outlet />
				</section>
			</div>
		</div>
	)
}

export default RootLayout
