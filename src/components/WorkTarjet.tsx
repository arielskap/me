import { IWork } from '../interface/IWork'

const WorkTarjet = ({ href, img, alt, title }: IWork) => {
  return (
    <a rel="noopener noreferrer" target="_blank" href={href}>
      <figure className='relative p-1 bg-black bg-opacity-50 border rounded border-sky-500'>
        <img className='object-contain w-full h-auto rounded md:max-w-xs' src={img} alt={alt}/>
        <div className='absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full bg-black bg-opacity-75 rounded hover:bg-opacity-25'>
          <p className='px-2 text-2xl text-center text-blue-300 bg-black rounded bg-opacity-90'>{title}</p>
        </div>
      </figure>
    </a>
  )
}

export default WorkTarjet