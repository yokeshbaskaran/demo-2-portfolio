import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Tech from './components/Tech'
import Exp from './components/Exp'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  
  return (
    <>
      <section className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-200 selection:text-black '>       
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8 lg:px-16">
        <Navbar  />
        <Hero />
        <About/>
        <Tech />
        <Exp />
        <Project />
        <Contact />
      </div>


      </section>
    </>
  )
}

export default App
