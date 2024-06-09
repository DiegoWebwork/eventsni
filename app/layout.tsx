import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
//import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Eventsni',
  description: 'Eventsni é uma plataforma para gerenciamento de eventos.',
  icons: {
    icon: '/assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
