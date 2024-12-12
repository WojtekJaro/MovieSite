import React, { useEffect, useState } from 'react'
import MainTemplate from '../template/MainTemplate'
import { Box, Container, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const MoviePage = () => {
	const params = useParams()
	console.log(params)
	const itemid = params.url.replace(/\D/g, '')

	const [movie, setMovie] = useState()
	const [colors, setColors] = useState([])

	useEffect(() => {
		getMovie()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleGetColors = clr => {
		setColors(clr.map(c => c.join(', ')))
	}

	const getMovie = async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${itemid}?api_key=${process.env.REACT_APP_API_KEY}&language=pl`
			)
			setMovie(response.data)
		} catch (error) {
			console.log(error)
		}
	}
	if (!movie && colors.length === 0) {
		return
	}
	return (
		<MainTemplate>
			<Container sx={{p:'70px'}}>
				<Typography>123123</Typography>
			</Container>
		</MainTemplate>
	)
}

export default MoviePage
