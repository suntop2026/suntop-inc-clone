// Centralized image management - Single Source of Truth
// Auto-generated from products.json

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

// All Categories extracted from products
export const CATEGORIES = [
  "AUTO ACCESSORIES; TRASH CANS",
  "Antibacterial Products",
  "BADGES & NAME TAGS, Tags-Dog/Military Identification",
  "BAG CLIPS & SEALERS; Clips-Utility-Magnetic",
  "BATHROOM ACCESSORIES; BRUSHES",
  "BEACH BALLS",
  "BLANKETS",
  "BLANKETS, Bags-General",
  "BOOKMARKS, Clips-Utility-Metal",
  "BOOKMARKS, Clips-Utility-Metal ",
  "BRACELETS; Wristbands",
  "BRIEFCASES; LAPTOP SLEEVES/CASES",
  "BRUSHES; Golf Accessories",
  "Backpacks-Drawstring; Bags-Drawstring",
  "Badge Holders-Retractable",
  "Bags",
  "Bags-Bottle, Coolers",
  "Bags-Bottle; WINE ACCESSORIES",
  "Bags-Drawstring; Halloween Party Supplies",
  "Bags-Fanny/Hip/Waist",
  "Bags-General",
  "Bags-General; Organizers-General",
  "Bags-General; Tote Bags-Canvas",
  "Bags-Laundry; Bags-Shoe",
  "Bags-Litter",
  "Bags-Lunch; COOLERS",
  "Bags-Resealable/Reclosable",
  "Bags-Shoe",
  "Bags-Shoe; Golf Accessories-General",
  "Bags-Shopping; Tote Bags-Non Woven",
  "Baseball Caps-General; Caps & Hats-Golf-General",
  "Battery Rechargers & Adaptors",
  "Beverage Holders-General",
  "Beverage Holders-Wrap Around; Bottles-Sport Type",
  "Blankets",
  "Bottles",
  "Bottles-Insulated",
  "Boxes & Cases-Pen & Pencil; Pouches-General",
  "Business Cards",
  "CAP & HAT ACCESSORIES, LED PRODUCTS",
  "CARABINERS; Key Chains-With Carabiner",
  "CASES & HOLDERS; Beverage Holders-General",
  "CASES & HOLDERS; Organizers-Cord",
  "CLEANERS; COMPUTER ACCESSORIES",
  "COASTERS & COASTER SETS; Openers-Jar",
  "COASTERS & COASTER SETS; Pads-General",
  "COINS",
  "COOLERS, Beverage Holders-Sleeve",
  "COOLERS; Furniture-Chairs-General",
  "Caps & Hats-Beanie",
  "Caps & Hats-General",
  "Caps & Hats-General; COSTUMES & ACCESSORIES",
  "Caps & Hats-General; TIARAS & CROWNS",
  "Cards",
  "Cheering Accessories",
  "Cleaners; Golf Accessories",
  "Clips-Utility-Plastic, Memo Pads-Self-Stick Note Pads",
  "Clothing-Coveralls & Overalls; Vests-Safety",
  "Coolers, Beverage Holders-General",
  "Coolers, Beverage Holders-Sleeve",
  "Covers-General",
  "Cups",
  "Cups-General",
  "Cups-Plastic",
  "Cups-Plastic, Glasses-Drinking-Champagne",
  "DICE SPECIALTIES; PLAYING CARDS",
  "Decals",
  "Dice Specialties",
  "Drinkware",
  "EXERCISE EQUIPMENT, Sports Equipment & Access.-General",
  "Eyeglass Cases & Holders",
  "Fans-General",
  "Fans-USB",
  "Fans-USB, Battery Rechargers & Adaptors-Power Banks",
  "Flashlights-Miniature-2-1/2" or Less",
  "Folders-General, Planners & Organizers-Zippered Binders",
  "Furniture-Chairs-Beach; Folding Seats",
  "GAME PARTS; POKER SETS",
  "GLOW PRODUCTS; PARTY FAVORS",
  "Golf Accessories",
  "HEADBANDS",
  "Key Chains",
  "Key Chains-General",
  "Key Chains-General; PILL BOXES & BOTTLES",
  "Key Chains-Leather",
  "Key Chains-Metal",
  "Key Chains-Metal, DICE SPECIALTIES",
  "Key Chains-Plastic, Stress Relievers-General",
  "Key Chains-Plastic; Tags-General",
  "Key Chains-Vinyl; Openers-General",
  "Key Chains-Vinyl; Pet Items-Toys",
  "Key Chains-With Bottle or Can Opener; Openers-Bottle",
  "Kits",
  "LANYARDS",
  "LANYARDS, STRAPS",
  "LANYARDS; Mobile Accessories",
  "LAWN & GARDEN ACCESSORIES, Bottles",
  "LED PRODUCTS; BUCKETS",
  "LED PRODUCTS; LIGHT UP NOVELTIES-GENERAL",
  "LIP BALM",
  "Lanterns, Flashlights-Lantern",
  "Light Bulbs",
  "Lights",
  "Luggage Tags; Tags-General",
  "Luggage, Backpacks-General",
  "MUSICAL INSTRUMENTS & ACCESSORIES",
  "Masks-Balaclava/Ski",
  "Masks-Disposable; Kits-First Aid",
  "Memo Pads-General, LETTERHEAD & STATIONERY",
  "Memo Pads-Self-Stick Note Pads",
  "Memo Pads-Self-Stick Note Pads, Notebook",
  "Memo Pads-Self-Stick Note Pads, OFFICE SUPPLIES",
  "Mobile Accessories",
  "Mobile Accessories-General; Organizers-General",
  "Mobile Accessories-Stands & Holders",
  "Mobile Accessories-Stands & Holders; AUTO ACCESSORIES",
  "Mugs & Steins-Ceramic",
  "Mugs & Steins-Ceramic; PARTY FAVORS",
  "Mugs & Steins-Metal; Beverage Holders-Wrap Around",
  "NOISEMAKERS, BELLS",
  "NOTEBOOKS, OFFICE SUPPLIES",
  "NOTEBOOKS; JOURNALS & DIARIES",
  "Notebooks, LETTERHEAD & STATIONERY",
  "OUTERWEAR-RAINWEAR",
  "Openers",
  "Organizers-General; Bags-General",
  "Ornaments-Christmas Tree; Gift Wrap-Bags",
  "PEN & PENCIL ACCESSORIES, Clips-Utility-Metal",
  "PILL BOXES & BOTTLES",
  "POKER CHIPS",
  "POSTER FRAMES; Signs & Displays-General",
  "Pencils-General, Pens-General",
  "Pens",
  "Pens-Ballpoint-Gel Ink",
  "Planners & Organizers-General; Organizers-General",
  "Plaques-Memorial, Awards-Crystal",
  "Plaques-Memorial, Awards-General",
  "Plaques-Memorial, Awards-Recognition Plaques",
  "Pouches-General",
  "Pouches-General; Boxes & Cases-Pen & Pencil",
  "Protectors",
  "SHOVELS",
  "STRAPS, LANYARDS",
  "Shirts-Unisex",
  "Signs & Displays-Magnetic; Magnets-Industrial/Toy",
  "Stress Relievers",
  "Stress Relievers-General, Toys-General",
  "Stress Relievers-General; HEATING PADS",
  "TAPE, Labels-Package",
  "TISSUES",
  "Tags",
  "Tents",
  "Tote Bags-Boat",
  "Tote Bags-Insulated, Coolers",
  "Tote Bags-Non Woven",
  "Towels-Beach, Covers-Furniture",
  "Towels-General; COOLING TOWELS & SCARVES",
  "USB/FLASH DRIVES; COMPUTER ACCESSORIES",
  "Umbrellas-Folding",
  "Vests-General",
  "Wine Chillers, Coolers",
  "Wristbands-General",
]

export const NAV_DATA: CategoryNavData = {
  "AUTO ACCESSORIES; TRASH CANS": [
    {
      name: "Car Hanging Trash Can With Lid...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Car Hanging Trash Can With Lid And Easy Mount Hook Strap",
    },
  ],
  "Antibacterial Products": [
    {
      name: "Portable 10ml Refillable Frost...",
      image: "/products/NEW/STVRT200/STVRT2001.JPG",
      fallback: SITE_LOGO,
      alt: "Portable 10ml Refillable Frosted Spray Pen with Pocket Clip",
    },
    {
      name: "Premium Slimline Credit Card H...",
      image: "/products/NEW/STVRT201/STVRT2011.JPG",
      fallback: SITE_LOGO,
      alt: "Premium Slimline Credit Card Hand Sanitizer Spray",
    },
    {
      name: "0.34 oz. Hand Sanitizer Spray ...",
      image: "/products/NEW/STVRT203/STVRT2031.JPG",
      fallback: SITE_LOGO,
      alt: "0.34 oz. Hand Sanitizer Spray Pen with Carabiner Hook",
    },
    {
      name: "0.17 Oz Portable Antibacterial...",
      image: "/products/NEW/STVRT207/STVRT2071.JPG",
      fallback: SITE_LOGO,
      alt: "0.17 Oz Portable Antibacterial Spray Pen",
    },
  ],
  "BADGES & NAME TAGS, Tags-Dog/Military Identification": [
    {
      name: "Smart Pet ID Tag With NFC And ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Smart Pet ID Tag With NFC And QR Code For Instant Contact Info",
    },
  ],
  "BAG CLIPS & SEALERS; Clips-Utility-Magnetic": [
    {
      name: "2 1/2" Magnetic ABS Bag Clip W...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "2 1/2" Magnetic ABS Bag Clip With Memo Pad",
    },
  ],
  "BATHROOM ACCESSORIES; BRUSHES": [
    {
      name: "Bamboo Long Handle Shower Brus...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Bamboo Long Handle Shower Brush With Natural Bristles",
    },
  ],
  "BEACH BALLS": [
    {
      name: "16" Multi-Color Panels Pool Be...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "16" Multi-Color Panels Pool Beach Inflatable PVC Beach Ball",
    },
  ],
  "BLANKETS": [
    {
      name: "Waterproof Foldable Picnic Bla...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Waterproof Foldable Picnic Blanket With PU Carry Handle",
    },
    {
      name: "210T Foldable Beach Blanket Wi...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "210T Foldable Beach Blanket With Corner Anchors",
    },
  ],
  "BLANKETS, Bags-General": [
    {
      name: "47x60 Foldable Picnic Blanket ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "47x60 Foldable Picnic Blanket With Carry Handle Bag",
    },
  ],
  "BOOKMARKS, Clips-Utility-Metal": [
    {
      name: "Minimalist Stainless Steel Mon...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Minimalist Stainless Steel Money Clip For Cards and Cash",
    },
  ],
  "BOOKMARKS, Clips-Utility-Metal ": [
    {
      name: "Slim Stainless Steel Money Cli...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Slim Stainless Steel Money Clip Bookmark",
    },
  ],
  "BRACELETS; Wristbands": [
    {
      name: "6.3 In Custom NFC RFID Nylon E...",
      image: "/products/NEW/STVRT229/STVRT2291.JPG",
      fallback: SITE_LOGO,
      alt: "6.3 In Custom NFC RFID Nylon Elastic Bracelet",
    },
  ],
  "BRIEFCASES; LAPTOP SLEEVES/CASES": [
    {
      name: "Waterproof Oxford Laptop Brief...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Waterproof Oxford Laptop Briefcase With Organizer Pockets",
    },
  ],
  "BRUSHES; Golf Accessories": [
    {
      name: "Durable Nylon Golf Club Cleane...",
      image: "/products/NEW/STVRT206/STVRT2061.JPG",
      fallback: SITE_LOGO,
      alt: "Durable Nylon Golf Club Cleaner Brush With Spray Bottle",
    },
  ],
  "Backpacks-Drawstring; Bags-Drawstring": [
    {
      name: "Polyester Drawstring Reinforce...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Polyester Drawstring Reinforced Corners Grommets Sportpack",
    },
    {
      name: "Natural Cotton Canvas Drawstri...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Natural Cotton Canvas Drawstring Cinch Double Cords Backpack",
    },
  ],
  "Badge Holders-Retractable": [
    {
      name: "Retractable Badge Reel w/ Cara...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Retractable Badge Reel w/ Carabiner Clip and ID Strap",
    },
  ],
  "Bags": [
    {
      name: "Car Key Phone RFID Signal Bloc...",
      image: "/products/NEW/STVRT235/STVRT2351.JPG",
      fallback: SITE_LOGO,
      alt: "Car Key Phone RFID Signal Blocking Pouch",
    },
  ],
  "Bags-Bottle, Coolers": [
    {
      name: "40 oz Insulated Water Bottle S...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "40 oz Insulated Water Bottle Sling Bag with Phone Pocket",
    },
  ],
  "Bags-Bottle; WINE ACCESSORIES": [
    {
      name: "Kraft Paper Single Wine Bottle...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Kraft Paper Single Wine Bottle Flat Bottom Gift Tote",
    },
  ],
  "Bags-Drawstring; Halloween Party Supplies": [
    {
      name: "Halloween Pumpkin Drawstring C...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Halloween Pumpkin Drawstring Candy Bag For Trick Or Treat",
    },
  ],
  "Bags-Fanny/Hip/Waist": [
    {
      name: "Water Resistant Outdoor Tactic...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Water Resistant Outdoor Tactics Waist Pack With Bottle Holder",
    },
    {
      name: "Outdoor Tactics Waist Pack Pou...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Outdoor Tactics Waist Pack Pouch With Belt Clip",
    },
  ],
  "Bags-General": [
    {
      name: "Poly Cotton Canvas Convertible...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Poly Cotton Canvas Convertible Ribbon Tie Tote Bag",
    },
  ],
  "Bags-General; Organizers-General": [
    {
      name: "7-Piece Travel Packing Cubes S...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "7-Piece Travel Packing Cubes Set w/ Laundry and Shoe Bags",
    },
  ],
  "Bags-General; Tote Bags-Canvas": [
    {
      name: "12 Oz 21" Handles Heavyweight ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "12 Oz 21" Handles Heavyweight Canvas Grocery Tote W/ Gusset",
    },
  ],
  "Bags-Laundry; Bags-Shoe": [
    {
      name: "11 7/8" x 15 3/4" Drawstring L...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "11 7/8" x 15 3/4" Drawstring Laundry Front Slip Pocket Bag",
    },
  ],
  "Bags-Litter": [
    {
      name: "8.6 x 11.8in Biodegradable Lea...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "8.6 x 11.8in Biodegradable Leakproof Dog Waste Bag Rolls W/ Easy Tear",
    },
  ],
  "Bags-Lunch; COOLERS": [
    {
      name: "Insulated Thermal Lunch Cooler...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Insulated Thermal Lunch Cooler Bag With Handles",
    },
    {
      name: "Oxford Double Layer Reusable I...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Oxford Double Layer Reusable Insulated Cooler Lunch Bag",
    },
    {
      name: "Portable Picnic Insulated Lunc...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Portable Picnic Insulated Lunch Bag With Handle",
    },
  ],
  "Bags-Resealable/Reclosable": [
    {
      name: "Resealable Kraft Stand-Up Snac...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Resealable Kraft Stand-Up Snack Pouch w/ Window",
    },
  ],
  "Bags-Shoe": [
    {
      name: "Non Woven Drawstring Shoe Stor...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Non Woven Drawstring Shoe Storage Bag With Window",
    },
    {
      name: "Zippered Travel Golf Shoe Bag ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Zippered Travel Golf Shoe Bag With Carry Loop And Logo Panel",
    },
  ],
  "Bags-Shoe; Golf Accessories-General": [
    {
      name: "Zippered Travel Golf Shoe Bag ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Zippered Travel Golf Shoe Bag With Carry Handle",
    },
  ],
  "Bags-Shopping; Tote Bags-Non Woven": [
    {
      name: "80 GSM Flat Non-Woven Tote Bag...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "80 GSM Flat Non-Woven Tote Bag With Die-Cut Handle",
    },
  ],
  "Baseball Caps-General; Caps & Hats-Golf-General": [
    {
      name: "UPF 50 Foldable Polyester Base...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "UPF 50 Foldable Polyester Baseball Cap With Packable Long Bill",
    },
  ],
  "Battery Rechargers & Adaptors": [
    {
      name: "2000mAh Power Bank with Flashl...",
      image: "/products/NEW/STVRT245/STVRT2451.JPG",
      fallback: SITE_LOGO,
      alt: "2000mAh Power Bank with Flashlight & Hook",
    },
  ],
  "Beverage Holders-General": [
    {
      name: "Western Boot Beverage Holder W...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Western Boot Beverage Holder With Insulated Sleeve",
    },
  ],
  "Beverage Holders-Wrap Around; Bottles-Sport Type": [
    {
      name: "22 Oz Vacuum Insulated Stainle...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "22 Oz Vacuum Insulated Stainless Steel Bottle With Screw Lid",
    },
  ],
  "Blankets": [
    {
      name: "59" Full-Color Printed Picnic ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "59" Full-Color Printed Picnic Blanket with Waterproof Bottom",
    },
  ],
  "Bottles": [
    {
      name: "Instant Cooling Battery Free P...",
      image: "/products/NEW/STVRT204/STVRT2041.JPG",
      fallback: SITE_LOGO,
      alt: "Instant Cooling Battery Free Personal Water Mister",
    },
    {
      name: "10ml Professional Lens And Scr...",
      image: "/products/NEW/STVRT208/STVRT2081.JPG",
      fallback: SITE_LOGO,
      alt: "10ml Professional Lens And Screen Cleaner Spray",
    },
  ],
  "Bottles-Insulated": [
    {
      name: "16 Oz Stainless Steel Vacuum I...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "16 Oz Stainless Steel Vacuum Insulated Gym Bottle With Matte Finish",
    },
  ],
  "Boxes & Cases-Pen & Pencil; Pouches-General": [
    {
      name: "Water-Resistant Mesh Document ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Water-Resistant Mesh Document Pouch With Cord Zipper Pull",
    },
    {
      name: "See-Through Nylon Mesh Zipper ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "See-Through Nylon Mesh Zipper Pouch For Cables And Coins",
    },
    {
      name: "A4 Waterproof Oxford Zipper Do...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "A4 Waterproof Oxford Zipper Document Pouch With Color-Trim Edge",
    },
  ],
  "Business Cards": [
    {
      name: "Stainless Steel Nfc Business C...",
      image: "/products/NEW/STVRT227/STVRT2271.JPG",
      fallback: SITE_LOGO,
      alt: "Stainless Steel Nfc Business Card With Custom Engraving",
    },
    {
      name: "Full-Color PVC NFC Business Ca...",
      image: "/products/NEW/STVRT228/STVRT2281.JPG",
      fallback: SITE_LOGO,
      alt: "Full-Color PVC NFC Business Card",
    },
  ],
  "CAP & HAT ACCESSORIES, LED PRODUCTS": [
    {
      name: "LED Light-Up Party Hat With Bu...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "LED Light-Up Party Hat With Built-In Lights",
    },
  ],
  "CARABINERS; Key Chains-With Carabiner": [
    {
      name: "Nylon Multifunctional Tactical...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Nylon Multifunctional Tactical Carabiner Keychain",
    },
  ],
  "CASES & HOLDERS; Beverage Holders-General": [
    {
      name: "Luggage Handle Dual Cup Holder...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Luggage Handle Dual Cup Holder With Zip Pocket For Travel",
    },
  ],
  "CASES & HOLDERS; Organizers-Cord": [
    {
      name: "Zippered Electronic Travel Cab...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Zippered Electronic Travel Cable Organizer Pouch With Wrist Strap",
    },
  ],
  "CLEANERS; COMPUTER ACCESSORIES": [
    {
      name: "Professional 5-In-1 Tech Scree...",
      image: "/products/NEW/STVRT205/STVRT2051.JPG",
      fallback: SITE_LOGO,
      alt: "Professional 5-In-1 Tech Screen And Keyboard Cleaner Kit",
    },
  ],
  "COASTERS & COASTER SETS; Openers-Jar": [
    {
      name: "Heavy Duty Silicone Jar Opener...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Heavy Duty Silicone Jar Opener Coaster Pad 5 Inch",
    },
  ],
  "COASTERS & COASTER SETS; Pads-General": [
    {
      name: "Eco Friendly Corkwood Coaster ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Eco Friendly Corkwood Coaster Pot Pad 4 Inch Round",
    },
  ],
  "COINS": [
    {
      name: "Custom Metal Challenge Coin",
      image: "/products/NEW/STVRT223/STVRT2231.JPG",
      fallback: SITE_LOGO,
      alt: "Custom Metal Challenge Coin",
    },
  ],
  "COOLERS, Beverage Holders-Sleeve": [
    {
      name: "Collapsible Neoprene Can Coole...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Collapsible Neoprene Can Cooler Sleeve With Zippers",
    },
  ],
  "COOLERS; Furniture-Chairs-General": [
    {
      name: "600D Oxford Folding Cooler Cha...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "600D Oxford Folding Cooler Chair With Steel Frame",
    },
  ],
  "Caps & Hats-Beanie": [
    {
      name: "Cozy Knit Custom Embroidery Ac...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Cozy Knit Custom Embroidery Acrylic Pom Pom Beanie",
    },
  ],
  "Caps & Hats-General": [
    {
      name: "Enchanted Foldable Knit Wizard...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Enchanted Foldable Knit Wizard Hat For Halloween Costumes",
    },
  ],
  "Caps & Hats-General; COSTUMES & ACCESSORIES": [
    {
      name: "Enchanted Printed Cosplay Wiza...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Enchanted Printed Cosplay Wizard Hat For Halloween Parties",
    },
  ],
  "Caps & Hats-General; TIARAS & CROWNS": [
    {
      name: "Metal Party Royal Celebration ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Metal Party Royal Celebration Crown For Birthday And Halloween",
    },
  ],
  "Cards": [
    {
      name: "RFID Polyester Wristband With ...",
      image: "/products/NEW/STVRT232/STVRT2321.JPG",
      fallback: SITE_LOGO,
      alt: "RFID Polyester Wristband With PVC NFC Card",
    },
  ],
  "Cheering Accessories": [
    {
      name: "Oversized EVA Cheering Foam Gl...",
      image: "/products/NEW/STVRT248/STVRT2481.JPG",
      fallback: SITE_LOGO,
      alt: "Oversized EVA Cheering Foam Gloves",
    },
    {
      name: "Cheerleading Foam Football Hel...",
      image: "/products/NEW/STVRT249/STVRT2491.JPG",
      fallback: SITE_LOGO,
      alt: "Cheerleading Foam Football Helmet Crowd Waver",
    },
    {
      name: "2-PieceE Inflatable Cheering T...",
      image: "/products/NEW/STVRT250/STVRT2501.JPG",
      fallback: SITE_LOGO,
      alt: "2-PieceE Inflatable Cheering Thunder Sticks Pair",
    },
  ],
  "Cleaners; Golf Accessories": [
    {
      name: "Durable Golf Club Cleaner Brus...",
      image: "/products/NEW/STVRT210/STVRT2101.JPG",
      fallback: SITE_LOGO,
      alt: "Durable Golf Club Cleaner Brush With Spray Bottle",
    },
    {
      name: "Professional Golf Club Groove ...",
      image: "/products/NEW/STVRT211/STVRT2111.JPG",
      fallback: SITE_LOGO,
      alt: "Professional Golf Club Groove Cleaning Brush Kit",
    },
  ],
  "Clips-Utility-Plastic, Memo Pads-Self-Stick Note Pads": [
    {
      name: "House Shaped Magnetic Clip W/ ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "House Shaped Magnetic Clip W/ Sticky Notes Pad",
    },
  ],
  "Clothing-Coveralls & Overalls; Vests-Safety": [
    {
      name: "Kids Hi-Vis Reflective Safety ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Kids Hi-Vis Reflective Safety Vest with PVC Straps",
    },
  ],
  "Coolers, Beverage Holders-General": [
    {
      name: "Insulated 24-Can Save Front Po...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Insulated 24-Can Save Front Pocket Folding Cooler Bag Chair",
    },
  ],
  "Coolers, Beverage Holders-Sleeve": [
    {
      name: "Neoprene Golf Beer Cooler Slee...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Neoprene Golf Beer Cooler Sleeve Bag for 7 Cans with Zipper",
    },
  ],
  "Covers-General": [
    {
      name: "Stretch Universal Dining Chair...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Stretch Universal Dining Chair Covers For Weddings And Events",
    },
  ],
  "Cups": [
    {
      name: "12 Oz Reusable Frosted Clear P...",
      image: "/products/NEW/STVRT224/STVRT2241.JPG",
      fallback: SITE_LOGO,
      alt: "12 Oz Reusable Frosted Clear Party Cup",
    },
  ],
  "Cups-General": [
    {
      name: "21 oz Reusable Aluminum Party ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "21 oz Reusable Aluminum Party Cup for Camping & Events",
    },
  ],
  "Cups-Plastic": [
    {
      name: "16 Oz Clear Plastic Cold Cup W...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "16 Oz Clear Plastic Cold Cup With Lid For Iced Drinks",
    },
    {
      name: "16 oz Disposable BPA-Free Plas...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "16 oz Disposable BPA-Free Plastic Party Cups",
    },
  ],
  "Cups-Plastic, Glasses-Drinking-Champagne": [
    {
      name: "9 Oz Clear Plastic Stemless Ch...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "9 Oz Clear Plastic Stemless Champagne Flute For Events",
    },
  ],
  "DICE SPECIALTIES; PLAYING CARDS": [
    {
      name: "Rosewood Playing Cards & Dice ...",
      image: "/products/NEW/STVRT216/STVRT2161.JPG",
      fallback: SITE_LOGO,
      alt: "Rosewood Playing Cards & Dice Gift Set",
    },
  ],
  "Decals": [
    {
      name: "Custom Full Color Print Die-Cu...",
      image: "/products/NEW/STVRT239/STVRT2391.JPG",
      fallback: SITE_LOGO,
      alt: "Custom Full Color Print Die-Cut Vinyl Sticker Singles",
    },
  ],
  "Dice Specialties": [
    {
      name: "Aluminum Metal Dice Set With S...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Aluminum Metal Dice Set With Storage Box For Casino And Game Night",
    },
  ],
  "Drinkware": [
    {
      name: "LARQ 23 Oz. Swig Top Water Bot...",
      image: "/products/DRINKWARE-1.JPG",
      fallback: SITE_LOGO,
      alt: "LARQ 23 Oz. Swig Top Water Bottle",
    },
    {
      name: "Bernal Mug 17 Oz.",
      image: "/products/DRINKWARE-2.JPG",
      fallback: SITE_LOGO,
      alt: "Bernal Mug 17 Oz.",
    },
    {
      name: "Fellow Stagg Pour-Over Kettle",
      image: "/products/DRINKWARE-3.JPG",
      fallback: SITE_LOGO,
      alt: "Fellow Stagg Pour-Over Kettle",
    },
    {
      name: "Monaco Mug 16 Oz.",
      image: "/products/DRINKWARE-4.JPG",
      fallback: SITE_LOGO,
      alt: "Monaco Mug 16 Oz.",
    },
  ],
  "EXERCISE EQUIPMENT, Sports Equipment & Access.-General": [
    {
      name: "Non Slip TPE Plank Exercise Ma...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Non Slip TPE Plank Exercise Mat For Core Training",
    },
  ],
  "Eyeglass Cases & Holders": [
    {
      name: "PU Leather Sunglasses Pouch Wi...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "PU Leather Sunglasses Pouch With Strap And Zipper For Travel And Outdoors",
    },
  ],
  "Fans-General": [
    {
      name: "Compact Fold-Flat Rainbow Cust...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Compact Fold-Flat Rainbow Custom Folding Hand Fan",
    },
    {
      name: "7.88" Foldable Nylon Hand Fan ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "7.88" Foldable Nylon Hand Fan With Pouch",
    },
    {
      name: "7.88" Foldable Nylon Hand Fan ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "7.88" Foldable Nylon Hand Fan With Reflector Back",
    },
  ],
  "Fans-USB": [
    {
      name: "USB Desk Air Circulator Fan w/...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "USB Desk Air Circulator Fan w/ 90° Tilt and Wide Base",
    },
    {
      name: "3 Speeds USB-C Mini Display Ha...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "3 Speeds USB-C Mini Display Handheld Fan w/ Stand",
    },
    {
      name: "USB Rechargeable Power Bank Fo...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "USB Rechargeable Power Bank Foldable Pocket Mini Fan",
    },
  ],
  "Fans-USB, Battery Rechargers & Adaptors-Power Banks": [
    {
      name: "USB Rechargeable Mini Fan With...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "USB Rechargeable Mini Fan With Power Bank Light",
    },
  ],
  "Flashlights-Miniature-2-1/2" or Less": [
    {
      name: "Mini Aluminum Alloy Outdoor Ca...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Mini Aluminum Alloy Outdoor Carabiner Flashlight",
    },
  ],
  "Folders-General, Planners & Organizers-Zippered Binders": [
    {
      name: "13"*10" PU Leather Document Fo...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "13"*10" PU Leather Document Folder W/ Card Slots And Pen Loop",
    },
  ],
  "Furniture-Chairs-Beach; Folding Seats": [
    {
      name: "Foldable Lounging Beach Chair ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Foldable Lounging Beach Chair With Storage Pocket And Strap",
    },
  ],
  "GAME PARTS; POKER SETS": [
    {
      name: "Automatic Two Deck Card Shuffl...",
      image: "/products/NEW/STVRT225/STVRT2251.JPG",
      fallback: SITE_LOGO,
      alt: "Automatic Two Deck Card Shuffler For Game Nights",
    },
  ],
  "GLOW PRODUCTS; PARTY FAVORS": [
    {
      name: "Glowing Halloween Night Bat & ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Glowing Halloween Night Bat & Spider Wands",
    },
  ],
  "Golf Accessories": [
    {
      name: "Nylon Golf Club And Ball Clean...",
      image: "/products/NEW/STVRT212/STVRT2121.JPG",
      fallback: SITE_LOGO,
      alt: "Nylon Golf Club And Ball Cleaner Scrub Bag",
    },
    {
      name: "Ergonomic Golf Grip Trainer At...",
      image: "/products/NEW/STVRT213/STVRT2131.JPG",
      fallback: SITE_LOGO,
      alt: "Ergonomic Golf Grip Trainer Attachment For Accuracy",
    },
  ],
  "HEADBANDS": [
    {
      name: "Multi-Wear Stretch Cooling Spo...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Multi-Wear Stretch Cooling Sports Headband Wrap 2 3/8" × 41 1/4"",
    },
  ],
  "Key Chains": [
    {
      name: "Poker Chip Keychain With Metal...",
      image: "/products/NEW/STVRT221/STVRT2211.JPG",
      fallback: SITE_LOGO,
      alt: "Poker Chip Keychain With Metal Core",
    },
    {
      name: "1 3/4" x 3" Mini Bottle Opener...",
      image: "/products/NEW/STVRT244/STVRT2441.JPG",
      fallback: SITE_LOGO,
      alt: "1 3/4" x 3" Mini Bottle Opener Flashlight Keychain",
    },
    {
      name: "LED Flashlight Whistle Keychai...",
      image: "/products/NEW/STVRT246/STVRT2461.JPG",
      fallback: SITE_LOGO,
      alt: "LED Flashlight Whistle Keychain",
    },
  ],
  "Key Chains-General": [
    {
      name: "Eco Friendly Laser Engraved Wo...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Eco Friendly Laser Engraved Wooden Keychain",
    },
    {
      name: "PU Leather Key Tag With Rectan...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "PU Leather Key Tag With Rectangular Metal Plate & Split Ring",
    },
  ],
  "Key Chains-General; PILL BOXES & BOTTLES": [
    {
      name: "Aluminum Keychain Pill Box Tra...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Aluminum Keychain Pill Box Travel Storage Capsule",
    },
  ],
  "Key Chains-Leather": [
    {
      name: "Suede-Look Leather Belt Clip K...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Suede-Look Leather Belt Clip Keychain With Debossed Logo",
    },
  ],
  "Key Chains-Metal": [
    {
      name: "Laser Engraving PU Drop Shaped...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Laser Engraving PU Drop Shaped Metal Keychain",
    },
  ],
  "Key Chains-Metal, DICE SPECIALTIES": [
    {
      name: "1" Stainless Steel Dice Keycha...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "1" Stainless Steel Dice Keychain With Swivel Clasp",
    },
  ],
  "Key Chains-Plastic, Stress Relievers-General": [
    {
      name: "1.25" ABS Fidget Cube Keychain...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "1.25" ABS Fidget Cube Keychain W/ Tactile Buttons And Rollers",
    },
  ],
  "Key Chains-Plastic; Tags-General": [
    {
      name: "ABS Hotel Motel Key Tag with S...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "ABS Hotel Motel Key Tag with Split Ring Keychain Set",
    },
  ],
  "Key Chains-Vinyl; Openers-General": [
    {
      name: "Hard Hat Keychain Bottle Opene...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Hard Hat Keychain Bottle Opener For Safety And Jobsite Promos",
    },
    {
      name: "Western Cowboy Hat Keychain Bo...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Western Cowboy Hat Keychain Bottle Opener For Events",
    },
  ],
  "Key Chains-Vinyl; Pet Items-Toys": [
    {
      name: "Flexible Paw Print Vinyl Key T...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Flexible Paw Print Vinyl Key Tag W/ Split Ring",
    },
  ],
  "Key Chains-With Bottle or Can Opener; Openers-Bottle": [
    {
      name: "Aluminum Wrench Keychain Bottl...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Aluminum Wrench Keychain Bottle Can-Tab Lifter Opener",
    },
  ],
  "Kits": [
    {
      name: "RPET First Aid Kit Pouch With ...",
      image: "/products/NEW/STVRT237/STVRT2371.JPG",
      fallback: SITE_LOGO,
      alt: "RPET First Aid Kit Pouch With Clip And Essentials Pack",
    },
    {
      name: "Compact 8-Piece First Aid Kit ...",
      image: "/products/NEW/STVRT238/STVRT2381.JPG",
      fallback: SITE_LOGO,
      alt: "Compact 8-Piece First Aid Kit In Shockproof Plastic Hard Case",
    },
  ],
  "LANYARDS": [
    {
      name: "20'' Adjustable Lobster Claw B...",
      image: "/products/NEW/STVRT220/STVRT2201.JPG",
      fallback: SITE_LOGO,
      alt: "20'' Adjustable Lobster Claw Bungee Cord",
    },
    {
      name: "1" Braided NFC Sublimation Lan...",
      image: "/products/NEW/STVRT231/STVRT2311.JPG",
      fallback: SITE_LOGO,
      alt: "1" Braided NFC Sublimation Lanyard",
    },
  ],
  "LANYARDS, STRAPS": [
    {
      name: "5in Polyester Custom Logo Shor...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "5in Polyester Custom Logo Short Phone Strap Keychain",
    },
  ],
  "LANYARDS; Mobile Accessories": [
    {
      name: "Nylon Universal Phone Case Lan...",
      image: "/products/NEW/STVRT236/STVRT2361.JPG",
      fallback: SITE_LOGO,
      alt: "Nylon Universal Phone Case Lanyard With Spacer",
    },
  ],
  "LAWN & GARDEN ACCESSORIES, Bottles": [
    {
      name: "Eco-Friendly 16.9 oz Collapsib...",
      image: "/products/NEW/STVRT202/STVRT2021.JPG",
      fallback: SITE_LOGO,
      alt: "Eco-Friendly 16.9 oz Collapsible Travel Sprayer",
    },
  ],
  "LED PRODUCTS; BUCKETS": [
    {
      name: "Glowing Light Up Pumpkin Candy...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Glowing Light Up Pumpkin Candy Bucket W/ LED Handle",
    },
  ],
  "LED PRODUCTS; LIGHT UP NOVELTIES-GENERAL": [
    {
      name: "Custom Sing-Alight Light Up LE...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Custom Sing-Alight Light Up LED Microphone For Karaoke Events",
    },
  ],
  "LIP BALM": [
    {
      name: "All Natural Made Lip Moisturiz...",
      image: "/products/NEW/STVRT214/STVRT2141.JPG",
      fallback: SITE_LOGO,
      alt: "All Natural Made Lip Moisturizer With Beeswax",
    },
    {
      name: "Soft Touch Vanilla Scented Lip...",
      image: "/products/NEW/STVRT215/STVRT2151.JPG",
      fallback: SITE_LOGO,
      alt: "Soft Touch Vanilla Scented Lip Balm Ball",
    },
  ],
  "Lanterns, Flashlights-Lantern": [
    {
      name: "4IN Rechargeable Cordless LED ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "4IN Rechargeable Cordless LED Camping Lantern with Multiple Light Modes",
    },
  ],
  "Light Bulbs": [
    {
      name: "Solar Powered Outdoor Hanging ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Solar Powered Outdoor Hanging Lantern Light With Auto On/Off",
    },
  ],
  "Lights": [
    {
      name: "Multi-Function LED Whistle Key...",
      image: "/products/NEW/STVRT247/STVRT2471.JPG",
      fallback: SITE_LOGO,
      alt: "Multi-Function LED Whistle Keychain With Safety Light",
    },
  ],
  "Luggage Tags; Tags-General": [
    {
      name: "Silicone Airplane Luggage Tag ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Silicone Airplane Luggage Tag With Business Card Insert",
    },
  ],
  "Luggage, Backpacks-General": [
    {
      name: "35L Gym Backpack with Shoe Com...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "35L Gym Backpack with Shoe Compartment & Wet Pocket",
    },
  ],
  "MUSICAL INSTRUMENTS & ACCESSORIES": [
    {
      name: "Wood Frame Handheld Tambourine...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Wood Frame Handheld Tambourine With Jingles",
    },
  ],
  "Masks-Balaclava/Ski": [
    {
      name: "Multi-Use Windproof Balaclava ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Multi-Use Windproof Balaclava Face Mask Neck Gaiter",
    },
  ],
  "Masks-Disposable; Kits-First Aid": [
    {
      name: "Single Valve CPR Rescue Mask I...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Single Valve CPR Rescue Mask In Protective Carry Case",
    },
  ],
  "Memo Pads-General, LETTERHEAD & STATIONERY": [
    {
      name: "A4 Thick Paper Notepad 25 Shee...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "A4 Thick Paper Notepad 25 Sheets 100GSM",
    },
  ],
  "Memo Pads-Self-Stick Note Pads": [
    {
      name: "Pocket 3x2 Sticky Notes With I...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Pocket 3x2 Sticky Notes With Index Tabs Cover",
    },
  ],
  "Memo Pads-Self-Stick Note Pads, Notebook": [
    {
      name: "30 Pages Custom Printed Paper ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "30 Pages Custom Printed Paper Notepad",
    },
  ],
  "Memo Pads-Self-Stick Note Pads, OFFICE SUPPLIES": [
    {
      name: "Pastel 2x2 Sticky Notes Memo P...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Pastel 2x2 Sticky Notes Memo Pad Set With Hang Tab",
    },
  ],
  "Mobile Accessories": [
    {
      name: "Hockey Puck Phone Stand",
      image: "/products/NEW/STVRT243/STVRT2431.JPG",
      fallback: SITE_LOGO,
      alt: "Hockey Puck Phone Stand",
    },
  ],
  "Mobile Accessories-General; Organizers-General": [
    {
      name: "Polyester Roll-Up Travel Tech ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Polyester Roll-Up Travel Tech Organizer Pouch With Elastic Loops & Tie Cord",
    },
  ],
  "Mobile Accessories-Stands & Holders": [
    {
      name: "Hands-Free AI-Powered Rotating...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Hands-Free AI-Powered Rotating Phone Stand",
    },
  ],
  "Mobile Accessories-Stands & Holders; AUTO ACCESSORIES": [
    {
      name: "Adjustable Suction Vent Car Ph...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Adjustable Suction Vent Car Phone Mount W/ One Touch Release",
    },
  ],
  "Mugs & Steins-Ceramic": [
    {
      name: "11 oz Gloss Finish C-Handle Ce...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "11 oz Gloss Finish C-Handle Ceramic Coffee Mug",
    },
  ],
  "Mugs & Steins-Ceramic; PARTY FAVORS": [
    {
      name: "13 oz Halloween Big Belly Cera...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "13 oz Halloween Big Belly Ceramic Mug With Oversized Handle",
    },
  ],
  "Mugs & Steins-Metal; Beverage Holders-Wrap Around": [
    {
      name: "Ceramic Lined Vacuum Insulated...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Ceramic Lined Vacuum Insulated Travel Coffee Mug 12 Oz",
    },
  ],
  "NOISEMAKERS, BELLS": [
    {
      name: "Pep Rallies Game Day Metal Cow...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Pep Rallies Game Day Metal Cowbell Noisemaker W/ Grip Handle",
    },
  ],
  "NOTEBOOKS, OFFICE SUPPLIES": [
    {
      name: "100 Sheets Premium A4 PU Leath...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "100 Sheets Premium A4 PU Leather Refillable Notebook",
    },
    {
      name: "A7 80 Pages 100g Paper PU Spir...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "A7 80 Pages 100g Paper PU Spiral Notebook W/ Secure Button Closure",
    },
  ],
  "NOTEBOOKS; JOURNALS & DIARIES": [
    {
      name: "A5 Lined PU Leather Journal No...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "A5 Lined PU Leather Journal Notebook For Daily Notes And Meetings",
    },
  ],
  "Notebooks, LETTERHEAD & STATIONERY": [
    {
      name: "A5 PU Leather Business Binder ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "A5 PU Leather Business Binder Notebook With Pockets",
    },
  ],
  "OUTERWEAR-RAINWEAR": [
    {
      name: "35in Kids EVA Lightweight Wate...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "35in Kids EVA Lightweight Waterproof Rain Poncho",
    },
  ],
  "Openers": [
    {
      name: "Casino Playing Card Wallet Bot...",
      image: "/products/NEW/STVRT218/STRT2182.JPG",
      fallback: SITE_LOGO,
      alt: "Casino Playing Card Wallet Bottle Opener",
    },
    {
      name: "Stainless Steel Magnetic Hocke...",
      image: "/products/NEW/STVRT241/STVRT2411.JPG",
      fallback: SITE_LOGO,
      alt: "Stainless Steel Magnetic Hockey Puck Bottle Opener",
    },
  ],
  "Organizers-General; Bags-General": [
    {
      name: "8-Piece Travel Packing Cube Su...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "8-Piece Travel Packing Cube Suitcase Organizer Set",
    },
  ],
  "Ornaments-Christmas Tree; Gift Wrap-Bags": [
    {
      name: "Festive Mini Stocking Gift Car...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Festive Mini Stocking Gift Card Holder Ornament",
    },
    {
      name: "Festive Mitten Gift Card Holde...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Festive Mitten Gift Card Holder Glove Christmas Ornament",
    },
  ],
  "PEN & PENCIL ACCESSORIES, Clips-Utility-Metal": [
    {
      name: "Heavy-Duty Planners Stainless ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Heavy-Duty Planners Stainless Steel Pen Holder Clip",
    },
  ],
  "PILL BOXES & BOTTLES": [
    {
      name: "Rotating Dustproof Circular Pi...",
      image: "/products/NEW/STVRT209/STVRT2091.JPG",
      fallback: SITE_LOGO,
      alt: "Rotating Dustproof Circular Pill Organizer Case",
    },
    {
      name: "4.75in Round Flower 7 Day Pill...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "4.75in Round Flower 7 Day Pill Organizer With Rainbow Compartments",
    },
  ],
  "POKER CHIPS": [
    {
      name: "Casino-Themed Custom Poker Chi...",
      image: "/products/NEW/STVRT217/STVRT2171.JPG",
      fallback: SITE_LOGO,
      alt: "Casino-Themed Custom Poker Chips",
    },
    {
      name: "1.58” Casino Gameplay Multi Co...",
      image: "/products/NEW/STVRT226/STVRT2261.JPG",
      fallback: SITE_LOGO,
      alt: "1.58” Casino Gameplay Multi Color Poker Chips",
    },
  ],
  "POSTER FRAMES; Signs & Displays-General": [
    {
      name: "Menus Display Clear Acrylic Sl...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Menus Display Clear Acrylic Slant-Back Sign Stand Holder",
    },
  ],
  "Pencils-General, Pens-General": [
    {
      name: "7 Inch Inkless Eternal Pencil ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "7 Inch Inkless Eternal Pencil with Alloy Writing Tip",
    },
  ],
  "Pens": [
    {
      name: "Spinning Dice Ballpoint Pen",
      image: "/products/NEW/STVRT219/STVRT2191.JPG",
      fallback: SITE_LOGO,
      alt: "Spinning Dice Ballpoint Pen",
    },
    {
      name: "Sleek Aluminum Smart Gel Pen w...",
      image: "/products/NEW/STVRT233/STVRT2331.JPG",
      fallback: SITE_LOGO,
      alt: "Sleek Aluminum Smart Gel Pen with Built-in NFC",
    },
    {
      name: "Plastic Wood Click Pen with Bu...",
      image: "/products/NEW/STVRT234/STVRT2341.JPG",
      fallback: SITE_LOGO,
      alt: "Plastic Wood Click Pen with Built-in NFC",
    },
  ],
  "Pens-Ballpoint-Gel Ink": [
    {
      name: "Acrylic Logo Patch ABS Gel Ink...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Acrylic Logo Patch ABS Gel Ink Pen",
    },
  ],
  "Planners & Organizers-General; Organizers-General": [
    {
      name: "Water-Resistant Polyester Zipp...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Water-Resistant Polyester Zippered Watch Band Organizer Case With Inner Slots",
    },
  ],
  "Plaques-Memorial, Awards-Crystal": [
    {
      name: "6x7in Glowing Light Up Crystal...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "6x7in Glowing Light Up Crystal Memorial Plaque With Wood Base",
    },
  ],
  "Plaques-Memorial, Awards-General": [
    {
      name: "A4 Mirror Finish Stainless Ste...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "A4 Mirror Finish Stainless Steel Recognition Plaque",
    },
    {
      name: "A4 Wall/Table Metal Alloy Disp...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "A4 Wall/Table Metal Alloy Display Plaque With Velvet Backing",
    },
  ],
  "Plaques-Memorial, Awards-Recognition Plaques": [
    {
      name: "A5 Engravable Beechwood Memori...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "A5 Engravable Beechwood Memorial Keepsake Plaque",
    },
  ],
  "Pouches-General": [
    {
      name: "13.8" Travel Cable Organizer P...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "13.8" Travel Cable Organizer Pouch for Chargers & Accessories",
    },
  ],
  "Pouches-General; Boxes & Cases-Pen & Pencil": [
    {
      name: "Minimal Canvas Pencil Case Wit...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Minimal Canvas Pencil Case With Smooth Color-Matched Zipper",
    },
    {
      name: "Heavy-Duty Canvas Pouch For Tr...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Heavy-Duty Canvas Pouch For Travel And Toiletries",
    },
  ],
  "Protectors": [
    {
      name: "Instant-Fit Sports Lip Guard A...",
      image: "/products/NEW/STVRT240/STVRT2401.JPG",
      fallback: SITE_LOGO,
      alt: "Instant-Fit Sports Lip Guard And Mouth Guard",
    },
  ],
  "SHOVELS": [
    {
      name: "Kids 16" Beach Sand Shovel Toy...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Kids 16" Beach Sand Shovel Toy with Wooden Handle & Wide Scoop",
    },
  ],
  "STRAPS, LANYARDS": [
    {
      name: "Adjustable Phone Lanyard Cross...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Adjustable Phone Lanyard Crossbody Strap With Zipper Pouch",
    },
  ],
  "Shirts-Unisex": [
    {
      name: "Unisex Moisture Wicking Quick ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Unisex Moisture Wicking Quick Dry Athletic Tee",
    },
  ],
  "Signs & Displays-Magnetic; Magnets-Industrial/Toy": [
    {
      name: "Truck-Shaped Promotional Fridg...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Truck-Shaped Promotional Fridge Magnet for Branding",
    },
  ],
  "Stress Relievers": [
    {
      name: "Gambling Slot Machine Stress R...",
      image: "/products/NEW/STVRT222/STVRT2221.JPG",
      fallback: SITE_LOGO,
      alt: "Gambling Slot Machine Stress Reliever",
    },
    {
      name: "PU Foam Hockey Puck Stress Rel...",
      image: "/products/NEW/STVRT242/STVRT2421.JPG",
      fallback: SITE_LOGO,
      alt: "PU Foam Hockey Puck Stress Reliever",
    },
  ],
  "Stress Relievers-General, Toys-General": [
    {
      name: "Slow Rise Oil Drum Shaped PU S...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Slow Rise Oil Drum Shaped PU Stress Reliever",
    },
    {
      name: "Slow Rise PU Tire Stress Relie...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Slow Rise PU Tire Stress Reliever",
    },
    {
      name: "Slow Rise PU Fire Truck Stress...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Slow Rise PU Fire Truck Stress Reliever",
    },
    {
      name: "Slow Rise PU Skull Shaped Stre...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Slow Rise PU Skull Shaped Stress Reliever",
    },
  ],
  "Stress Relievers-General; HEATING PADS": [
    {
      name: "Wool-like Acrylic Reusable Cas...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Wool-like Acrylic Reusable Castor Oil Pack Waist And Neck Wrap Set",
    },
  ],
  "TAPE, Labels-Package": [
    {
      name: "2in x 164ft Biodegradable Rein...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "2in x 164ft Biodegradable Reinforced Water Activated Kraft Tape",
    },
    {
      name: "3 Inch X 164 Ft Reinforced Wat...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "3 Inch X 164 Ft Reinforced Water Activated Kraft Tape Roll",
    },
  ],
  "TISSUES": [
    {
      name: "Individually Wrapped Recycled ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Individually Wrapped Recycled 2 Ply Bathroom Tissue Roll",
    },
  ],
  "Tags": [
    {
      name: "Waterproof NFC Epoxy Sticker T...",
      image: "/products/NEW/STVRT230/STVRT2301.JPG",
      fallback: SITE_LOGO,
      alt: "Waterproof NFC Epoxy Sticker Tag",
    },
  ],
  "Tents": [
    {
      name: "18" Pop-Up Sun Shade Mini Tent...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "18" Pop-Up Sun Shade Mini Tent with UV Protection & Storage Pockets",
    },
  ],
  "Tote Bags-Boat": [
    {
      name: "20L Waterproof Dry Bag Swim Bu...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "20L Waterproof Dry Bag Swim Buoy with Roll-Top Closure",
    },
  ],
  "Tote Bags-Insulated, Coolers": [
    {
      name: "Insulated Medicine Cooler Case...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Insulated Medicine Cooler Case with Ice Packs for Travel",
    },
  ],
  "Tote Bags-Non Woven": [
    {
      name: "70GSM Non-Woven Gusseted Reinf...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "70GSM Non-Woven Gusseted Reinforced Handles Flat Bottom Tote",
    },
  ],
  "Towels-Beach, Covers-Furniture": [
    {
      name: "83" Microfiber Beach Chair Tow...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "83" Microfiber Beach Chair Towel Cover with Storage Pocket",
    },
  ],
  "Towels-General; COOLING TOWELS & SCARVES": [
    {
      name: "40"x 12" Full Color Polyester ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "40"x 12" Full Color Polyester Cooling Towel",
    },
  ],
  "USB/FLASH DRIVES; COMPUTER ACCESSORIES": [
    {
      name: "128GB Wallet-Size Credit Card ...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "128GB Wallet-Size Credit Card USB Flash Drive",
    },
  ],
  "Umbrellas-Folding": [
    {
      name: "58 Inch Auto Open Windproof Go...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "58 Inch Auto Open Windproof Golf Umbrella W/ 190T Pongee",
    },
  ],
  "Vests-General": [
    {
      name: "6 lb Neoprene Weighted Trainin...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "6 lb Neoprene Weighted Training Vest with Pocket & Reflective Strips",
    },
  ],
  "Wine Chillers, Coolers": [
    {
      name: "Reusable Wine Bottle Cooler Sl...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "Reusable Wine Bottle Cooler Sleeve with Quick-Freeze Gel Pack",
    },
  ],
  "Wristbands-General": [
    {
      name: "RFID Cloth Wristbands For Secu...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "RFID Cloth Wristbands For Secure Event Entry And Fast Check In",
    },
    {
      name: "RFID Silicone Wristband With N...",
      image: "None",
      fallback: SITE_LOGO,
      alt: "RFID Silicone Wristband With NFC Chip For Events",
    },
  ],
}
