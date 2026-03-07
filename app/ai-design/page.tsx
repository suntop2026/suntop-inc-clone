"use client";
import { useState } from 'react';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AIDesignLab() {
  const [prompt, setPrompt] = useState("");
  const [referenceImage, setReferenceImage] = useState<string | null>(null);
  const [referenceImageFile, setReferenceImageFile] = useState<File | null>(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 验证文件类型
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file');
      return;
    }

    // 验证文件大小 (最大 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5MB');
      return;
    }

    setReferenceImageFile(file);
    setError("");

    // 创建预览
    const reader = new FileReader();
    reader.onload = (event) => {
      setReferenceImage(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeReferenceImage = () => {
    setReferenceImage(null);
    setReferenceImageFile(null);
  };

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError("Please enter a design description");
      return;
    }

    setLoading(true);
    setError("");
    setImage("");

    try {
      const formData = new FormData();
      formData.append('prompt', prompt.trim());
      if (referenceImageFile) {
        formData.append('referenceImage', referenceImageFile);
      }

      const res = await fetch('/api/generate-image', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMsg = data.error || data.details || `Error: ${res.status}`;
        setError(errorMsg);
        return;
      }

      if (!data.image) {
        setError('No image data received from server');
        return;
      }

      setImage(data.image);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(`Error: ${errorMessage}`);
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
              Describe your vision and optionally upload a reference image to guide the design.
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
                rows={6}
                disabled={loading}
              />

              {/* Reference Image Upload Section */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  📎 Reference Image (Optional)
                </label>
                
                {!referenceImage ? (
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors cursor-pointer bg-slate-50">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={loading}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer block">
                      <p className="text-slate-600 font-medium mb-2">Click to upload or drag and drop</p>
                      <p className="text-slate-400 text-sm">PNG, JPG, GIF up to 5MB</p>
                    </label>
                  </div>
                ) : (
                  <div className="relative">
                    <img 
                      src={referenceImage} 
                      alt="Reference" 
                      className="w-full h-48 object-cover rounded-lg border-2 border-orange-300"
                    />
                    <button
                      onClick={removeReferenceImage}
                      disabled={loading}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors"
                      title="Remove reference image"
                    >
                      ✕
                    </button>
                    <p className="text-sm text-slate-500 mt-2">Reference image loaded. Click the ✕ to remove.</p>
                  </div>
                )}
              </div>

              <div className="text-sm text-slate-500 mb-6">
                <p>💡 Tip: Be specific about colors, style, and elements for best results.</p>
                <p>📸 Tip: Upload a reference image to guide the AI design generation.</p>
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
                      onError={() => {
                        setError('Failed to display the generated image.');
                        setImage("");
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
