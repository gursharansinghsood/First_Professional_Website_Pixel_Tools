import React from 'react'
import HeroSection from '../layouts/HeroSection'
import { MdImage, MdCrop, MdCompress } from "react-icons/md";
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const popularTools = [
  {
    name: 'Background Remover',
    link: '/bg-remover',
    description:
      'Instantly remove image backgrounds with AI and download clean transparent PNG files in seconds.',
    icon: <MdImage className="text-4xl text-primary" />,
    linkname: 'Try Now',
  },

  {
    name: 'Image Resizer',
    link: '/image-resizer',
    description:
      'Resize your images for Instagram, YouTube, websites, thumbnails, and social media without losing quality.',
    icon: <MdCrop className="text-4xl text-primary" />,
    linkname: 'Coming Soon',
  },

  {
    name: 'Image Compressor',
    link: '/image-compressor',
    description:
      'Compress large images and reduce file size while maintaining high image quality for faster uploads.',
    icon: <MdCompress className="text-4xl text-primary" />,
    linkname: 'Coming Soon',
  },
]

const Home = () => {



  return (
    <div className='max-w-6xl w-full mx-auto overflow-x-hidden p-10 min-h-screen'>
      <HeroSection />

      <p className='text-center text-2xl font-bold text-text mt-10'>Popular Tools</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-4 my-3'>
        {popularTools.map((tool, idx) => (
          <Card key={tool.name} className='flex flex-col items-center gap-2'>
            <div className='text-6xl text-primary'>{tool.icon}</div>
            <span className='font-extrabold text-lg text-text'>{tool.name}</span>
            <span className='text-sm font-semibold text-text/70'>{tool.description}</span>
            {idx === 0 ? (
              <Link to={tool.link} className="text-primary font-medium text-sm border-b-2 border-transparent hover:border-primary/50" >
                {tool.linkname}
              </Link>
            ) : (
              <span className="text-muted font-medium cursor-not-allowed text-sm">
                {tool.linkname}
              </span>
            )}
          </Card>
        ))}
      </div>

    </div>
  )
}

export default Home