import React from 'react'

const Loading = () => {
  return (
      <div className='fixed inset-0 flex justify-center items-center z-100 bg-primary/10 backdrop-blur-lg flex-col'>
          <div className='w-16 h-16 border-8 border-t-primary border-transparent rounded-full animate-spin'></div>
          <p className='ml-4 text-primary font-bold text-md'>Processing...</p>
    </div>
  )
}

export default Loading