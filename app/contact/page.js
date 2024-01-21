import styles from '../page.module.css'


export default function Contact () {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.CONTACT_FORM);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }


    return (
        <div className={styles.contactPage}>
            <div className={styles.contactUs}>
                <h2>Contact Us</h2>
                <>
                <form onSubmit={handleSubmit()}>
                    <input type="text" placeholder="Name" name="name"/>
                    <input type="email" placeholder="Email" name="email"/>
                    <textarea placeholder="Message Here" name="message"></textarea>
                    <button type="submit">Submit Form</button>
                </form>
                </>
            </div>
            <div className={styles.storeInfo}>

            </div>
        </div>
    )
}