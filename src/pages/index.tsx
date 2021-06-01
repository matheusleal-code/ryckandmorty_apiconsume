import Header from './components/Header'
import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <div className={styles.option}>

        </div>
        <p>Characters</p>
        <div className={styles.option}>

        </div>
        <p>Locations</p>
        <div className={styles.option}>

        </div>
        <p>Episodes</p>
        <div className={styles.option}>

        </div>
        <p>About</p>
      </div>
    </div>
  )
}