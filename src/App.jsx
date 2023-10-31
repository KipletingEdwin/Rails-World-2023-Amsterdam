
import  styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Venue from './components/Venue/Venue'

function App() {


  return (
    <section className={styles.App}>
      <Navbar/>
      <Venue/>
    </section>
  )
}

export default App
