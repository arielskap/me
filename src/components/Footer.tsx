import SvgEmail from './svg/SvgEmail'
import SvgGithub from './svg/SvgGithub'
import SvgLinkedin from './svg/SvgLinkedin'
import SvgPhone from './svg/SvgPhone'

const Footer = () => {
  return (
    <footer className='hidden md:z-20 md:absolute md:bottom-0 md:left-0 md:block md:w-full md:py-4 md:border-t-2 md:border-sky-500 md:bg-black md:bg-opacity-50'>
      <div className='flex items-center justify-center space-x-12 '>
        <a aria-label="Email" rel="noopener noreferrer" href='mailto:arielvillagu@hotmail.com' target="_blank">
          <SvgEmail className='object-contain h-16 p-1 text-white border border-transparent rounded fill-current hover:border-sky-500 hover:bg-black hover:bg-opacity-90' />
        </a>
        <a aria-label="Telphone" rel="noopener noreferrer" href='tel:+5215628253550' target="_blank">
          <SvgPhone className='object-contain h-16 p-1 text-white border border-transparent rounded fill-current hover:border-sky-500 hover:bg-black hover:bg-opacity-90' />
        </a>
        <a aria-label="Linkedin" rel="noopener noreferrer" href='https://www.linkedin.com/in/ariel-villarreal' target='_blank'>
          <SvgLinkedin className='object-contain h-16 p-1 text-white border border-transparent rounded fill-current hover:border-sky-500 hover:bg-black hover:bg-opacity-90' />
        </a>
        <a aria-label="Github" rel="noopener noreferrer" href='https://github.com/arielskap' target='_blank'>
          <SvgGithub className='object-contain h-16 p-1 text-white border border-transparent rounded fill-current hover:border-sky-500 hover:bg-black hover:bg-opacity-90' />
        </a>
      </div>
      <style jsx>{`
        @media (min-width: 768px) and (max-height: 800px) {
          footer {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
