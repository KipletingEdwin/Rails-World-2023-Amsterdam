
import  styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Speakers from './components/Speakers/Speakers'
import Venue from './components/Venue/Venue'

function App() {


  return (
    <section className={styles.App}>
      <Navbar/>
      <Venue/>
      <Speakers/>
    </section>
  )
}

export default App
