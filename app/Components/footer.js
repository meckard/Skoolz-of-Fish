import styles from '../page.module.css'
import { pacifico } from '../layout'
import FacebookIcon from './facebookIcon'
import Link from 'next/link'

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <div>
                <h3 className={pacifico.className}>Skoolz of Fish</h3>
                <div className={styles.footerInfo}>
                </div>
                <p className={styles.designer}>Designed by Micah Eckard</p>
            </div>
            <div className={styles.social}>
                <FacebookIcon/>
            </div>
            <div className={styles.miniNav}>
                <ul>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/about'><li>About Us</li></Link>
                    <Link href='/faq'><li>FAQs</li></Link>
                    <Link href='/contact'><li>Contact</li></Link>
                </ul>
            </div>
        </footer>
    )
}