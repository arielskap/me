import { IWork } from "../interface/IWork"

const WorkTarjet: React.FC<IWork> = ( { href, img, alt, title } ) => {
	return (
		<a target="_blank" href={href}>
			<div className='relative p-1 border rounded border-lightBlue-500'>
				<img className='object-contain rounded md:w-full md:max-w-xs' src={img} alt={alt}/>
				<div className='absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full bg-black bg-opacity-75 rounded hover:bg-opacity-25'>
					<p className='px-2 text-2xl text-center text-blue-300 bg-black rounded bg-opacity-90'>{title}</p>
				</div>
			</div>
		</a>
	)
}

export default WorkTarjet
