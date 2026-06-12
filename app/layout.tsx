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
  title: 'Programa LifeCare 12 Meses | Saúde, Performance e Longevidade',
  description: 'Acompanhamento médico de 12 meses com bioimpedâncias, calorimetria, wearable, dashboard evolutivo e decisões guiadas por dados.',
  keywords: ['Programa LifeCare 12 Meses', 'medicina preventiva', 'LifeCare', 'LMIS', 'performance', 'longevidade', 'metabolismo', 'bioimpedância', 'calorimetria', 'HRV'],
  authors: [{ name: 'LifeCare Performance' }],
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
  },
  openGraph: {
    title: 'Programa LifeCare 12 Meses | Medicina Guiada por Dados',
    description: 'Saúde, performance e longevidade com acompanhamento longitudinal, tecnologia e inteligência clínica.',
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

