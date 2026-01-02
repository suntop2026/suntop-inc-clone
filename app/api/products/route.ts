import { NextResponse } from "next/server"

interface AirtableRecord {
  id: string
  fields: {
    Name?: string
    Category?: string
    Price?: number
    MOQ?: number
    Image?: Array<{
      url: string
      filename: string
    }>
  }
}

interface AirtableResponse {
  records: AirtableRecord[]
}

const categoryFallbacks: Record<string, string> = {
  Apparel: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
  Drinkware: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop",
  Tech: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600&h=600&fit=crop",
  Office: "https://images.unsplash.com/photo-1586943759665-ab7d56e7e940?w=600&h=600&fit=crop",
  Bags: "https://images.unsplash.com/photo-1591348278863-da4f4c84f58e?w=600&h=600&fit=crop",
  Wellness: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop",
  "Home & Garden": "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=600&fit=crop",
  Other: "https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?w=600&h=600&fit=crop",
}

export async function GET() {
  const baseId = process.env.AIRTABLE_BASE_ID
  const token = process.env.AIRTABLE_TOKEN || process.env.AIRTABLE_API_KEY

  console.log("[v0] API Route - BASE_ID configured:", !!baseId)
  console.log("[v0] API Route - TOKEN configured:", !!token)

  if (!baseId || !token) {
    console.error("[v0] API Route - Missing environment variables")
    return NextResponse.json(
      {
        error: "Airtable not configured",
        message: "Please add AIRTABLE_BASE_ID and AIRTABLE_TOKEN in the Vars section",
        products: [],
      },
      { status: 200 },
    )
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
    console.log("[v0] API Route - Received", data.records?.length || 0, "records")

    const products = data.records.map((record) => {
      const fields = record.fields
      const category = fields.Category || "Other"

      let imageUrl = categoryFallbacks[category] || categoryFallbacks.Other

      if (fields.Image && Array.isArray(fields.Image) && fields.Image.length > 0) {
        const attachment = fields.Image[0]
        if (attachment && attachment.url) {
          imageUrl = attachment.url
          console.log("[v0] API Route - Found image for", fields.Name, ":", imageUrl.substring(0, 50) + "...")
        } else {
          console.log("[v0] API Route - No valid image URL for", fields.Name, ", using fallback")
        }
      } else {
        console.log("[v0] API Route - No image attachment for", fields.Name, ", using category fallback")
      }

      return {
        id: record.id,
        name: fields.Name || "Unnamed Product",
        category: category,
        price: fields.Price || 0,
        moq: fields.MOQ || 0,
        image: imageUrl,
        imageAlt: `${fields.Name || "Product"} - Custom promotional product`,
      }
    })

    console.log("[v0] API Route - Successfully processed", products.length, "products")

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
