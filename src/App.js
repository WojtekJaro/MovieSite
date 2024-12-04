import './App.css'
import React from 'react'

import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SerialPage from './pages/SerialPage'
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/MoviePage' element={<MoviePage />} />
				<Route path='/SerialPage' element={<SerialPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
