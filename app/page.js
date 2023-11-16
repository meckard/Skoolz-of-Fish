import styles from './page.module.css'
import Image from 'next/image'
import tetrapainting from './Resources/Images/Tetra-Oil-Painting.png'

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
        <h2>Richmond's premiere discount freshwater fish and supplies</h2>
      </div>
    </main>
  )
}
