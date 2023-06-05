import './App.css';
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Work from "./components/Work/Work"
import Contact from "./components/contact/Contact"
import { useState } from 'react';
function App() {
  const [loaded, setLoaded] = useState(false);
  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      {!loaded && (
        <div className="flex justify-center items-center h-[100vh] bg-gray-950">
          <span className="loader  p-0 m-0"></span>
        </div>
      )}
      <div onLoad={handleImageLoad} className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <Header />
        <Banner />
        <Nav />
        <About />
        <Services />
        <Work />
        <Contact />
      </div>
    </>
  );
}

export default App;
