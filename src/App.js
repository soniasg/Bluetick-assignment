import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LetsConnect from './Components/LetsConnect/LetsConnect';
import Footer from './Components/Footer/Footer';
import Carousel from './Components/Carousel/Carousel';
import Products from './Components/Products/Products';
import Blogs from './Components/Blogs/Blogs';


function App() {
  return (
    <>
    <Navbar />
    <Carousel />
    <Products />
    <Blogs />
    <LetsConnect />
    <Footer />
    </>
  );
}

export default App;
