import styles from '../page.module.css'
import Link from 'next/link'
import { pacifico } from '../layout'

export default function Navbar () {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navElements}>
                <p className={pacifico.className}>SoF</p>
                <ul>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/about'><li>About Us</li></Link>
                    <Link href='/faq'><li>FAQs</li></Link>
                    <Link href='/contact'><li>Contact</li></Link>
                </ul>
            </div>
        </nav>
    )
}