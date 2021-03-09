const AboutMe = () => {
	const calcBirthday = (birthday: string) => {
		const birthdayDate = new Date(birthday)
		const ageTime = Date.now() - birthdayDate.getTime()
		const ageDate = new Date(ageTime);
    return Math.abs(ageDate.getUTCFullYear() - 1971);
	}
	return (
		<section className='pt-16'>
			<h2 className='pb-4 text-4xl text-center'>Sobre Mí</h2>
			<p>Nací en Buenos Aires, Argentina. Tengo {calcBirthday('03/09/1998')} Años</p>
		</section>
	)
}

export default AboutMe
