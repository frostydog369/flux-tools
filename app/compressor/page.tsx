"use client";
import { useState } from 'react';
import imageCompression from 'browser-image-compression';

export default function CompressorPage() {
  const [loading, setLoading] = useState(false);

  const handleCompress = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setLoading(true);
    const imageFile = e.target.files[0];
    const compressedFile = await imageCompression(imageFile, { maxSizeMB: 1, useWebWorker: true });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(compressedFile);
    link.download = `compressed_${imageFile.name}`;
    link.click();
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-stone-900 mb-8">Image Compressor</h1>
      
      <div className="bg-white p-12 rounded-3xl border border-stone-200 shadow-sm text-center mb-12">
        <input type="file" onChange={handleCompress} id="upload" className="hidden" />
        <label htmlFor="upload" className="cursor-pointer bg-stone-900 text-white px-6 py-3 rounded-full font-medium hover:bg-stone-700 transition-colors">
          {loading ? "Processing..." : "Select Image to Compress"}
        </label>
      </div>

      {/* How to use Guide */}
      <div className="bg-white p-8 rounded-2xl border border-stone-200 mb-8">
        <h2 className="text-lg font-bold mb-4">How to use this tool:</h2>
        <ul className="list-decimal list-inside text-stone-600 space-y-2 text-sm">
          <li>Click the "Select Image" button above.</li>
          <li>Choose any JPEG, PNG, or WebP file from your computer.</li>
          <li>The tool will automatically compress the image.</li>
          <li>Your optimized file will download automatically once ready!</li>
        </ul>
      </div>
    </div>
  );
}