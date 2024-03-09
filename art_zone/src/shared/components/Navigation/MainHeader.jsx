import React from 'react'

const MainHeader = (props) => {
  return (
    <header className='flex justify-between items-center sticky top-0 z-50 shadow-md px-8 py-3 bg-sky-950 text-white mb-8'>
      {props.children}
    </header>
  )
}

export default MainHeader
