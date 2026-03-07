import Link from 'next/link';

export function AIDesignBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">🚀 AI-Powered Design Lab is Here!</h2>
      <p className="mb-8">Visualize your custom gifts in seconds with our new AI tool.</p>
      <Link href="/ai-design" className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
        Try AI Design Now
      </Link>
    </div>
  );
}
