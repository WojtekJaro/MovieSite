import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Box, Container } from '@mui/material'


const MainTemplate = ({ children }) => {
	return (
		<Box>
			<NavBar />
			{children}
			<Footer />
		</Box>
	)
}

export default MainTemplate
