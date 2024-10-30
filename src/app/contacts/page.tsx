import ContactSection from '@/components/contact-section'
import Head from 'next/head'

const Contacts = () => {
    const title = 'contacts page tacks'
    const description = 'contacts page written in next js, scss, radix form'
    const name = 'Test task website contacts Some Company'
    return (
        <>
            <Head>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta property="og:site_name" content={name} />
                <meta name="twitter:card" content={name} />
            </Head>
            <ContactSection />
        </>
    )
}

export default Contacts
