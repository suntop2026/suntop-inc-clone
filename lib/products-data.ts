// Centralized navigation data - Single Source of Truth for all mega menu items
// Used by navbar and product catalog pages
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
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Custom printed t-shirts for corporate branding",
    },
    {
      name: "Hoodies",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Custom branded hoodies",
    },
    {
      name: "Jackets",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Branded jackets and outerwear",
    },
    {
      name: "Caps",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Custom caps and hats",
    },
  ],
  Drinkware: [
    {
      name: "Mugs",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Custom coffee mugs",
    },
    {
      name: "Tumblers",
      image: "https://images.unsplash.com/photo-1577705998148-6bd4f3961bb2?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Insulated travel tumblers",
    },
    {
      name: "Water Bottles",
      image: "https://images.unsplash.com/photo-1602143303704-375960017160?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Branded water bottles",
    },
    {
      name: "Glassware",
      image: "https://images.unsplash.com/photo-1516715667182-c8e29ecad647?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Custom glassware",
    },
  ],
  Tech: [
    {
      name: "Power Banks",
      image: "https://images.unsplash.com/photo-1619134105202-0e869389a997?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Promotional power banks",
    },
    {
      name: "Chargers",
      image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Custom USB chargers",
    },
    {
      name: "Speakers",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Bluetooth speakers",
    },
    {
      name: "Cables",
      image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Custom branded cables",
    },
  ],
  Office: [
    {
      name: "Notebooks",
      image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Custom branded notebooks",
    },
    {
      name: "Pens",
      image: "https://images.unsplash.com/photo-1583483425010-c566431a7710?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Promotional pens",
    },
    {
      name: "Desk Mats",
      image: "https://images.unsplash.com/photo-1631015300202-7b21946603a1?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Custom desk mats",
    },
    {
      name: "Planners",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Branded planners and organizers",
    },
  ],
  Bags: [
    {
      name: "Canvas Totes",
      image: "https://images.unsplash.com/photo-1544816153-12ad5d714b21?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Custom tote bags",
    },
    {
      name: "Backpacks",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Branded backpacks",
    },
    {
      name: "Laptop Sleeves",
      image: "https://images.unsplash.com/photo-1544333346-64e4fe1f93f5?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Laptop sleeves",
    },
    {
      name: "Duffel Bags",
      image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Duffel bags",
    },
  ],
  Wellness: [
    {
      name: "Yoga Mats",
      image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Custom yoga mats",
    },
    {
      name: "Candles",
      image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Promotional candles",
    },
    {
      name: "Eye Masks",
      image: "https://images.unsplash.com/photo-1595111101532-a535f8839206?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Branded sleep masks",
    },
    {
      name: "Fitness Sets",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Fitness accessories",
    },
  ],
  "Home & Garden": [
    {
      name: "Succulents",
      image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Branded plant pots",
    },
    {
      name: "Kitchenware",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Kitchen accessories",
    },
    {
      name: "Blankets",
      image: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Custom blankets",
    },
    {
      name: "Picnic Sets",
      image: "https://images.unsplash.com/photo-1594498653385-d5172b532c00?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Picnic and outdoor gear",
    },
  ],
  Other: [
    {
      name: "Keychains",
      image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Custom keychains",
    },
    {
      name: "Stickers",
      image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Branded stickers",
    },
    {
      name: "Gift Sets",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Custom gift sets",
    },
    {
      name: "Umbrellas",
      image: "https://images.unsplash.com/photo-1527664557558-a2b352fcf203?auto=format&fit=crop&q=80&w=400",
      fallback: SITE_LOGO,
      alt: "Branded umbrellas",
    },
  ],
}

export const CATEGORIES = Object.keys(NAV_DATA)
