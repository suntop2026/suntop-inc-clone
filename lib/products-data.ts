// Centralized image management - Single Source of Truth
// All product images stored in /public/products/ folder for GitHub-based management

export const SITE_LOGO = "/images/suntopify-20logo-202.png"

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
      image: "/products/Apparel-1.jpg",
      fallback: SITE_LOGO,
      alt: "Custom printed t-shirts for corporate branding",
    },
    {
      name: "Hoodies",
      image: "/products/Apparel-2.jpg",
      fallback: SITE_LOGO,
      alt: "Custom branded hoodies",
    },
    {
      name: "Jackets",
      image: "/products/Apparel-3.jpg",
      fallback: SITE_LOGO,
      alt: "Branded jackets and outerwear",
    },
    {
      name: "Caps",
      image: "/products/Apparel-4.jpg",
      fallback: SITE_LOGO,
      alt: "Custom caps and hats",
    },
  ],
  Drinkware: [
    {
      name: "Mugs",
      image: "/products/Drinkware-1.jpg",
      fallback: SITE_LOGO,
      alt: "Custom coffee mugs",
    },
    {
      name: "Tumblers",
      image: "/products/Drinkware-2.jpg",
      fallback: SITE_LOGO,
      alt: "Insulated travel tumblers",
    },
    {
      name: "Water Bottles",
      image: "/products/Drinkware-3.jpg",
      fallback: SITE_LOGO,
      alt: "Branded water bottles",
    },
    {
      name: "Glassware",
      image: "/products/Drinkware-4.jpg",
      fallback: SITE_LOGO,
      alt: "Custom glassware",
    },
  ],
  Tech: [
    {
      name: "Power Banks",
      image: "/products/Tech-1.jpg",
      fallback: SITE_LOGO,
      alt: "Promotional power banks",
    },
    {
      name: "Chargers",
      image: "/products/Tech-2.jpg",
      fallback: SITE_LOGO,
      alt: "Custom USB chargers",
    },
    {
      name: "Speakers",
      image: "/products/Tech-3.jpg",
      fallback: SITE_LOGO,
      alt: "Bluetooth speakers",
    },
    {
      name: "Cables",
      image: "/products/Tech-4.jpg",
      fallback: SITE_LOGO,
      alt: "Custom branded cables",
    },
  ],
  Office: [
    {
      name: "Notebooks",
      image: "/products/Office-1.jpg",
      fallback: SITE_LOGO,
      alt: "Custom branded notebooks",
    },
    {
      name: "Pens",
      image: "/products/Office-2.jpg",
      fallback: SITE_LOGO,
      alt: "Promotional pens",
    },
    {
      name: "Desk Mats",
      image: "/products/Office-3.jpg",
      fallback: SITE_LOGO,
      alt: "Custom desk mats",
    },
    {
      name: "Planners",
      image: "/products/Office-4.jpg",
      fallback: SITE_LOGO,
      alt: "Branded planners and organizers",
    },
  ],
  Bags: [
    {
      name: "Canvas Totes",
      image: "/products/Bags-1.jpg",
      fallback: SITE_LOGO,
      alt: "Custom tote bags",
    },
    {
      name: "Backpacks",
      image: "/products/Bags-2.jpg",
      fallback: SITE_LOGO,
      alt: "Branded backpacks",
    },
    {
      name: "Laptop Sleeves",
      image: "/products/Bags-3.jpg",
      fallback: SITE_LOGO,
      alt: "Laptop sleeves",
    },
    {
      name: "Duffel Bags",
      image: "/products/Bags-4.jpg",
      fallback: SITE_LOGO,
      alt: "Duffel bags",
    },
  ],
  Wellness: [
    {
      name: "Yoga Mats",
      image: "/products/Wellness-1.jpg",
      fallback: SITE_LOGO,
      alt: "Custom yoga mats",
    },
    {
      name: "Candles",
      image: "/products/Wellness-2.jpg",
      fallback: SITE_LOGO,
      alt: "Promotional candles",
    },
    {
      name: "Eye Masks",
      image: "/products/Wellness-3.jpg",
      fallback: SITE_LOGO,
      alt: "Branded sleep masks",
    },
    {
      name: "Fitness Sets",
      image: "/products/Wellness-4.jpg",
      fallback: SITE_LOGO,
      alt: "Fitness accessories",
    },
  ],
  "Home & Garden": [
    {
      name: "Succulents",
      image: "/products/home-1.jpg",
      fallback: SITE_LOGO,
      alt: "Branded plant pots",
    },
    {
      name: "Kitchenware",
      image: "/products/home-2.jpg",
      fallback: SITE_LOGO,
      alt: "Kitchen accessories",
    },
    {
      name: "Blankets",
      image: "/products/home-3.jpg",
      fallback: SITE_LOGO,
      alt: "Custom blankets",
    },
    {
      name: "Picnic Sets",
      image: "/products/home-4.jpg",
      fallback: SITE_LOGO,
      alt: "Picnic and outdoor gear",
    },
  ],
  Other: [
    {
      name: "Keychains",
      image: "/products/Other-1.jpg",
      fallback: SITE_LOGO,
      alt: "Custom keychains",
    },
    {
      name: "Stickers",
      image: "/products/Other-2.jpg",
      fallback: SITE_LOGO,
      alt: "Branded stickers",
    },
    {
      name: "Gift Sets",
      image: "/products/Other-3.jpg",
      fallback: SITE_LOGO,
      alt: "Custom gift sets",
    },
    {
      name: "Umbrellas",
      image: "/products/Other-4.jpg",
      fallback: SITE_LOGO,
      alt: "Branded umbrellas",
    },
  ],
}

export const CATEGORIES = Object.keys(NAV_DATA)
