import React from 'react'
import useFetchMovies from '../hooks/useFetchMovies'
import MainTemplate from '../template/MainTemplate'
import Header from '../components/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'

import { Box, Container, Typography } from '@mui/material'
import { AspectRatio, Image } from '@mui/icons-material'

const HomePage = () => {
	const topRated = useFetchMovies('top_rated')
	console.log(topRated)
	if (topRated.data.length === 0) {
		return
	}

	return (
		<MainTemplate>
			<Header />
			<Box>
				<Typography level='h1'>{topRated.data[1].title}</Typography>
			</Box>
		</MainTemplate>
	)
}

export default HomePage
