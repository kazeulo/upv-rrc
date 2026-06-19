import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'UPV Regional Research Center',
  description: 'Advancing knowledge through rigorous inquiry across the Visayas region.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-secondary antialiased">{children}</body>
    </html>
  )
}