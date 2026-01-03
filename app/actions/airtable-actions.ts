"use server"

import type { Product } from "@/lib/static-data"
import type { AirtableProduct, AirtableResponse } from "@/lib/airtable"
import { convertAirtableToProduct } from "@/lib/airtable"

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

    // Transform Airtable records to Product format using the conversion function
    const products: Product[] = data.records.map((record) => convertAirtableToProduct(record))

    return products
  } catch (error) {
    console.error("[v0] Error fetching products from Airtable:", error)
    // Return empty array on error - component will use fallback
    return []
  }
}
