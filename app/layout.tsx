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
  title: 'LifeCare Performance | Inteligência Médica para Academias',
  description: 'Transforme treino em resultados mensuráveis. Sistema de performance médica que combina dados clínicos, avaliação metabólica e acompanhamento contínuo para academias premium.',
  keywords: ['academia', 'saúde', 'dados médicos', 'performance', 'fitness', 'metabolismo', 'bioimpedância'],
  authors: [{ name: 'LifeCare Performance' }],
  openGraph: {
    title: 'LifeCare Performance | Inteligência Médica para Academias',
    description: 'A saúde dos seus alunos, traduzida em dados.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#f8f9fa',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

