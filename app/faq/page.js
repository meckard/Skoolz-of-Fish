import styles from "../page.module.css";
import { pacifico } from "../layout";

export default function FAQ() {
	return (
		<div className={styles.faq}>
			<h1>Frequently Asked Questions</h1>
			<div className={styles.question}>
				<h2>What is your return policy?</h2>
				<p>
					We have a 7 day live fish guarantee on most fish. We require a
					seperate water sample that does not have dead fish in it along with
					the return. We do not cover dead fish from fighting, jumping out
					tanks, or gross negligence. Nitrates over 100, Ammonia over 0.25, and
					nitrites over 1 void any guarentee. Guarentee also does not over
					stingrays and other delicate exotic fish.
				</p>
			</div>
			<div className={styles.question}>
				<h2>Do you sell aquariums and supplies?</h2>
				<p>
					Absolutely! We sell both new and used aquariums and accessories. Used
					equipment is available intermittently as we aquire it. We can order
					new tanks and have them in within a week. The reason for any lead time
					is that we only sell quality aquariums made of quality glass like
					Perfecto, All Glass, etc. There are cheaper tanks available at big box
					stores, but the quality of them is not as good. They are prone to
					breaking, leaking, spilling, and other problems.
				</p>
			</div>
			<div className={styles.question}>
				<h2>Are prices firm?</h2>
				<p>
					There can be some flexibility! Though, some fish are more flexible
					than others. More often than not, the more fish purchased, the more we
					can negotiate price! Our prices are already reasonable, though we are
					happy to have a conversation about it! Just be realistic and
					understanding of us trying to service the Richmond area with exotic
					fish for hopefully many years to come.
				</p>
			</div>
			<div className={styles.question}>
				<h2>Why should I buy from you?</h2>
				<p>
					That's a great question! We all love ordering things online, however
					there is still great value in see what you are buying! Especially when
					it comes to live animals, seeing what you get and being able to take
					it home yourself is ideal. Even more so, you get to benefit from our
					expertice! Whether you are a new hobbyist, or have been around for a
					while, there are always new things to learn! We love not only
					supplying the exotic community, but being a part of it as well!
				</p>
			</div>
		</div>
	);
}
