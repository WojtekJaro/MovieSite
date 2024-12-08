import { Box, Typography } from '@mui/material'
import React from 'react'

const Movies = ({items, title }) => {
	console.log(items)
	if (items.length === 0) {
		return
	}
	return (
		<Box my={5} maxW={'8xl'} mx='auto' px={{ base: 4 }}>
			<Typography mb={4} mt={5} as='h2' size='lg' noOfLines={1}>
                {title}
			</Typography>
		</Box>
	)
}

export default Movies
