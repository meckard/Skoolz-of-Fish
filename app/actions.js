'use server'

export async function getServerSideProps (context) {
	const AK = process.env.CONTACT_FROM

	return {
		props: {
			AK
		}
	}
}