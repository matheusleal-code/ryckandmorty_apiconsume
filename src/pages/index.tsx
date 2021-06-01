import styles from '../styles/home.module.scss'

import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.stars}>

      </div>
      <div className={styles.stars2}>

      </div>
      <div className={styles.options}>
        <div className={styles.box}>
          <div className={styles.option}>
            <img src="characters.jpg" alt="" />
          </div>
          <p>Characters</p>
          <Link href="/characters">
            <a></a>
          </Link>
        </div>
        <div className={styles.box}>
          <div className={styles.option}>
            <img src="locations.jpg" alt="" />
          </div>
          <p>Locations</p>
          <a href=""></a>
        </div>
        <div className={styles.box}>
          <div className={styles.option}>
            <img src="episodes.jpeg" alt="" />
          </div>
          <p>Episodes</p>
          <a href=""></a>
        </div>
        <div className={styles.box}>
          <div className={styles.option}>
            <p>?</p>
          </div>
          <p>About</p>
          <a href=""></a>
        </div>
      </div>
    </div>
  )
}