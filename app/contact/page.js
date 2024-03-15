import styles from "../page.module.css";
import contactForm from "../Components/contactForm";

export default function Contact() {

	async function getServerSideProps (context) {
		const AK = process.env.CONTACT_FROM
	
		return {
			props: {
				AK
			}
		}
	}


	return (
		<div className={styles.contactPage}>
			<contactForm key={AK} />
			<div className={styles.storeInfo}>
				<h2>Store Info</h2>
				<ul className={styles.hours}>
					Store Hours:
					<li className={styles.hour}>M-F: 12pm - 7pm</li>
					<li className={styles.hour}>Sat: 12pm - 6pm</li>
					<li className={styles.hour}>Sun: 12pm - 5pm</li>
				</ul>
				<p>
					Store Address: 8073 Mechanicsville Turnpike <br /> Mechanicsville, VA
					23111
				</p>
				<p>Phone: 804-496-1481</p>
			</div>
		</div>
	);
}
