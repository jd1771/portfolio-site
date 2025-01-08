import './App.css'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'
import Projects from './components/Projects/Projects.jsx'
import FadeIn from './components/other/FadeIn.jsx'

function App() {
  return (
    <> 
      <Header />
      <FadeIn>
        <section id="about">
          <About />
        </section>
      </FadeIn>
      <FadeIn>
        <section id="experience">
          <Experience />
        </section>
      </FadeIn>
      <FadeIn>
        <section id="projects">
          <Projects />
        </section>
      </FadeIn>
    </>
  )
}

export default App
