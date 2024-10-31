import ContactSection from '@/components/contact-section'
import { Metadata } from 'next'

const title = 'contacts page tacks'
const description = 'contacts page written in next js, scss, radix form'

export const metadata: Metadata = {
    title: 'Contacts Some Company',
    description:
        'Contacts Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
    openGraph: {
        title,
        description,
        url: 'https://test-task-web-production.up.railway.app/contacts'
    },
    twitter: {
        site: 'https://test-task-web-production.up.railway.app/contacts',
        title,
        description
    }
}

const Contacts = () => {
    return (
        <>
            <ContactSection />
        </>
    )
}

export default Contacts
