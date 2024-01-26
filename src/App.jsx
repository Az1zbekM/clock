import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Home, Stopwatch, Timer } from './_root/pages'
import RootLayout from './_root/RootLayout'
import AlarmClock from './_root/pages/AlarmClock'
import Time from './_root/pages/Time'
function App() {
	return (
		<>
			<main className='h-screen w-full'>
				<Routes>
					<Route element={<RootLayout />}>
						<Route path='/' element={<Home />} />
						<Route path='/stopwatch' element={<Stopwatch />} />
						<Route path='/timer' element={<Timer />} />
						<Route path='/time' element={<Time />} />
						<Route path='/alarm-clock' element={<AlarmClock />} />
					</Route>
				</Routes>
			</main>
		</>
	)
}

export default App
