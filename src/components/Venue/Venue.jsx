import React from 'react'
import styles from './Venue.module.css'

function Venue() {
  return (
    <section className={styles.container}>
        <div className={styles.venue}>
            <h1> That's a wrap!</h1>
            <p> October 5 & 6 </p>
            <a href=''>Amsterdam, Beurs van Berlage</a>
            <button> View all videos </button>
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