import React, { useState } from 'react'

const Home = () => {
	const timeInterval = React.useRef(null)
	const [timer, setTimer] = useState(0)
	const [isRunning, setIsRunning] = useState(false)
  const [lapTimes, setLapTimes] = useState([])

	const handleStart = () => {
		if (isRunning) return
		setIsRunning(true)
		timeInterval.current = setInterval(() => {
			setTimer(prev => prev + 1)
		}, 10)
	}

	const handlePause = () => {
		if (!isRunning) return
		setIsRunning(false)
		clearInterval(timeInterval.current)
	}


	const handleReset = () => {
		setIsRunning(false)
		clearInterval(timeInterval.current)
		setTimer(0)
    setLapTimes([])
	}
  //   function to handle lap
   const handleLap = () => {
			setLapTimes(prevLapTimes => [...prevLapTimes, timer])
		}



	const formatTime = timer => {
		const minutes = Math.floor(timer / 60000)
			.toString()
			.padStart(2, '0')
		const seconds = Math.floor((timer / 100) % 60)
			.toString()
			.padStart(2, '0')
		const milliseconds = (timer % 100).toString().padStart(2, '0')

		return { minutes, seconds, milliseconds }
	}
	const { minutes, seconds, milliseconds } = formatTime(timer)

	return (
		<div className='w-full h-full overflow-y-auto flex flex-col justify-center items-center'>
			{/* timer container with styles that not let shaking the timer and the timer should be in one line , font should be Sixtyfour, sans-serif . Milliseconds should be 3 digits and in small size*/}
			<div className='timer-container flex flex-col justify-center items-center'>
				<div
					style={{ fontSize: '120px', fontFamily: 'Sixtyfour, sans-serif' }}
					className=' timer text-6xl font-bold text-[#00c6ff] text-center tracking-widest sm:text-9xl md:text-9xl lg:text-9xl xl:text-9xl 2xl:text-9xl'
				>
					<span className='time '>{minutes}</span>
					<span className='time'>:</span>
					<span className='time'>{seconds}</span>
					<span className='time'>.</span>
					<span className='time text-5xl'>{milliseconds}</span>
				</div>
			</div>
			{/* buttons container */}
			<div className='button-container flex gap-4 mt-8'>
				<button
					disabled={isRunning}
					onClick={handleStart}
					className='btn bg-gradient-to-r from-[#00c6ff] to-[#0072ff]'
				>
					Start
				</button>
				<button
					disabled={!isRunning}
					onClick={handlePause}
					className='btn bg-gradient-to-r from-[#00c6ff] to-[#0072ff]'
				>
					Pause
				</button>
				{isRunning ? (
					<button
						onClick={handleLap}
						className='btn bg-gradient-to-r from-[#00c6ff] to-[#0072ff]'
					>
						Lap
					</button>
				) : (
					<button
						onClick={handleReset}
						className='btn bg-gradient-to-r from-[#00c6ff] to-[#0072ff]'
					>
						Reset
					</button>
				)}
			</div>
      {/* div for overflow y-auto that will be like a list that will render lapped times */}
      <div className='h-[300px] w-[300px] flex flex-col justify-center items-center mt-8 text-[#00c6ff] overflow-y-auto custom-scrollbar'> 
			{/* Render lapped times in a list with a cool style and right formatter */}
			{lapTimes.map((lapTime, index) => (
				<div
					key={index}
					className='lap-container flex justify-center items-center gap-2 mt-2'
				>
					<div
						style={{ fontSize: '25px', fontFamily: 'Sixtyfour, sans-serif' }}
						className='lap-time text-2xl font-bold text-[#00c6ff] text-center tracking-widest sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl'
					>
						Lap {index + 1}: {formatTime(lapTime).minutes}:
						{formatTime(lapTime).seconds}.{formatTime(lapTime).milliseconds}
					</div>
				</div>
			))} 
      </div>
		</div>
	)
}

export default Home
