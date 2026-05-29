import { Link, NavLink } from 'react-router-dom'
import NavbarLogo from '../assets/NavbarLogo.png'
import { MdHome, MdInfo, MdContactPage } from 'react-icons/md'
import { FaBars, FaTools } from 'react-icons/fa'
import { useState } from 'react'


const navLinks = [
  { name: 'Home', link: '/', icon: <MdHome /> },
  { name: 'Tools', link: '/tools', icon: <FaTools /> },
  { name: 'About', link: '/about', icon: <MdInfo /> },
  { name: 'Contact', link: '/contact', icon: <MdContactPage /> },
]


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)



  return (
    <div className='bg-surface border-b border-primary/20'>
      <div
        className="max-w-6xl w-full mx-auto py-2 sm:px-10 px-5 flex justify-between items-end"
      >
        <Link to="/" className='cursor-pointer'><img src={NavbarLogo} alt="Website Logo" className="h-10" /></Link>

        <nav className="hidden sm:flex gap-10">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.link} className={({ isActive }) => `border-b-3 pb-1 ${isActive ? 'text-primary border-primary' : 'text-muted border-transparent'} hover:border-primary transition-all flex gap-1 items-center font-bold text-md`}>
              <div className='text-2xl'>{link.icon}</div> {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="sm:hidden">
          <button className="text-2xl text-primary cursor-pointer" onClick={() => setShowMenu(!showMenu)}><FaBars /></button>
        </div>


        <div className={`fixed top-0 right-0 h-screen w-50 flex flex-col items-center bg-surface/95 backdrop-blur border border-white/10 z-50 pt-10 ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-all`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.link}
              className={({ isActive }) => `flex items-center gap-2 w-full py-4 border-b border-white ${isActive ? 'bg-primary/30' : 'bg-surface'} hover:bg-primary/30 transition-all font-semibold text-lg text-muted`}
              onClick={() => setShowMenu(false)}
            >

              <div className='flex items-center gap-2 w-full justify-center'>
                <div className='text-2xl'>{link.icon}</div> {link.name}
              </div>

            </NavLink>
          ))}
        </div>



        {showMenu && (
          <div className="fixed left-0 top-0 w-full h-screen bg-black/50 z-40" onClick={() => setShowMenu(false)}>

          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar