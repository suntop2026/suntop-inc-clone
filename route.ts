import { NextResponse } from "next/server"
import { readFileSync } from "fs"
import { join } from "path"

interface Product {
  id: string
  name: string
  category: string
  subcategory: string
  description: string
  price: number
  moq: number
  image: string
  imageAlt: string
  slug: string
  features?: string[]
  materials?: string[]
  colors?: string[]
  customization?: string[]
  sustainability?: {
    is_eco_friendly: boolean
    certifications: string[]
    recycled_content: string
  }
  tags?: string[]
  trending?: boolean
  new2026?: boolean
  productionTime?: string
}

interface AirtableRecord {
  id: string
  fields: {
    Name?: string
    Category?: string
    Price?: number
    MOQ?: number
    Description?: string
    Slug?: string
    Image?: Array<{
      url: string
      filename: string
    }>
  }
}

interface AirtableResponse {
  records: AirtableRecord[]
}

/**
 * Generate a URL-friendly slug from a product name
 */
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
}

const categoryFallbacks: Record<string, string> = {
  Apparel: "/custom-tshirts.jpg",
  Drinkware: "/custom-mugs.jpg",
  Tech: "/custom-usb-drives.jpg",
  Office: "/custom-pens-office.jpg",
  Bags: "/custom-tote-bags.jpg",
  Wellness: "/custom-wellness-products.jpg",
  "Home & Garden": "/custom-home-garden.jpg",
  Other: "/custom-keychains-accessories.jpg",
}

/**
 * Load products from JSON file
 */
function loadProductsFromJSON(): Product[] {
  try {
    const filePath = join(process.cwd(), "data", "products.json")
    const fileContent = readFileSync(filePath, "utf-8")
    const products: Product[] = JSON.parse(fileContent)
    console.log("[v0] Loaded", products.length, "products from JSON file")
    return products
  } catch (error) {
    console.error("[v0] Error loading products from JSON:", error)
    return []
  }
}

/**
 * Fetch products from Airtable (legacy support)
 */
async function fetchProductsFromAirtable(): Promise<Product[]> {
  const baseId = process.env.AIRTABLE_BASE_ID
  const token = process.env.AIRTABLE_TOKEN || process.env.AIRTABLE_API_KEY

  console.log("[v0] API Route - BASE_ID configured:", !!baseId)
  console.log("[v0] API Route - TOKEN configured:", !!token)

  if (!baseId || !token) {
    console.log("[v0] Airtable not configured, will use JSON fallback")
    return []
  }

  try {
    const url = `https://api.airtable.com/v0/${baseId}/Products`
    console.log("[v0] API Route - Fetching from Airtable...")

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    })

    console.log("[v0] API Route - Response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] API Route - Airtable error:", errorText)
      throw new Error(`Airtable API error: ${response.status}`)
    }

    const data: AirtableResponse = await response.json()
    console.log("[v0] API Route - Received", data.records?.length || 0, "records from Airtable")

    const products = data.records.map((record) => {
      const fields = record.fields
      const category = fields.Category || "Other"
      const name = fields.Name || "Unnamed Product"

      let imageUrl = categoryFallbacks[category] || categoryFallbacks.Other

      if (fields.Image && Array.isArray(fields.Image) && fields.Image.length > 0) {
        const attachment = fields.Image[0]
        if (attachment && attachment.url) {
          imageUrl = attachment.url
          console.log("[v0] API Route - Found image for", name, ":", imageUrl.substring(0, 50) + "...")
        }
      }

      // Generate slug from name if not provided
      const slug = fields.Slug || generateSlug(name)

      // Use provided description or generate default
      const description = fields.Description || `${name} - Custom promotional product for ${category.toLowerCase()} category`

      return {
        id: record.id,
        name,
        category,
        subcategory: category,
        price: fields.Price ?? 0,
        moq: fields.MOQ ?? 50,
        image: imageUrl,
        imageAlt: `${name} - Custom promotional product`,
        description,
        slug,
      }
    })

    console.log("[v0] API Route - Successfully processed", products.length, "products from Airtable")
    return products
  } catch (error) {
    console.error("[v0] API Route - Airtable Error:", error)
    return []
  }
}

export async function GET() {
  try {
    // First, load products from JSON file (our 210 new products)
    const jsonProducts = loadProductsFromJSON()

    // Then, try to load products from Airtable (existing products, if configured)
    const airtableProducts = await fetchProductsFromAirtable()

    // Combine: JSON products first (new products appear first), then Airtable products
    const allProducts = [...jsonProducts, ...airtableProducts]

    console.log("[v0] Total products:", allProducts.length)
    console.log("[v0] - From JSON:", jsonProducts.length)
    console.log("[v0] - From Airtable:", airtableProducts.length)

    // Transform to match expected format
    const products = allProducts.map((product) => ({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      moq: product.moq,
      image: product.image,
      imageAlt: product.imageAlt,
      description: product.description,
      slug: product.slug,
    }))

    return NextResponse.json({ products })
  } catch (error) {
    console.error("[v0] API Route - Error:", error)
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
