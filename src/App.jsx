import './App.css'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'

function App() {
  return (
    <> 
      <Header />
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
    </>
  )
}

export default App
