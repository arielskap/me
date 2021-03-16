export const calcBirthday = (birthday: string) => {
	const birthdayDate = new Date(birthday)
	const ageTime = Date.now() - birthdayDate.getTime()
	const ageDate = new Date(ageTime);
	return Math.abs(ageDate.getUTCFullYear() - 1971);
}

export const generateObserver = ( callback: ( e: Element ) => void, options?: IntersectionObserverInit ): IntersectionObserver => {
	const optionsInit = options

	const observer = new IntersectionObserver( ( allElements ) => {
		const isIntersecting = ( element: IntersectionObserverEntry ) => {
			return element.isIntersecting
		}

		allElements
			.filter( isIntersecting )
			.forEach( ( element ) => {
				const nodo = element.target

				callback( nodo )
				observer.unobserve( nodo )
			} )
	}, optionsInit )

	return observer
}