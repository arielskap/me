import { IWork } from '../interface/IWork'
import ratabboyIMG from '../../public/ratabboy.png'
import altaPreviaIMG from '../../public/altaPrevia.jpg'
import barMatIMG from '../../public/barMat.jpeg'

const works: Array<IWork> = [{
  title: 'RATABBOY',
  href: 'https://www.ratabboy.com.ar',
  img: ratabboyIMG,
  alt: 'https://www.ratabboy.com.ar'
}, {
  title: 'BAR-MAT',
  href: 'https://play.google.com/store/apps/details?id=com.marte.barMat',
  img: barMatIMG,
  alt: 'Menu de la App'
}, {
  title: 'ALTA PREVIA',
  href: 'https://play.google.com/store/apps/details?id=com.marte.altaPrevia',
  img: altaPreviaIMG,
  alt: 'Menu de la App'
}]

export default works
