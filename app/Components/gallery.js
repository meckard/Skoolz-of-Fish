import { fishArray } from "../Resources/FishPictureArray";
import Image from "next/image";
import styles from "../page.module.css";
import { pacifico } from "../layout";

export default function FPgallery() {
	return (
		<div>
			<h3 className={styles.galleryh3 + " " + pacifico.className}>
				Some of our Fish
			</h3>
			<section className={styles.gallery}>
				{fishArray.map((fish) => {
					return (
						<div key={fish.name} className={styles.fishCard}>
							<Image
								src={fish.picture}
								height={300}
								width={300}
								className={styles.fishPicture}
								alt={fish.name}
							/>
							<h4>{fish.name}</h4>
						</div>
					);
				})}
			</section>
		</div>
	);
}
