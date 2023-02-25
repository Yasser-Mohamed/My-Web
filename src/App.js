import './App.css';
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Work from "./components/Work/Work"
import Contact from "./components/contact/Contact"
function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner/>
      <Nav/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
}

export default App;
