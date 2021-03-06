import './App.scss'
import Header from './components/Header';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
function App() {
  return (
    <div className='container'>
		< Header />
		<main>
			< About />
			< Interests />
		</main>
		< Footer />
	</div>
  );
}

export default App;
