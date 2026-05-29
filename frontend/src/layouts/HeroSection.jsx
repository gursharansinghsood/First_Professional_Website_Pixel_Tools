import React from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../components/Button'
import HalfRemover from '../assets/HalfRemover.jpg'
import video from '../assets/Video.mp4'

const HeroSection = () => {
  return (
    <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 justify-center items-center sm:gap-10 gap-4'>

      {/* Text Section */}
      <div className='order-2 sm:order-1 text-center sm:text-left flex flex-col gap-4'>
        <p className='text-2xl lg:text-4xl font-bold text-text'>
          Remove Background Instantly With AI
        </p>

        <p className='text-xs md:text-md text-muted font-medium'>
          Upload Your Image and Get a Transparent Background in Seconds
        </p>

        <Link to="/bg-remover" className='mx-auto sm:mx-0'>
          <PrimaryButton className={'flex gap-1 text-sm items-center font-bold cursor-pointer'}>
            Try Background Remover
          </PrimaryButton>
        </Link>
      </div>

      {/* Image Section */}
      <div className='order-1 sm:order-2 w-full h-full mx-auto rounded-2xl overflow-hidden'>
        {/* <img
          src={HalfRemover}
          alt="Half Remover"
          className='object-cover object-center w-full h-full'
        /> */}
        <video src={video} autoPlay loop muted className='w-full h-full object-cover object-center w-full h-full' />
      </div>

    </div>
  )
}

export default HeroSection