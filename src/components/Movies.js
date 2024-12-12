import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { Box, Container, Typography } from '@mui/material'
import { Image } from '@mui/icons-material'
const Movies = ({ items, title, autoplay }) => {
	if (items.length === 0) {
		return
	}
	let autoplayProps = {
		autoplay: {
			delay: 1500,
		},
	}
	if (!autoplay) {
		autoplayProps = null
	}
	return (
		<Container maxWidth='lg' position='absolute'>
			<Box my={5} maxW={'8xl'} mx='auto' px={{ base: 4 }}>
				<Typography mb={4} mt={5} as='h2' size='lg' noOfLines={1}>
					{title}
				</Typography>

				<Box position='relative' zIndex='0'>
					<Swiper
						slidesPerView={1.6}
						spaceBetween={15}
						loop={true}
						{...autoplayProps}
						speed={1500}
						modules={[Autoplay]}
						breakpoints={{
							576: {
								slidesPerView: 2.5,
							},
							768: {
								slidesPerView: 3.2,
							},
							992: {
								slidesPerView: 4.5,
							},
							1200: {
								slidesPerView: 5.4,
							},
						}}>
						{items.map(item => (
							<SwiperSlide key={item.id}>
								<Link to={`/movie/${item.title.replaceAll(' ', '-').toLowerCase()}-${item.id}`}>
									<Box>
										<Box
											component='img'
											sx={{ borderRadius: '16px' }}
											src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}></Box>
										<Typography mt={7} as='h2' size='sm' noOfLines={1}>
											{item.title}
										</Typography>
										<Typography color='gray.400' fontSize='12px'>
											{item.release_date}
										</Typography>
									</Box>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
					<Box
						bg='white'
						width='40px'
						height='110%'
						position='absolute'
						top='-20px'
						right={-50}
						zIndex={1}
						boxShadow='0 0 35px 40px white'
					/>{' '}
				</Box>
			</Box>
		</Container>
	)
}

export default Movies
