import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Home from './pages/Home';
import Spinner from './components/Spinner';

function App() {
	const [loading, setLoading] = useState(false)

	return (
		<>
			<div className="container">
				<Router>
					<Header />

					<Routes>
						<Route path='/' element={<Home loading={loading} setLoading={(value) => setLoading(value)} />} />
						<Route path='/about' element={<About />} />
						<Route path='/notfound' element={<NotFound />} />
						<Route path='/*' element={<NotFound />} />
					</Routes>
				</Router>
			</div>
			<Spinner loading={loading} />
		</>
	);
}

export default App;
