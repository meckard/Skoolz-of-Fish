import styles from './page.module.css'
import AboutBlurb from './Components/aboutblurb'
import FPgallery from './Components/gallery'
import { pacifico } from './layout'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1 className={pacifico.className}>Skoolz of Fish</h1>
        <h2>Discount Freshwater Fish and Accesories</h2>
      </div>
      <AboutBlurb/>
      <FPgallery/>
    </main>
  )
}
