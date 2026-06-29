import Link from 'next/link';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flux Tools | Free, Secure, & Fast Browser-Based Utilities',
  description: 'Boost your productivity with Flux Tools. Free, secure, and privacy-focused online image compression and utility tools that run entirely in your browser.',
  keywords: [
    'Flux Tools', 
    'free image compressor', 
    'online image optimizer', 
    'secure browser-based tools', 
    'privacy-focused utilities', 
    'fast image compression', 
    'no upload compression', 
    'local file processing'
  ],
  authors: [{ name: 'Flux Tools' }],
  metadataBase: new URL('https://fluxtools.com'), // Replace with your actual domain
  openGraph: {
    title: 'Flux Tools | Free, Secure, & Fast Browser-Based Utilities',
    description: 'Process files securely in your browser. No uploads, no storage, just fast results.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Font link for professional typography */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
        <nav className="p-6 border-b border-stone-200 flex justify-between items-center max-w-5xl mx-auto w-full">
          <Link href="/" className="text-2xl font-bold tracking-tight text-stone-900">Flux Tools</Link>
          <Link href="/" className="text-sm font-medium text-stone-600 hover:text-blue-600 transition-colors">Home</Link>
        </nav>
        <main className="flex-grow">{children}</main>
        <footer className="p-8 border-t border-stone-200 text-center text-sm text-stone-500">
          <Link href="/privacy" className="mx-3 hover:text-stone-900 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="mx-3 hover:text-stone-900 transition-colors">Terms & Conditions</Link>
          <Link href="/FAQ" className="mx-3 hover:text-stone-900 transition-colors">FAQ</Link>
        </footer>
      </body>
    </html>
  );
}