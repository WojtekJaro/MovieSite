import { useEffect, useState } from 'react'
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
			setData(response.data.results)
			
		} catch (error) {
			setError('wystąpil bląd')
		}
	}


	return { data, loading, error }
}

export default useFetchMovies
