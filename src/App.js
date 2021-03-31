import './App.scss';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import {Switch, Route} from 'react-router-dom';

function App() {
  	return (
		<div className="App">
			<div className="sidebar">
				<Navbar />
			</div>
			<div className="main-content">
				<div className="content">
					<Switch>
						<Route path="/" exact>
							<HomePage />
						</Route>
						<Route path="/about" exact>
							<AboutPage />
						</Route>
						<Route path="/portfolio" exact>
							<PortfolioPage />
						</Route>
						<Route path="/blogs" exact>
							<BlogPage />
						</Route>
						<Route path="/contact" exact>
							<ContactPage />
						</Route>
					</Switch>
				</div>  
		  	</div>
		</div>
  	)
}

export default App;
