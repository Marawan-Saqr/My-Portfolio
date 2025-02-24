import './App.css';
import { Container } from 'react-bootstrap';
import TopLogo from './Components/TopLogo/TopLogo.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Achievements from './Components/Achievements/Achievements.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <Container className='main'>
      <TopLogo />
      <Hero />
      <hr />
      <Projects />
      <hr />
      <Achievements />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </Container>
  )
}

export default App;