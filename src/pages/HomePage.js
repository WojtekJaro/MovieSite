import React from 'react'
import MainTemplate from '../template/MainTemplate'
import Header from '../components/Header'
import { Box, Container } from '@mui/material'
import useFetchMovies from '../hooks/useFetchMovies'

const HomePage = () => {
  const topRated = useFetchMovies("top_rated");
  return (
    <MainTemplate>
        <Header/>
        <Box>
          <h2>siema</h2>
        </Box>
    </MainTemplate>
  )
}

export default HomePage
