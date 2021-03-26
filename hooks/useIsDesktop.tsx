import { useState, useEffect } from "react";

export const useIsDesktop = () => {
	const [isDesktop, setIsDesktop] = useState(false)

	useEffect(() => {
		const match = window.matchMedia('(min-width: 768px)');
		match.addEventListener("change", (e) => {
			comprobation(e.matches)
		})
		const comprobation = (condition: boolean) => {
			if (condition) {
				setIsDesktop(true)
			} else {
				setIsDesktop(false)
			}
		}
		comprobation(screen.width >= 768)
	}, [])

	return [isDesktop]
}