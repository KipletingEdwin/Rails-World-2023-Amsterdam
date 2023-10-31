import React from 'react'
import styles from './Navbar.module.css'
import railsImage from '../../assets/rails-world-logo.png'

function Navbar() {
  return (
    <section className={styles.container}>
        <div className={styles.introduction}>
            <p> Rails World 2024 will take place in Toronto. Stay tuned for more details! </p>
        </div>
        <div className={styles.navbarLinks}>
            <img src={railsImage} alt='raisl-world-2023-image'/>
            <a href='/speakers'>Speakers</a>
            <a href='/agenda'>Agenda</a>
            <a href='/speakers'>FAQs</a>
            <button>View all videos</button>
        </div>
        
    </section>
  )
}

export default Navbar