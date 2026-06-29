export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-stone-900">
      <h1 className="text-4xl font-extrabold mb-8 text-stone-900">Privacy Policy</h1>
      
      <div className="space-y-8 text-stone-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Our Commitment</h2>
          <p>At Flux Tools, we believe your data belongs to you. We have designed our tools with a "Privacy First" approach, ensuring that your files never leave your device.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">1. Local Processing</h2>
          <p>The core functionality of our image compressor and other tools happens entirely within your web browser. When you select a file, it is processed locally using your device's hardware. <strong>We do not upload your images, documents, or data to any external server.</strong></p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">2. Data Collection</h2>
          <p>We do not collect or store personal information. Because all processing occurs on your computer, we have no access to the files you work with. We do not track your usage behavior or store session logs that contain your sensitive information.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">3. Cookies and Tracking</h2>
          <p>Flux Tools does not use invasive tracking cookies. We prioritize a clean, fast experience, and we do not use third-party analytics scripts that compromise your anonymity.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">4. Third-Party Links</h2>
          <p>Our site may contain links to external resources. Once you click these links and leave Flux Tools, we are no longer responsible for your privacy or data protection. We encourage you to read the privacy policy of any external website you visit.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">5. Updates</h2>
          <p>We may update this policy occasionally to reflect changes in our tools. Please check this page periodically for the latest information.</p>
        </section>
      </div>
    </div>
  );
}