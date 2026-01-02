// Airtable API configuration and fetch utilities

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
  }
  createdTime: string
}

export interface AirtableResponse {
  records: AirtableProduct[]
  offset?: string
}

export interface Product {
  id: string
  name: string
  category: string
  image: string
  imageAlt: string
  moq: number | null
  price: number | null
}

/**
 * Format price for display
 */
export function formatPrice(price: number | null): string {
  if (price === null) return "Contact for pricing"
  return `$${price.toFixed(2)}`
}

/**
 * Format MOQ for display
 */
export function formatMOQ(moq: number | null): string {
  if (moq === null) return "MOQ: Contact us"
  return `MOQ: ${moq} units`
}
