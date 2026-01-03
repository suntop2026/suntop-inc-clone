import { redirect } from "next/navigation"
import { getProductBySlug } from "@/lib/static-data"

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  
  // Redirect to quote page with product name if found, otherwise just to quote page
  // This encourages users to leave their contact information
  if (product) {
    redirect(`/quote?product=${encodeURIComponent(product.name)}`)
  } else {
    // If product not found (404 case), still redirect to quote page
    redirect("/quote")
  }
}

