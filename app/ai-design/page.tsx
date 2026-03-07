"use client";
import { useState } from 'react';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AIDesignLab() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [debugInfo, setDebugInfo] = useState("");

  const generateImage = async () => {
    // 验证 prompt
    if (!prompt.trim()) {
      setError("Please enter a design description");
      return;
    }

    setLoading(true);
    setError("");
    setImage("");
    setDebugInfo("Starting image generation...");

    try {
      const requestBody = { prompt: prompt.trim() };
      setDebugInfo(`Sending request to API...`);
      console.log('[Frontend] Request body:', requestBody);

      const res = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('[Frontend] Response status:', res.status);
      setDebugInfo(`API responded with status: ${res.status}`);

      const data = await res.json();
      console.log('[Frontend] Response data:', data);

      if (!res.ok) {
        const errorMsg = data.error || `API Error: ${res.status}`;
        console.error('[Frontend] API error:', errorMsg);
        setError(errorMsg);
        setDebugInfo(`Error: ${errorMsg}`);
        return;
      }

      if (!data.image) {
        console.error('[Frontend] No image in response:', data);
        setError('No image data received from server');
        setDebugInfo('Error: No image data in response');
        return;
      }

      console.log('[Frontend] Image data received, length:', data.image.length);
      setDebugInfo(`Image received (${(data.image.length / 1024).toFixed(2)} KB)`);

      // 验证 Base64 格式
      if (!data.image.startsWith('data:image')) {
        console.error('[Frontend] Invalid image format:', data.image.substring(0, 50));
        setError('Invalid image format received');
        setDebugInfo('Error: Invalid image format');
        return;
      }

      // 设置图像
      setImage(data.image);
      setDebugInfo('Image loaded successfully!');
      console.log('[Frontend] Image set successfully');

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      console.error('[Frontend] Catch error:', err);
      setError(`Error: ${errorMessage}`);
      setDebugInfo(`Exception: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      generateImage();
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto py-16 px-4">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4 text-slate-900">🎨 AI Design Lab</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Transform your promotional product ideas into stunning visual designs using AI. 
              Describe your vision and let our AI create the perfect design for your brand.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Input Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">Describe Your Design</h2>
              
              <textarea 
                className="w-full p-4 border-2 border-slate-200 rounded-lg mb-4 focus:border-orange-500 focus:outline-none resize-none"
                placeholder="Example: A professional blue and gold shield logo with an upward arrow representing growth and reliability for a promotional products company..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
                rows={8}
                disabled={loading}
              />

              <div className="text-sm text-slate-500 mb-6">
                <p>💡 Tip: Be specific about colors, style, and elements for best results.</p>
                <p>Press Ctrl+Enter to generate quickly.</p>
              </div>

              <button 
                onClick={generateImage}
                disabled={loading || !prompt.trim()}
                className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all duration-200 ${
                  loading || !prompt.trim()
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin mr-2">⏳</span>
                    Generating Design...
                  </span>
                ) : (
                  "Generate Design"
                )}
              </button>

              {/* Error Display */}
              {error && (
                <div className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                  <p className="text-red-700 font-semibold">⚠️ Error</p>
                  <p className="text-red-600 text-sm mt-1">{error}</p>
                </div>
              )}

              {/* Debug Info */}
              {debugInfo && (
                <div className="mt-4 p-3 bg-blue-50 border-2 border-blue-200 rounded-lg">
                  <p className="text-blue-700 text-xs font-mono">{debugInfo}</p>
                </div>
              )}
            </div>

            {/* Preview Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">Design Preview</h2>
              
              <div className="flex-1 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 min-h-96 overflow-hidden">
                {image ? (
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img 
                      src={image} 
                      alt="AI Generated Design" 
                      className="max-w-full max-h-full rounded-lg shadow-md object-contain"
                      onError={(e) => {
                        console.error('[Frontend] Image display error');
                        setError('Failed to display the generated image.');
                        setImage("");
                      }}
                      onLoad={() => {
                        console.log('[Frontend] Image loaded successfully in DOM');
                        setDebugInfo('Image displayed successfully!');
                      }}
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-slate-400 text-lg">✨ Your AI-generated design will appear here</p>
                    <p className="text-slate-300 text-sm mt-2">Describe your idea and click "Generate Design"</p>
                  </div>
                )}
              </div>

              {image && (
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = image;
                    link.download = 'ai-design.png';
                    link.click();
                  }}
                  className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                >
                  ⬇️ Download Design
                </button>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-16 max-w-4xl mx-auto bg-blue-50 border-l-4 border-blue-500 rounded-lg p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">💼 Perfect for Promotional Products</h3>
            <p className="text-blue-800 mb-4">
              Use AI Design Lab to visualize custom promotional products before production:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
              <li>✓ Custom branded apparel designs</li>
              <li>✓ Logo and packaging concepts</li>
              <li>✓ Corporate gift ideas</li>
              <li>✓ Event merchandise layouts</li>
              <li>✓ Product mockups and variations</li>
              <li>✓ Color and style exploration</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
