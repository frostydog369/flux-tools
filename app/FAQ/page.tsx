'use client';
import { useState } from 'react';
import { ChevronDown, Shrink } from 'lucide-react';
import Link from 'next/link';

const faqData = [
  { q: "Is my data secure?", a: "Yes. Flux Tools uses client-side processing, meaning your files are processed directly in your browser. No files are ever uploaded, stored, or sent to a server." },
  { q: "Is this tool really free to use?", a: "Absolutely. Flux Tools is completely free, and we have no plans to introduce hidden fees or premium-only features." },
  { q: "Do I need to install any software?", a: "No. Everything runs within your web browser. There is nothing to download or install on your computer." },
  { q: "What file formats are supported?", a: "We currently support common web formats, including JPEG, PNG, and WebP, for optimal compression results." },
  { q: "Is there a limit on the number of files I can process?", a: "There are no hard limits. You can process as many images as you need, whenever you need them." },
  { q: "Will I lose image quality?", a: "Our compressor is designed to balance file size reduction with visual quality. You should see significantly smaller file sizes with minimal to no visible difference in your images." },
  { q: "Does this work on mobile devices?", a: "Yes! Our site is responsive and designed to work on tablets and smartphones, provided your mobile browser supports the necessary file processing APIs." },
  { q: "Can I use these tools offline?", a: "Once the page has loaded in your browser, the tools function independently of our server, which means they can often continue to work even if you experience a brief internet fluctuation." },
  { q: "Are my files saved on your server after processing?", a: "No. Because we do not have a server-side component for image processing, we have no mechanism to save or retain your images. Once you refresh your browser or close the tab, all data is cleared." },
  { q: "Do you provide an API for developers?", a: "Currently, Flux Tools is focused on a user-friendly, web-based interface. We do not offer a public API at this time, but we are always looking for ways to improve our services based on user feedback." }
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-stone-200 bg-white rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-stone-50 transition-colors"
            >
              <span className="font-bold text-stone-900">{item.q}</span>
              <ChevronDown className={`w-5 h-5 text-stone-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}