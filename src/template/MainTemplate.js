import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Container } from '@mui/material'


const MainTemplate = ({ children }) => {
	return (
		<Container>
			<NavBar />
			{children}
			<Footer />
		</Container>
	)
}

export default MainTemplate
