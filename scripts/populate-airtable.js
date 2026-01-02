// Script to populate Airtable with popular promotional products
// Run with: node scripts/populate-airtable.js

const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || "YOUR_BASE_ID_HERE"
const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN || "YOUR_TOKEN_HERE"
const TABLE_NAME = "Products"

// Popular promotional products data based on industry standards
const products = [
  // Apparel
  {
    Name: "Premium Cotton T-Shirts",
    Category: "Apparel",
    Price: 4.99,
    MOQ: 50,
    Image: [{ url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Performance Polo Shirts",
    Category: "Apparel",
    Price: 12.99,
    MOQ: 36,
    Image: [{ url: "https://images.unsplash.com/photo-1626497764746-6dc36546d24d?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Embroidered Baseball Caps",
    Category: "Apparel",
    Price: 6.49,
    MOQ: 48,
    Image: [{ url: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Fleece Hoodies",
    Category: "Apparel",
    Price: 18.99,
    MOQ: 24,
    Image: [{ url: "https://images.unsplash.com/photo-15568218403a63f95609a7?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Quarter-Zip Pullover",
    Category: "Apparel",
    Price: 22.99,
    MOQ: 24,
    Image: [{ url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Trucker Hats",
    Category: "Apparel",
    Price: 5.99,
    MOQ: 72,
    Image: [{ url: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Crewneck Sweatshirts",
    Category: "Apparel",
    Price: 16.99,
    MOQ: 24,
    Image: [{ url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Athletic Shorts",
    Category: "Apparel",
    Price: 9.99,
    MOQ: 48,
    Image: [{ url: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Beanie Hats",
    Category: "Apparel",
    Price: 4.99,
    MOQ: 100,
    Image: [{ url: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&h=800&fit=crop&q=80" }],
  },

  // Drinkware
  {
    Name: "Stainless Steel Water Bottles",
    Category: "Drinkware",
    Price: 8.99,
    MOQ: 48,
    Image: [{ url: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Ceramic Coffee Mugs",
    Category: "Drinkware",
    Price: 3.49,
    MOQ: 100,
    Image: [{ url: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Insulated Tumblers",
    Category: "Drinkware",
    Price: 11.99,
    MOQ: 36,
    Image: [{ url: "https://images.unsplash.com/photo-1609801438967-6a5a2f0fef62?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Collapsible Water Bottles",
    Category: "Drinkware",
    Price: 7.49,
    MOQ: 50,
    Image: [{ url: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Glass Water Bottles",
    Category: "Drinkware",
    Price: 9.49,
    MOQ: 36,
    Image: [{ url: "https://images.unsplash.com/photo-1624127154435-e4f8b8b8e0c2?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Travel Mugs with Lid",
    Category: "Drinkware",
    Price: 10.99,
    MOQ: 48,
    Image: [{ url: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Mason Jar Mugs",
    Category: "Drinkware",
    Price: 6.99,
    MOQ: 72,
    Image: [{ url: "https://images.unsplash.com/photo-1544145842-c8c050b17eb5?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Stadium Cups",
    Category: "Drinkware",
    Price: 1.99,
    MOQ: 250,
    Image: [{ url: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=800&h=800&fit=crop&q=80" }],
  },

  // Tech
  {
    Name: "Custom USB Flash Drives",
    Category: "Tech",
    Price: 5.99,
    MOQ: 100,
    Image: [{ url: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Wireless Power Banks",
    Category: "Tech",
    Price: 15.99,
    MOQ: 25,
    Image: [{ url: "https://images.unsplash.com/photo-1609091837239-c5a1a4a07af7?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Bluetooth Speakers",
    Category: "Tech",
    Price: 19.99,
    MOQ: 24,
    Image: [{ url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Phone PopSockets",
    Category: "Tech",
    Price: 2.99,
    MOQ: 200,
    Image: [{ url: "https://images.unsplash.com/photo-1585060540708-dfaf72ae4b04?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Wireless Earbuds",
    Category: "Tech",
    Price: 24.99,
    MOQ: 20,
    Image: [{ url: "https://images.unsplash.com/photo-1606841837239-c588db7e25a7?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Wireless Charging Pads",
    Category: "Tech",
    Price: 12.99,
    MOQ: 36,
    Image: [{ url: "https://images.unsplash.com/photo-1591290619762-c5a3d5bf1137?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Phone Stands",
    Category: "Tech",
    Price: 4.99,
    MOQ: 100,
    Image: [{ url: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Webcam Covers",
    Category: "Tech",
    Price: 0.99,
    MOQ: 500,
    Image: [{ url: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Cable Organizers",
    Category: "Tech",
    Price: 2.49,
    MOQ: 200,
    Image: [{ url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "LED Desk Lamps",
    Category: "Tech",
    Price: 18.99,
    MOQ: 24,
    Image: [{ url: "https://images.unsplash.com/photo-1544866092-1a5163f7cc58?w=800&h=800&fit=crop&q=80" }],
  },

  // Office
  {
    Name: "Metal Pens with Stylus",
    Category: "Office",
    Price: 1.99,
    MOQ: 250,
    Image: [{ url: "https://images.unsplash.com/photo-1586943759665-ab7d56e7e940?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Hardcover Notebooks",
    Category: "Office",
    Price: 4.49,
    MOQ: 100,
    Image: [{ url: "https://images.unsplash.com/photo-1531348278863-da4f4c84f58e?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Desk Organizers",
    Category: "Office",
    Price: 8.99,
    MOQ: 50,
    Image: [{ url: "https://images.unsplash.com/photo-1588672676834-c9e5efb8d969?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Sticky Note Sets",
    Category: "Office",
    Price: 2.49,
    MOQ: 200,
    Image: [{ url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Leather Portfolios",
    Category: "Office",
    Price: 14.99,
    MOQ: 36,
    Image: [{ url: "https://images.unsplash.com/photo-1553531087-88e66e8ba475?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Highlighter Sets",
    Category: "Office",
    Price: 3.99,
    MOQ: 100,
    Image: [{ url: "https://images.unsplash.com/photo-1587845750092-6d14388bca0f?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Clipboards",
    Category: "Office",
    Price: 4.49,
    MOQ: 100,
    Image: [{ url: "https://images.unsplash.com/photo-1586953208270-e5a0b5e4c2e9?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Business Card Holders",
    Category: "Office",
    Price: 6.99,
    MOQ: 72,
    Image: [{ url: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Desk Calendars",
    Category: "Office",
    Price: 5.99,
    MOQ: 100,
    Image: [{ url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=800&fit=crop&q=80" }],
  },

  // Bags
  {
    Name: "Canvas Tote Bags",
    Category: "Bags",
    Price: 3.99,
    MOQ: 100,
    Image: [{ url: "https://images.unsplash.com/photo-1591348278863-da4f4c84f58e?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Drawstring Backpacks",
    Category: "Bags",
    Price: 2.99,
    MOQ: 150,
    Image: [{ url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Laptop Backpacks",
    Category: "Bags",
    Price: 16.99,
    MOQ: 30,
    Image: [{ url: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Insulated Cooler Bags",
    Category: "Bags",
    Price: 9.99,
    MOQ: 48,
    Image: [{ url: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Messenger Bags",
    Category: "Bags",
    Price: 19.99,
    MOQ: 24,
    Image: [{ url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Gym Duffel Bags",
    Category: "Bags",
    Price: 14.99,
    MOQ: 36,
    Image: [{ url: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Clear Stadium Bags",
    Category: "Bags",
    Price: 6.99,
    MOQ: 100,
    Image: [{ url: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Foldable Tote Bags",
    Category: "Bags",
    Price: 2.49,
    MOQ: 250,
    Image: [{ url: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&h=800&fit=crop&q=80" }],
  },

  // Wellness
  {
    Name: "Yoga Mats with Strap",
    Category: "Wellness",
    Price: 14.99,
    MOQ: 25,
    Image: [{ url: "https://images.unsplash.com/photo-1601925260368-2f2b69dff9d2?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Resistance Bands Set",
    Category: "Wellness",
    Price: 7.99,
    MOQ: 50,
    Image: [{ url: "https://images.unsplash.com/photo-1598289431777-59e82cf5dbd8?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Hand Sanitizer Bottles",
    Category: "Wellness",
    Price: 1.49,
    MOQ: 300,
    Image: [{ url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Stress Relief Balls",
    Category: "Wellness",
    Price: 1.99,
    MOQ: 250,
    Image: [{ url: "https://images.unsplash.com/photo-1625664731777-59e82cf51137?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Fitness Towels",
    Category: "Wellness",
    Price: 6.99,
    MOQ: 100,
    Image: [{ url: "https://images.unsplash.com/photo-1527337331855-0199d1c58e4e?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Jump Ropes",
    Category: "Wellness",
    Price: 4.99,
    MOQ: 100,
    Image: [{ url: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Massage Rollers",
    Category: "Wellness",
    Price: 11.99,
    MOQ: 36,
    Image: [{ url: "https://images.unsplash.com/photo-1616008421091-0dac80df3a2f?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "First Aid Kits",
    Category: "Wellness",
    Price: 8.99,
    MOQ: 50,
    Image: [{ url: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&h=800&fit=crop&q=80" }],
  },

  // Home & Garden
  {
    Name: "Fleece Blankets",
    Category: "Home & Garden",
    Price: 12.99,
    MOQ: 36,
    Image: [{ url: "https://images.unsplash.com/photo-1605022600070-efad91ecf46e?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Scented Candles",
    Category: "Home & Garden",
    Price: 6.99,
    MOQ: 72,
    Image: [{ url: "https://images.unsplash.com/photo-1602874103328-eac38a683ce7?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Cork Coaster Sets",
    Category: "Home & Garden",
    Price: 3.99,
    MOQ: 100,
    Image: [{ url: "https://images.unsplash.com/photo-1621351183012-e2f1f6f8b4e0?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "BBQ Tool Sets",
    Category: "Home & Garden",
    Price: 19.99,
    MOQ: 24,
    Image: [{ url: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Picnic Blankets",
    Category: "Home & Garden",
    Price: 15.99,
    MOQ: 24,
    Image: [{ url: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Garden Tool Sets",
    Category: "Home & Garden",
    Price: 22.99,
    MOQ: 24,
    Image: [{ url: "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Cutting Boards",
    Category: "Home & Garden",
    Price: 12.99,
    MOQ: 48,
    Image: [{ url: "https://images.unsplash.com/photo-1594135793120-967bb5f82b3c?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Wine Bottle Openers",
    Category: "Home & Garden",
    Price: 7.99,
    MOQ: 72,
    Image: [{ url: "https://images.unsplash.com/photo-1607622750867-f5157e56bd06?w=800&h=800&fit=crop&q=80" }],
  },

  // Other
  {
    Name: "Metal Keychains",
    Category: "Other",
    Price: 1.49,
    MOQ: 300,
    Image: [{ url: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Badge Reels",
    Category: "Other",
    Price: 2.49,
    MOQ: 200,
    Image: [{ url: "https://images.unsplash.com/photo-1620843002805-05a08cb72f57?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Lanyards",
    Category: "Other",
    Price: 0.99,
    MOQ: 500,
    Image: [{ url: "https://images.unsplash.com/photo-1591696205679-6cd13a4253f0?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Enamel Pins",
    Category: "Other",
    Price: 2.99,
    MOQ: 100,
    Image: [{ url: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Custom Stickers",
    Category: "Other",
    Price: 0.49,
    MOQ: 1000,
    Image: [{ url: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Magnets",
    Category: "Other",
    Price: 1.29,
    MOQ: 500,
    Image: [{ url: "https://images.unsplash.com/photo-1626947550867-f5157e56bd06?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Wristbands",
    Category: "Other",
    Price: 0.79,
    MOQ: 500,
    Image: [{ url: "https://images.unsplash.com/photo-1616804845012-10c5b4e6aa3b?w=800&h=800&fit=crop&q=80" }],
  },
  {
    Name: "Luggage Tags",
    Category: "Other",
    Price: 2.99,
    MOQ: 200,
    Image: [{ url: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&h=800&fit=crop&q=80" }],
  },
]

async function populateAirtable() {
  console.log("[v0] Starting Airtable population...")
  console.log(`[v0] Base ID: ${AIRTABLE_BASE_ID}`)
  console.log(`[v0] Table: ${TABLE_NAME}`)
  console.log(`[v0] Total products to upload: ${products.length}`)

  if (AIRTABLE_BASE_ID === "YOUR_BASE_ID_HERE" || AIRTABLE_TOKEN === "YOUR_TOKEN_HERE") {
    console.error("[v0] Error: Please set AIRTABLE_BASE_ID and AIRTABLE_TOKEN environment variables")
    console.log("[v0] Usage: AIRTABLE_BASE_ID=appXXX AIRTABLE_TOKEN=patXXX node scripts/populate-airtable.js")
    process.exit(1)
  }

  // Airtable API allows max 10 records per request
  const batchSize = 10
  let successCount = 0
  let errorCount = 0

  for (let i = 0; i < products.length; i += batchSize) {
    const batch = products.slice(i, i + batchSize)

    try {
      const records = batch.map((product) => ({
        fields: product,
      }))

      const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ records }),
      })

      if (response.ok) {
        const data = await response.json()
        successCount += data.records.length
        console.log(`[v0] ✓ Batch ${Math.floor(i / batchSize) + 1}: Added ${data.records.length} products`)

        batch.forEach((p) => console.log(`   - ${p.Name}`))
      } else {
        const error = await response.text()
        errorCount += batch.length
        console.error(`[v0] ✗ Batch ${Math.floor(i / batchSize) + 1} failed:`, error)
      }

      // Rate limiting: Airtable allows 5 requests per second
      await new Promise((resolve) => setTimeout(resolve, 250))
    } catch (error) {
      errorCount += batch.length
      console.error(`[v0] ✗ Batch ${Math.floor(i / batchSize) + 1} error:`, error.message)
    }
  }

  console.log("\n[v0] ========================================")
  console.log(`[v0] Population complete!`)
  console.log(`[v0] Successfully added: ${successCount} products`)
  console.log(`[v0] Failed: ${errorCount} products`)
  console.log("[v0] ========================================\n")
}

// Run the script
populateAirtable().catch(console.error)
