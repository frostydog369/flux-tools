export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-stone-900">
      <h1 className="text-4xl font-extrabold mb-8 text-stone-900">Terms & Conditions</h1>
      
      <div className="space-y-8 text-stone-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using Flux Tools, you signify your acceptance of these Terms & Conditions. If you do not agree to these terms, please refrain from using our services.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">2. Privacy & Data Handling</h2>
          <p>Your privacy is our priority. Flux Tools is designed to process all data locally within your web browser. This means:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>No files are uploaded to our servers.</li>
            <li>No data is stored on our databases.</li>
            <li>Once you close your browser tab, all processed data is discarded from your device's memory.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">3. User Responsibility</h2>
          <p>You are responsible for ensuring that the files you compress do not violate any copyright laws or intellectual property rights. You agree not to use this service for any unlawful activities.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">4. Limitation of Liability</h2>
          <p>Flux Tools is provided on an "as is" and "as available" basis. We do not provide any warranties, express or implied. We shall not be held liable for any data loss, quality issues, or damages resulting from the use of our tools.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">5. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of Flux Tools following any changes indicates your acknowledgment and agreement to be bound by the revised terms.</p>
        </section>
      </div>
    </div>
  );
}