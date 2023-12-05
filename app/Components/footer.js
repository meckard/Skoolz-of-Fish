import styles from '../page.module.css'
import { pacifico } from '../layout'

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <h3 className={pacifico.className}>Skoolz of Fish</h3>
            <div className={styles.footerInfo}>
                <ul className={styles.hours}>
                    Store Hours:
                    <li>M-F: 12pm - 7pm</li>
                    <li>Sat: 12pm - 6pm</li>
                    <li>Sun: 12pm - 5pm</li>
                </ul>
                <p>Store Address: 8073 Mechanicsville Turnpike <br/> Mechanicsville, VA 23111</p>
                <p>Phone: 804-496-1481</p>
            </div>
            <p className={styles.designer}>Designed by Micah Eckard</p>
        </footer>
    )
}