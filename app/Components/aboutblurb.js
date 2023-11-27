import styles from '../page.module.css'

export default function AboutBlurb () {
    return (
    <div className={styles.frontPageAbout}>
    <h3>Who we are</h3>
    <section className={styles.AboutBlurb}>
        <p>We are people who have a passion for fish and conservation
            providing expertice and equipment for those who do as well!
        </p>
    </section>
    </div>
    )
}