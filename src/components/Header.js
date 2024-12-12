import { Image } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import heroImage from '../assets/1.jpg'

const Header = () => {
	return (
		<Box sx={{ mt: '70px' }}>
			<Box
				component='img'
				sx={{
					height: 400,
					width: '100%',

					// maxHeight: { xs: 233, md: 167 },
					// maxWidth: { xs: 350, md: 250 },
				}}
				alt=''
				src={heroImage}></Box>
			<Typography>siema</Typography>
		</Box>
	)
}

export default Header
