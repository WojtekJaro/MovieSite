import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box } from '@mui/material'
const useFetchMovies = query => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		getData()
	}, [])
	const getData = async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${query}?api_key=${process.env.REACT_APP_API_KEY}`
			)
			console.log(response)
			setData(response.data.results)
		} catch (error) {
			console.log(error)
			setError('nie udało się pobrać danych')
		}
	}

	return <Box></Box>
}

export default useFetchMovies
