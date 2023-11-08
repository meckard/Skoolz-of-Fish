import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.fishtank}>
        <div className={styles.tank}>
          <div className={styles.water}>
            <div className={styles.fish1}>
              <div className={styles.fishBody}></div>
              <div className={styles.fishFin1}></div>
              <div className={styles.fishFin2}></div>
              <div className={styles.fishEye}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
