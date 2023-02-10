import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Home from './pages/Home';
import Spinner from './components/Spinner';
import { SpinnerProvider } from './context/spinner/SpinnerContext';

function App() {
	return (
		<>
			<SpinnerProvider>
				<div className="container">
					<Router>
						<Header />

						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/notfound' element={<NotFound />} />
							<Route path='/*' element={<NotFound />} />
						</Routes>
					</Router>
				</div>
				<Spinner />
			</SpinnerProvider>
		</>
	);
}

export default App;
