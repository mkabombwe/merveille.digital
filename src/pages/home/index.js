import React from 'react'
import Cases from './components/Cases'
import Hero from '../../components/Hero'
import ContactMe from './components/ContactMe'

export default function Home() {
	return (
		<div>
			<Hero />
			<Cases />
			<ContactMe />
		</div>
	)
}
