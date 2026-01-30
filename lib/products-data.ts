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
    {
      name: "Gel Ink Pens",
      image: "/products/new/stvrt-001_1.jpg",
      fallback: SITE_LOGO,
      alt: "Acrylic Logo Patch ABS Gel Ink Pen",
    },
    {
      name: "Ballpoint Pens",
      image: "/products/new/stvrt-010_1.jpg",
      fallback: SITE_LOGO,
      alt: "Metal Ballpoint Pen with Stylus",
    },
    {
      name: "Pencils",
      image: "/products/new/stvrt-015_1.jpg",
      fallback: SITE_LOGO,
      alt: "Eco-Friendly Wooden Pencil Set",
    },
    {
      name: "Highlighters",
      image: "/products/new/stvrt-020_1.jpg",
      fallback: SITE_LOGO,
      alt: "Custom Logo Highlighter Set",
    },
  ],
  "Bags & Totes": [
    {
      name: "Canvas Totes",
      image: "/products/new/stvrt-002_1.jpg",
      fallback: SITE_LOGO,
      alt: "Poly Cotton Canvas Convertible Ribbon Tie Tote Bag",
    },
    {
      name: "Backpacks",
      image: "/products/new/stvrt-025_1.jpg",
      fallback: SITE_LOGO,
      alt: "Laptop Backpack with USB Charging Port",
    },
    {
      name: "Drawstring Bags",
      image: "/products/new/stvrt-030_1.jpg",
      fallback: SITE_LOGO,
      alt: "Recycled PET Drawstring Bag",
    },
    {
      name: "Cooler Bags",
      image: "/products/new/stvrt-035_1.jpg",
      fallback: SITE_LOGO,
      alt: "Insulated Lunch Cooler Bag",
    },
  ],
  Drinkware: [
    {
      name: "Insulated Bottles",
      image: "/products/new/stvrt-040_1.jpg",
      fallback: SITE_LOGO,
      alt: "Stainless Steel Vacuum Insulated Water Bottle",
    },
    {
      name: "Ceramic Mugs",
      image: "/products/new/stvrt-045_1.jpg",
      fallback: SITE_LOGO,
      alt: "Matte Finish Ceramic Coffee Mug",
    },
    {
      name: "Travel Tumblers",
      image: "/products/new/stvrt-050_1.jpg",
      fallback: SITE_LOGO,
      alt: "Double Wall Travel Tumbler",
    },
    {
      name: "Glassware",
      image: "/products/new/stvrt-055_1.jpg",
      fallback: SITE_LOGO,
      alt: "Custom Etched Glassware Set",
    },
  ],
  "Tech Accessories": [
    {
      name: "Power Banks",
      image: "/products/new/stvrt-060_1.jpg",
      fallback: SITE_LOGO,
      alt: "Slim Power Bank with Wireless Charging",
    },
    {
      name: "USB Drives",
      image: "/products/new/stvrt-065_1.jpg",
      fallback: SITE_LOGO,
      alt: "Custom Shape USB Flash Drive",
    },
    {
      name: "Speakers",
      image: "/products/new/stvrt-070_1.jpg",
      fallback: SITE_LOGO,
      alt: "Portable Bluetooth Speaker",
    },
    {
      name: "Chargers",
      image: "/products/new/stvrt-075_1.jpg",
      fallback: SITE_LOGO,
      alt: "Multi-Port Wall Charger",
    },
  ],
  "Office & Stationery": [
    {
      name: "Notebooks",
      image: "/products/new/stvrt-080_1.jpg",
      fallback: SITE_LOGO,
      alt: "Hardcover Journal with Elastic Closure",
    },
    {
      name: "Sticky Notes",
      image: "/products/new/stvrt-085_1.jpg",
      fallback: SITE_LOGO,
      alt: "Custom Printed Sticky Note Pad",
    },
    {
      name: "Desk Organizers",
      image: "/products/new/stvrt-090_1.jpg",
      fallback: SITE_LOGO,
      alt: "Bamboo Desk Organizer",
    },
    {
      name: "Folders",
      image: "/products/new/stvrt-095_1.jpg",
      fallback: SITE_LOGO,
      alt: "Recycled Material Presentation Folder",
    },
  ],
  Apparel: [
    {
      name: "T-Shirts",
      image: "/products/new/stvrt-100_1.jpg",
      fallback: SITE_LOGO,
      alt: "Organic Cotton Crew Neck T-Shirt",
    },
    {
      name: "Hats & Caps",
      image: "/products/new/stvrt-105_1.jpg",
      fallback: SITE_LOGO,
      alt: "Embroidered Baseball Cap",
    },
    {
      name: "Jackets",
      image: "/products/new/stvrt-110_1.jpg",
      fallback: SITE_LOGO,
      alt: "Lightweight Windbreaker Jacket",
    },
    {
      name: "Socks",
      image: "/products/new/stvrt-115_1.jpg",
      fallback: SITE_LOGO,
      alt: "Custom Knit Dress Socks",
    },
  ],
  "Health & Wellness": [
    {
      name: "Hand Sanitizers",
      image: "/products/new/stvrt-120_1.jpg",
      fallback: SITE_LOGO,
      alt: "Pocket Hand Sanitizer Spray",
    },
    {
      name: "First Aid Kits",
      image: "/products/new/stvrt-125_1.jpg",
      fallback: SITE_LOGO,
      alt: "Travel First Aid Kit",
    },
    {
      name: "Lip Balm",
      image: "/products/new/stvrt-130_1.jpg",
      fallback: SITE_LOGO,
      alt: "SPF Lip Balm with Custom Label",
    },
    {
      name: "Fitness Gear",
      image: "/products/new/stvrt-135_1.jpg",
      fallback: SITE_LOGO,
      alt: "Custom Logo Resistance Band",
    },
  ],
  "Promotional Gifts": [
    {
      name: "Keychains",
      image: "/products/new/stvrt-140_1.jpg",
      fallback: SITE_LOGO,
      alt: "Metal Key Chain with Bottle Opener",
    },
    {
      name: "Stress Relievers",
      image: "/products/new/stvrt-145_1.jpg",
      fallback: SITE_LOGO,
      alt: "Custom Shape Stress Ball",
    },
    {
      name: "Lanyards",
      image: "/products/new/stvrt-150_1.jpg",
      fallback: SITE_LOGO,
      alt: "Sublimated Polyester Lanyard",
    },
    {
      name: "Buttons & Pins",
      image: "/products/new/stvrt-155_1.jpg",
      fallback: SITE_LOGO,
      alt: "Custom Enamel Pin",
    },
  ],
  Other: [
    {
      name: "Umbrellas",
      image: "/products/new/stvrt-160_1.jpg",
      fallback: SITE_LOGO,
      alt: "Automatic Folding Umbrella",
    },
    {
      name: "Flashlights",
      image: "/products/new/stvrt-165_1.jpg",
      fallback: SITE_LOGO,
      alt: "LED Mini Flashlight Keychain",
    },
    {
      name: "Tools",
      image: "/products/new/stvrt-170_1.jpg",
      fallback: SITE_LOGO,
      alt: "Multi-Tool Kit",
    },
    {
      name: "Gift Sets",
      image: "/products/new/stvrt-172_1.jpg",
      fallback: SITE_LOGO,
      alt: "Custom Curated Gift Box",
    },
  ],
}
