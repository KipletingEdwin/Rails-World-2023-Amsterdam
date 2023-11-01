// import React from 'react'
import styles from './Sponsors.module.css'

function Sponsors() {
  return (
    <section className={styles.container}>
      <div className={styles.thanksSponsors}>
      <h2> Thank You Sponsors! </h2>
        <p> Rails World could not have been possible without the generous support of Rails World sponsors and Rails Foundation members. </p>
      </div>
      <div className={styles.sponsorsListContainer}> 
      <div className={styles.sponsors}>
        <div className={styles.sponsorsList}>
        </div>
        </div>

      </div>
        

    </section>
  )
}

export default Sponsors