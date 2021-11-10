import { useState, useEffect } from 'react'

const MIN_WIDTH_DESKTOP = 768

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>()

  useEffect(() => {
    import('matchmedia-polyfill')
      .then(() => {
        import('matchmedia-polyfill/matchMedia.addListener')
          .then(() => {
            const match = window.matchMedia(`(min-width: ${MIN_WIDTH_DESKTOP}px)`)
            const comprobation = (condition: boolean) => {
              if (condition) {
                setIsDesktop(true)
              } else {
                setIsDesktop(false)
              }
            }
            const changeState = (e: MediaQueryListEvent) => {
              console.log({ newWid: screen.width })
              comprobation(e.matches)
            }
            match.addListener(changeState)
            console.log({ wid: screen.width })
            comprobation(screen.width >= MIN_WIDTH_DESKTOP)
            return () => {
              match.removeListener(changeState)
            }
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return [isDesktop]
}
