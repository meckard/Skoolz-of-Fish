"use client";

import styles from "../page.module.css";
import { useState } from "react";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const nameField = (e) => {
		setName(e.target.value);
	};

	const emailField = (e) => {
		setEmail(e.target.value);
	};

	const messageField = (e) => {
		setMessage(e.target.value);
	};

	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append("access_key", process.env.CONTACT_FROM);

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json,
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			setName("");
			setEmail("");
			setMessage("");
		}
	}

	return (
		<div className={styles.contactPage}>
			<div className={styles.contactUs}>
				<h2>Contact Us</h2>
				<>
					<form
						className={styles.contactForm}
						onSubmit={handleSubmit}
					>
						<input
							type="text"
							onChange={nameField}
							value={name}
							placeholder="Name"
							name="name"
						/>
						<input
							type="email"
							onChange={emailField}
							value={email}
							placeholder="Email"
							name="email"
						/>
						<textarea
							placeholder="Message Here"
							onChange={messageField}
							value={message}
							name="message"
						></textarea>
						<button type="submit">Submit Form</button>
					</form>
				</>
			</div>
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
