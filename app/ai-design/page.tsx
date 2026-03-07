"use client";
import { useState } from 'react';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AIDesignLab() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    const res = await fetch('/api/generate-image', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
    });
    const blob = await res.blob();
    setImage(URL.createObjectURL(blob));
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-8">🎨 AI Design Lab</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <textarea 
              className="w-full p-4 border rounded-lg mb-4" 
              placeholder="Describe your gift idea..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button 
              onClick={generateImage}
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold"
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Design"}
            </button>
          </div>
          <div className="border rounded-lg p-4 flex items-center justify-center bg-gray-50">
            {image ? <img src={image} alt="AI Generated" className="max-w-full rounded" /> : "Your design will appear here"}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
