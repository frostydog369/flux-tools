import Link from 'next/link';
import { Shrink, ChevronDown } from 'lucide-react';
import type { Metadata } from 'next';

// SEO Optimized Metadata
export const metadata: Metadata = {
  title: 'Free Online Image Compressor | Reduce JPG, PNG, WebP Size',
  description: 'The best free image compressor to reduce image file size online. Securely compress JPG, PNG, and WebP images without losing quality. Fast, browser-based, and private.',
};

const faqData = [
  { q: "How can I compress images without losing quality?", a: "Our image optimizer uses advanced algorithms to reduce file size while maintaining visual clarity, ensuring your photos look sharp for the web." },
  { q: "Is this a secure image compressor?", a: "Yes. Our tool is a browser-based image compressor, meaning all processing happens locally on your device. Your files are never uploaded to a server." },
  { q: "Can I use this as a WebP compressor?", a: "Absolutely! Our tool supports WebP optimization, allowing you to reduce WebP size or convert images to optimized formats instantly." },
  { q: "Does it work as a bulk image compressor?", a: "Yes, you can process multiple files to efficiently manage your image library and improve website performance." }
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-stone-900">Flux Tools | Image Optimizer</h1>
        <p className="text-stone-600 text-lg">Fast, secure, and free tools to compress JPG, PNG, and WebP images instantly.</p>
      </header>

      <div className="flex justify-center">
        <Link 
          href="/compressor" 
          className="w-full max-w-sm p-8 border border-stone-200 bg-white rounded-3xl hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-sm flex flex-col items-center text-center"
        >
          <div className="bg-blue-50 p-3 rounded-full mb-4">
            <Shrink className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-stone-900 mb-2">Compress Image Online</h2>
          <p className="text-stone-600 text-sm leading-relaxed">The easiest drag and drop image compressor to reduce file size instantly.</p>
        </Link>
      </div>

      <section className="mt-32 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-stone-200 bg-white rounded-2xl overflow-hidden shadow-sm">
              <details className="group">
                <summary className="cursor-pointer p-6 list-none flex justify-between items-center hover:bg-stone-50 transition-colors">
                  <span className="font-bold text-stone-900">{item.q}</span>
                  <ChevronDown className="w-5 h-5 text-stone-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                  {item.a}
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}