import React from 'react'
import useStore from '../store'

const Time = () => {
  const data = useStore(state => state.data);
  return (
		<div>
      <h1>Time</h1>
			{data.map(el => (
				<div key={el.id} className='text-white'>
					{el.title}
				</div>
			))}
		</div>
	)
}

export default Time
