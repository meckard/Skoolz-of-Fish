import styles from "../page.module.css";
import { pacifico } from "../layout";

export default function AboutBlurb() {
	return (
		<div className={styles.frontPageAbout}>
			<h3 className={pacifico.className}>Who we are</h3>
			<section className={styles.AboutBlurb}>
				<p>
					We are people who have a passion for fish and conservation providing
					expertice and equipment for those who do as well!
				</p>
			</section>
		</div>
	);
}
