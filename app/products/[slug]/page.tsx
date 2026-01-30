import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductDetailContent } from "@/components/product-detail-content"
import { Metadata } from "next"

// This is a server component that will fetch data or pass slug to client component
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  // Capitalize and format slug for title
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return {
    title: `${title} - SUNTOP INC`,
    description: `Custom promotional ${title} from SUNTOP INC. Factory direct pricing and high-quality branding.`,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <ProductDetailContent slug={slug} />
      </main>
      <Footer />
    </>
  )
}
