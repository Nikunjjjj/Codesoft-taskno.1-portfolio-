import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfoilio from "./components/Portfoilio";
import SocialLinks from "./components/SocialLinks";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Portfoilio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
      

    </div>
  );
}

export default App;
