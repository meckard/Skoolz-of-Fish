import styles from '../page.module.css'
import Link from 'next/link'

export default function Navbar () {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navElements}>
                <p>SoF</p>
                <ul>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/about'><li>About Us</li></Link>
                    <Link href='/fish'><li>Fish for Sale</li></Link>
                    <Link href='/contact'><li>Contact</li></Link>
                </ul>
            </div>
        </nav>
    )
}