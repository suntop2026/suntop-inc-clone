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

export const NAV_DATA: CategoryNavData = {
  Apparel: [
    {
      name: "T-Shirts",
      image: "/products/apparel-1.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Custom printed t-shirts for corporate branding",
    },
    {
      name: "Hoodies",
      image: "/products/apparel-2.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Custom branded hoodies",
    },
    {
      name: "Jackets",
      image: "/products/apparel-3.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Branded jackets and outerwear",
    },
    {
      name: "Caps",
      image: "/products/apparel-4.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Custom caps and hats",
    },
  ],
  Drinkware: [
    {
      name: "Mugs",
      image: "/products/drinkware-1.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Custom coffee mugs",
    },
    {
      name: "Tumblers",
      image: "/products/drinkware-2.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Insulated travel tumblers",
    },
    {
      name: "Water Bottles",
      image: "/products/drinkware-3.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Branded water bottles",
    },
    {
      name: "Glassware",
      image: "/products/drinkware-4.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Custom glassware",
    },
  ],
  Tech: [
    {
      name: "Power Banks",
      image: "/products/tech-1.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Promotional power banks",
    },
    {
      name: "Chargers",
      image: "/products/tech-2.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Custom USB chargers",
    },
    {
      name: "Speakers",
      image: "/products/tech-3.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Bluetooth speakers",
    },
    {
      name: "Cables",
      image: "/products/tech-4.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Custom branded cables",
    },
  ],
  Office: [
    {
      name: "Notebooks",
      image: "/products/office-1.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Custom branded notebooks",
    },
    {
      name: "Pens",
      image: "/products/office-2.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Promotional pens",
    },
    {
      name: "Desk Mats",
      image: "/products/office-3.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Custom desk mats",
    },
    {
      name: "Planners",
      image: "/products/office-4.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Branded planners and organizers",
    },
  ],
  Bags: [
    {
      name: "Canvas Totes",
      image: "/products/bags-1.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Custom tote bags",
    },
    {
      name: "Backpacks",
      image: "/products/bags-2.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Branded backpacks",
    },
    {
      name: "Laptop Sleeves",
      image: "/products/bags-3.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Laptop sleeves",
    },
    {
      name: "Duffel Bags",
      image: "/products/bags-4.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Duffel bags",
    },
  ],
  Wellness: [
    {
      name: "Yoga Mats",
      image: "/products/wellness-1.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Custom yoga mats",
    },
    {
      name: "Candles",
      image: "/products/wellness-2.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Promotional candles",
    },
    {
      name: "Eye Masks",
      image: "/products/wellness-3.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Branded sleep masks",
    },
    {
      name: "Fitness Sets",
      image: "/products/wellness-4.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Fitness accessories",
    },
  ],
  "Home & Garden": [
    {
      name: "Succulents",
      image: "/products/home-1.jpg", // Already lowercase
      fallback: SITE_LOGO,
      alt: "Branded plant pots",
    },
    {
      name: "Kitchenware",
      image: "/products/home-2.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Kitchen accessories",
    },
    {
      name: "Blankets",
      image: "/products/home-3.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Custom blankets",
    },
    {
      name: "Picnic Sets",
      image: "/products/home-4.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Picnic and outdoor gear",
    },
  ],
  Other: [
    {
      name: "Keychains",
      image: "/products/other-1.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Custom keychains",
    },
    {
      name: "Stickers",
      image: "/products/other-2.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Branded stickers",
    },
    {
      name: "Gift Sets",
      image: "/products/other-3.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Custom gift sets",
    },
    {
      name: "Umbrellas",
      image: "/products/other-4.jpg", // Corrected to lowercase
      fallback: SITE_LOGO,
      alt: "Branded umbrellas",
    },
  ],
}

export const CATEGORIES = Object.keys(NAV_DATA)
