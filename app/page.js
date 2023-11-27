import styles from './page.module.css'
import Image from 'next/image'
import tetrapainting from './Resources/Images/Tetra-Oil-Painting.png'
import AboutBlurb from './Components/aboutblurb'
import FPgallery from './Components/gallery'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <Image src={tetrapainting}
        width={500}
        height={500}
        className={styles.tetra}
        alt='an oil painting of a neon tetra'/>
        <h1>Skoolz of Fish</h1>
        <h2>Discount Freshwater Fish and Accesories</h2>
      </div>
      <AboutBlurb/>
      <FPgallery/>
    </main>
  )
}
