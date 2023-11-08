import styles from '../page.module.css'

export default function Navbar () {
    return (
        <nav className={styles.navbar}>
            <p>Skoolz of Fish</p>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Fish for Sale</li>
                <li>Media</li>
            </ul>
        </nav>
    )
}