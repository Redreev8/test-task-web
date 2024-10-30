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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://www.site.ru/" />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1638132035918-90a22beaab3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    name="twitter:url"
                    content="https://images.unsplash.com/photo-1638132035918-90a22beaab3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <meta name="twitter:site" content="@website" />
                <meta
                    name="twitter:image"
                    content="https://blog.promopult.ru/wp-content/uploads/2019/02/checklist01-1200x630.png"
                />
            </head>
            <body className={`${yanoneKaffeesatz.className}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
