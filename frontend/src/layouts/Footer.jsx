import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Ahref = [
  {
    href: "https://github.com/gursharansinghsood",
    icon: <FaGithub size={24} />,
    text: "Github"
  },
  {
    href: "https://www.linkedin.com/in/gursharan-singh-sood/",
    icon: <FaLinkedin size={24} />,
    text: "LinkedIn"
  },
  {
    href: "https://www.instagram.com/gursharansinghsood/",
    icon: <FaInstagram size={24} />,
    text: "Instagram"
  }
]

const Footer = () => {


  return (
    <div className='bg-surface border-t border-primary/20'>
      <div
        className="max-w-6xl w-full mx-auto  sm:px-10 px-5 py-3 flex justify-between items-center gap-5"
      >
        <div>
          <p className='text-primary text-xl font-bold'>PixelTools</p>
          <p className='text-muted text-sm text-medium'>AI Powered images tools to make your work easy</p>
        </div>
        <div className='flex sm:flex-row flex-col gap-4 justify-center'>
          {Ahref.map((item, index) => (
            <a key={index} href={item.href} target="_blank" className='flex items-center gap-2 font-medium text-muted hover:text-primary transition-all'>
              {item.icon}
              <div>{item.text}</div>
            </a>
          ))}
        </div>
      </div>

      <p className='max-w-6xl w-full mx-auto text-muted text-center py-2 border-t border-primary/20'>© 2025 PixelTools. Built with ❤️ by Prince</p>

    </div>
  )
}

export default Footer