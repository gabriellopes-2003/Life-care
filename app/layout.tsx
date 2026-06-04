import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'LifeCare Medical Performance | Medicina Preventiva Baseada em Dados',
  description: 'Programa médico premium que integra LifeCare e LMIS para revelar risco silencioso, metabolismo, performance e longevidade com dados reais.',
  keywords: ['medicina preventiva', 'LifeCare', 'LMIS', 'performance', 'longevidade', 'metabolismo', 'Visbody', 'HRV'],
  authors: [{ name: 'LifeCare Performance' }],
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
  },
  openGraph: {
    title: 'LifeCare Medical Performance | Medicina Preventiva Baseada em Dados',
    description: 'Sem achismo. Só dados para saúde, performance e longevidade.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0D1A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

