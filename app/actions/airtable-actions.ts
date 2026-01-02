"use server"

import type { Product } from "@/lib/airtable"

interface AirtableProduct {
  id: string
  fields: {
    Name: string
    Category: string
    Image?: Array<{
      id: string
      url: string
      filename: string
      size: number
      type: string
      thumbnails?: {
        small?: { url: string; width: number; height: number }
        large?: { url: string; width: number; height: number }
        full?: { url: string; width: number; height: number }
      }
    }>
    MOQ?: number
    Price?: number
  }
  createdTime: string
}

interface AirtableResponse {
  records: AirtableProduct[]
  offset?: string
}

/**
 * Server action to fetch products from Airtable
 * This keeps the API key secure on the server side
 */
export async function getProducts(): Promise<Product[]> {
  try {
    // Get credentials from server-side environment variables
    const BASE_ID = process.env.AIRTABLE_BASE_ID
    const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || "Products"
    const API_KEY = process.env.AIRTABLE_API_KEY

    // Return empty array if not configured
    if (!BASE_ID) {
      console.log("[v0] AIRTABLE_BASE_ID not configured. Using fallback products.")
      return []
    }

    const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    }

    // Add authorization if API key is provided
    if (API_KEY) {
      headers["Authorization"] = `Bearer ${API_KEY}`
    }

    const response = await fetch(url, {
      method: "GET",
      headers,
      // Cache for 5 minutes
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      throw new Error(`Airtable API error: ${response.status} ${response.statusText}`)
    }

    const data: AirtableResponse = await response.json()

    // Transform Airtable records to Product format
    const products: Product[] = data.records.map((record) => {
      // Extract image URL from Airtable's nested attachment structure
      const imageUrl =
        record.fields.Image && record.fields.Image.length > 0
          ? record.fields.Image[0].url // Get the first attachment's URL
          : "/placeholder.svg?height=400&width=400" // Fallback placeholder

      return {
        id: record.id,
        name: record.fields.Name || "Untitled Product",
        category: record.fields.Category || "Other",
        image: imageUrl,
        imageAlt: `${record.fields.Name || "Product"} - Custom promotional item`,
        moq: record.fields.MOQ || null,
        price: record.fields.Price || null,
      }
    })

    return products
  } catch (error) {
    console.error("[v0] Error fetching products from Airtable:", error)
    // Return empty array on error - component will use fallback
    return []
  }
}
