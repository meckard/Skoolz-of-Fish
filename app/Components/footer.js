import styles from '../page.module.css'

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <h3>Skoolz of Fish</h3>
            <div className={styles.footerInfo}>
                <ul>
                    Store Hours:
                    <li>M-F: 12pm - 7pm</li>
                    <li>Sat: 12pm - 6pm</li>
                    <li>Sun: 12pm - 5pm</li>
                </ul>
                <p>Store Address: 8073 Mechanicsville Turnpike Mechanicsville, VA 23111</p>
                <p>Phone: 804-496-1481</p>
            </div>
            <p className={styles.designer}>Designed by Micah Eckard</p>
        </footer>
    )
}