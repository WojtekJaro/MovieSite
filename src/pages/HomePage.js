import React from 'react'
import useFetchMovies from '../hooks/useFetchMovies'
import MainTemplate from '../template/MainTemplate'
import Header from '../components/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import { Box, Container, Typography } from '@mui/material'
import { AspectRatio, Image } from '@mui/icons-material'
import Movies from '../components/Movies'

const HomePage = () => {
	const popular = useFetchMovies('popular')
	const topRated = useFetchMovies('top_rated')
	const upcoming = useFetchMovies('upcoming')
	console.log(popular)
	console.log(topRated)
	// if (topRated.data.length === 0) {
	// 	return
	// }

	return (
		<MainTemplate>
			<Header />
			<Movies title="Popularne" items={popular.data}></Movies>
			<Movies title="Najwyże oceniane" items={topRated.data}></Movies>
			<Movies title= "Nadchodzące" items={upcoming.data}></Movies>
		</MainTemplate>
	)
}

export default HomePage
