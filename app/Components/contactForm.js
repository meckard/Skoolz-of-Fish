"use client"

import { useState } from "react";
import styles from '../page.module.css'

export default function ContactForm ({ key }) {

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

		formData.append("access_key", key);

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

}