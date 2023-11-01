
import  styles from './App.module.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Speakers from './components/Speakers/Speakers'
import Sponsors from './components/Sponsors/Sponsors'
import Venue from './components/Venue/Venue'

function App() {


  return (
    <section className={styles.App}>
      <Navbar/>
      <Venue/>
      <Speakers/>
      <Sponsors/>
      <Footer/>
    </section>
  )
}

export default App
