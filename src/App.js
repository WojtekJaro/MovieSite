import React from 'react'

import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SerialPage from './pages/SerialPage'
import ActorsPage from './pages/ActorsPage'
import MoviePage from './pages/MoviePage'
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/MoviesPage' element={<MoviesPage />} />
				<Route path='/SerialPage' element={<SerialPage />} />
				<Route path='/ActorsPage' element={<ActorsPage />} />
				<Route path="/movie/:url" element={<MoviePage/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
