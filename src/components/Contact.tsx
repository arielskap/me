import Image from 'next/image'
import SvgLinkedin from './svg/SvgLinkedin'
import SvgPhone from './svg/SvgPhone'
import colors from 'tailwindcss/colors'
import SvgEmail from './svg/SvgEmail'
import SvgGithub from './svg/SvgGithub'
import meIMG from '../../public/me.jpg'

const Contact = () => {
  return (
    <section id="contact" className="pt-16 md:py-16 md:h-screen md:flex md:items-center md:justify-center md:px-16">
      <div className='contact-body md:p-4 md:border md:border-sky-500 md:shadow-2xl md:bg-primary md:bg-opacity-90 md:rounded-md md:max-w-xs md:w-full'>
        <h2 className='pb-4 text-4xl text-center md:hidden'>Contacto</h2>
        <div className="contact-body-social">
          <div className='pb-2 mx-auto contact-image-parent md:w-full md:pb-6'>
            <div className='relative w-full contact-image h-36 md:h-52'>
              <Image
                src={meIMG} alt="Ariel Villarreal mirando al horizonte"
                layout="fill"
                objectFit="cover"
                objectPosition="right"
                className='md:rounded-md'
                placeholder="blur"
                priority
              />
              <div id='img-border' className='absolute top-0 left-0 w-full h-full rounded' />
            </div>
          </div>
          <div className='space-y-3 md:space-y-4'>
            <div>
              <a rel="noopener noreferrer" href='mailto:arielvillagu@hotmail.com' target="_blank">
                <div className='flex items-center px-2 py-1 border border-sky-800 hover:border-sky-500 hover:bg-black hover:bg-opacity-90'>
                  <SvgEmail className='object-contain w-10 fill-current text-sky-500' />
                  <span className='ml-2'>arielvillagu@hotmail.com</span>
                </div>
              </a>
            </div>
            <div>
              <a rel="noopener noreferrer" href='tel:+5215628253550' target="_blank">
                <div className='flex items-center px-2 py-1 border border-sky-800 hover:border-sky-500 hover:bg-black hover:bg-opacity-90'>
                  <SvgPhone className='object-contain w-10 fill-current text-sky-500' />
                  <span className='ml-2'>+5215628253550</span>
                </div>
              </a>
            </div>
            <div>
              <a rel="noopener noreferrer" href='https://www.linkedin.com/in/ariel-villarreal' target="_blank">
                <div className='flex items-center px-2 py-1 border border-sky-800 hover:border-sky-500 hover:bg-black hover:bg-opacity-90'>
                  <SvgLinkedin className='object-contain w-10 fill-current text-sky-500' />
                  <span className='ml-2'>ariel-villarreal</span>
                </div>
              </a>
            </div>
            <div>
              <a rel="noopener noreferrer" href='https://github.com/arielskap' target="_blank">
                <div className='flex items-center px-2 py-1 border border-sky-800 hover:border-sky-500 hover:bg-black hover:bg-opacity-90'>
                  <SvgGithub className='object-contain w-10 fill-current text-sky-500' />
                  <span className='ml-2'>arielskap</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='flex justify-center pt-2 md:pt-4'>
          <div className='relative flex'>
            <a rel="noopener" className='z-10 w-full h-full' href='/Ariel Villarreal Curriculum.pdf' target='blank'>
              <div className='px-4 py-2 border rounded border-sky-500 md:border-sky-800 hover:border-sky-500 hover:bg-black hover:bg-opacity-90'>
                <span>Obtener CV</span>
              </div>
            </a>
            <div className='absolute w-full h-full border-b border-l rounded border-sky-500 md:border-sky-800 right-1 top-1' />
          </div>
        </div>
      </div>
      <style jsx>{`
        #img-border {
          border-right: 1px solid ${colors.sky[500]};
          border-bottom: 1px solid ${colors.sky[500]};
          border-left: 1px solid ${colors.pink[500]};
          border-top: 1px solid ${colors.pink[500]};
        }
        @media (min-width: 768px) {
          #img-border {
            border-style: none;
          }
        }
        @media (min-width: 768px) and (max-height: 800px) {
          .contact-body {
            max-width: 40rem;
          }
          .contact-body-social {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 1rem;
          }
          .contact-image-parent {
            padding-bottom: 0;
          }
          .contact-image {
            height: 100%;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
