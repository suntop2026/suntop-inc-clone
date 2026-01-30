import { NextResponse } from "next/server"
import { readFileSync } from "fs"
import { join } from "path"

interface Product {
  id: string
  name: string
  category: string
  subcategory: string
  description: string
  summary?: string
  price: number
  moq: number
  image: string
  images?: string[]
  imageAlt: string
  slug: string
  specs?: Record<string, string>
  price_breaks?: { quantity: number; price: number }[]
  colors?: string[]
}

/**
 * Load products from JSON file
 */
function loadProductsFromJSON(): Product[] {
  try {
    const filePath = join(process.cwd(), "data", "products.json")
    const fileContent = readFileSync(filePath, "utf-8")
    const products: Product[] = JSON.parse(fileContent)
    return products
  } catch (error) {
    console.error("Error loading products from JSON:", error)
    return []
  }
}

export async function GET() {
  try {
    const allProducts = loadProductsFromJSON()

    // Transform to match expected format, preserving extra fields for detail page
    const products = allProducts.map((product) => ({
      id: product.id,
      name: product.name,
      category: product.category,
      subcategory: product.subcategory || product.category,
      price: product.price,
      moq: product.moq,
      image: product.image,
      images: product.images || [product.image],
      imageAlt: product.imageAlt || product.name,
      description: product.description,
      summary: product.summary || product.description,
      slug: product.slug,
      specs: product.specs || {},
      price_breaks: product.price_breaks || [],
      colors: product.colors || []
    }))

    return NextResponse.json({ products })
  } catch (error) {
    console.error("API Route Error:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch products",
        message: error instanceof Error ? error.message : "Unknown error",
        products: [],
      },
      { status: 200 },
    )
  }
}
