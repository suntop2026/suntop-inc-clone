// Centralized image management - Single Source of Truth
// All product images stored in /public/products/ folder for GitHub-based management

// Using a more standard local path for the fallback logo
export const SITE_LOGO = "/suntopify-logo.png" // Ensure you have this file in your /public directory

export interface NavItem {
  name: string
  image: string
  fallback?: string
  alt?: string
}

export interface CategoryNavData {
  [key: string]: NavItem[]
}

// New Core Categories based on Excel data mapping
export const CATEGORIES = [
  "Writing Instruments",
  "Bags & Totes",
  "Drinkware",
  "Tech Accessories",
  "Office & Stationery",
  "Apparel",
  "Health & Wellness",
  "Promotional Gifts",
  "Other"
]

export const NAV_DATA: CategoryNavData = {
  "Writing Instruments": [
  ],
  "Bags & Totes": [
  ],
  "Drinkware": [
    {
      name: "LARQ 23 Oz. Swig Top Water Bot...",
      image: "/products/drinkware/drinkware_1.jpg",
      fallback: SITE_LOGO,
      alt: "LARQ 23 Oz. Swig Top Water Bottle",
    },
    {
      name: "Bernal Mug 17 Oz.",
      image: "/products/drinkware/drinkware_2.jpg",
      fallback: SITE_LOGO,
      alt: "Bernal Mug 17 Oz.",
    },
    {
      name: "Fellow Stagg Pour-Over Kettle",
      image: "/products/drinkware/drinkware_3.jpg",
      fallback: SITE_LOGO,
      alt: "Fellow Stagg Pour-Over Kettle",
    },
    {
      name: "Monaco Mug 16 Oz.",
      image: "/products/drinkware/drinkware_4.jpg",
      fallback: SITE_LOGO,
      alt: "Monaco Mug 16 Oz.",
    },
  ],
  "Tech Accessories": [
  ],
  "Office & Stationery": [
  ],
  "Apparel": [
  ],
  "Health & Wellness": [
  ],
  "Promotional Gifts": [
  ],
  "Other": [
  ],
}
