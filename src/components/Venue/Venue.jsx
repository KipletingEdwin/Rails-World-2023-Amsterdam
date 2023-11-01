import React from 'react'
import styles from './Venue.module.css'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Venue() {
  return (
    <section className={styles.container}>
        <div className={styles.venue}>
            <h1> That's a wrap!</h1>
            <p> October 5 & 6 </p>
            <a  href='https://goo.gl/maps/HFbht8c3Yo8ZEpi77'>Amsterdam, Beurs van Berlage</a>
            <a className= {styles.videosButton} href=''> View all videos </a>
        </div>
        <div className={styles.description}>
            <p> Rails World was a two-day, two track community conference featuring <br />
                technical talks, demos, workshops, networking, and keynotes about the latest<br />
                 features and best practices in Rails development. There were 700+ Rails<br />
                  developers in attendance, 29 speakers, and one big birthday celebration.</p>
        </div>

    </section>
   
  )
}

export default Venue