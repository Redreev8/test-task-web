import type { Metadata } from 'next'
import { Advent_Pro } from 'next/font/google'
import '@/style/global.scss'
import Header from '@/components/header'
import Footer from '@/components/footer'

const yanoneKaffeesatz = Advent_Pro({
    weight: ['500', '600'],
    subsets: ['cyrillic']
})

export const metadata: Metadata = {
    title: 'Some Company',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
    keywords: ['Lorem ipsum', 'Lorem', 'ipsum'],
    openGraph: {
        url: 'https://test-task-web-production.up.railway.app/',
        type: 'website',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1638132035918-90a22beaab3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                width: 1200,
                height: 630
            }
        ]
    },
    twitter: {
        site: 'https://test-task-web-production.up.railway.app',
        card: 'summary_large_image',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1638132035918-90a22beaab3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                width: 1200,
                height: 630,
                alt: 'Your alt text'
            }
        ]
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${yanoneKaffeesatz.className}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
