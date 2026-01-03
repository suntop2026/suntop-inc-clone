// Airtable API configuration and fetch utilities

import type { Product } from "@/lib/static-data"

export interface AirtableProduct {
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
    Description?: string
    Slug?: string
  }
  createdTime: string
}

export interface AirtableResponse {
  records: AirtableProduct[]
  offset?: string
}

/**
 * Generate a URL-friendly slug from a product name
 */
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
}

/**
 * Format price for display
 */
export function formatPrice(price: number | null): string {
  if (price === null || price === 0) return "Contact for pricing"
  return `$${price.toFixed(2)}`
}

/**
 * Format MOQ for display
 */
export function formatMOQ(moq: number | null): string {
  if (moq === null || moq === 0) return "MOQ: Contact us"
  return `MOQ: ${moq} units`
}

/**
 * Convert Airtable product record to Product interface
 */
export function convertAirtableToProduct(record: AirtableProduct): Product {
  const name = record.fields.Name || "Untitled Product"
  const category = record.fields.Category || "Other"
  
  // Extract image URL from Airtable's nested attachment structure
  const imageUrl =
    record.fields.Image && record.fields.Image.length > 0
      ? record.fields.Image[0].url
      : "/placeholder.svg?height=400&width=400"

  // Generate slug from name if not provided, or use provided slug
  const slug = record.fields.Slug || generateSlug(name)
  
  // Use provided description or generate default
  const description = record.fields.Description || `${name} - Custom promotional product for ${category.toLowerCase()} category`

  return {
    id: record.id,
    name,
    category,
    price: record.fields.Price ?? 0, // Use 0 as default instead of null to match interface
    moq: record.fields.MOQ ?? 50, // Use 50 as default instead of null to match interface
    image: imageUrl,
    imageAlt: `${name} - Custom promotional item`,
    description,
    slug,
  }
}
