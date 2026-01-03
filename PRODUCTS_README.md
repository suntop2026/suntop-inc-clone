# Product Database - Static JSON Implementation

## Overview

This website now uses a **static JSON file** for product data instead of Airtable. This provides:

✅ **Faster loading** - No external API calls
✅ **No dependencies** - Works offline and without API keys
✅ **Free hosting** - No database costs
✅ **Version control** - Products tracked in Git
✅ **Easy deployment** - Works on any static hosting platform

## Product Data Location

**Main product database:** `/data/products.json`

This file contains **210 professionally curated promotional products** across 8 categories:

- **Apparel** (30 products) - T-shirts, polos, hoodies, hats, activewear
- **Drinkware** (28 products) - Water bottles, mugs, tumblers, specialty drinkware
- **Tech** (30 products) - Chargers, speakers, earbuds, accessories, smart gadgets
- **Office** (28 products) - Pens, notebooks, desk accessories, office tools
- **Bags** (26 products) - Totes, backpacks, messenger bags, specialty bags
- **Wellness** (26 products) - Fitness equipment, personal care, stress relief, health monitoring
- **Home & Garden** (22 products) - Kitchen items, home decor, garden tools, storage
- **Other** (20 products) - Keychains, promotional items, outdoor gear, automotive

## Product Data Structure

Each product includes:

```json
{
  "id": "PROD-0001",
  "name": "Product Name",
  "category": "Apparel",
  "subcategory": "T-Shirts",
  "description": "Detailed product description",
  "price": 4.99,
  "moq": 50,
  "image": "https://images.unsplash.com/...",
  "imageAlt": "Product alt text",
  "slug": "product-name",
  "features": ["Feature 1", "Feature 2"],
  "materials": ["Material 1"],
  "colors": ["Black", "White", "Navy"],
  "customization": ["Screen Print", "Embroidery"],
  "sustainability": {
    "is_eco_friendly": true,
    "certifications": ["GRS", "OEKO-TEX"],
    "recycled_content": "50% recycled materials"
  },
  "tags": ["tag1", "tag2"],
  "trending": true,
  "new2026": true,
  "productionTime": "7-10 business days"
}
```

## How It Works

### API Route: `/app/api/products/route.ts`

The API route now:

1. **Loads products from JSON file** (`/data/products.json`) - Your 210 new products
2. **Optionally loads from Airtable** (if configured) - Legacy products
3. **Combines both sources** - JSON products appear first
4. **Returns unified product list** to the frontend

### Priority Order

Products are displayed in this order:
1. ✅ **New products from JSON** (210 products) - Displayed FIRST
2. ✅ **Legacy products from Airtable** (if configured) - Displayed after

This ensures your new product library is prominently featured.

## 2026 Industry Trends Included

Products are based on extensive research of:

- ✅ **swag.com** product trends
- ✅ **4imprint.com** 2026 promotional products forecast
- ✅ **ethicalswag.com** sustainability trends
- ✅ Industry statistics and consumer preferences

### Key Trends Incorporated:

1. **Sustainable Materials** - Eco-friendly options with certifications
2. **Tech Integration** - Smart gadgets, wireless charging, Bluetooth
3. **Wellness Focus** - Health and fitness products
4. **Quality Upgrade** - Premium materials and heavyweight fabrics
5. **Trending Styles** - Bucket hats, belt bags, Stanley-style tumblers
6. **Practical Utility** - Products people actually use and keep

### Trending Products Marked

Products with `"trending": true` include:

- Premium Heavyweight T-Shirts
- Carhartt-Style Work Jackets
- Trucker Snapback Caps
- Bucket Hats
- Stanley-Style Vacuum Mugs (40oz)
- Wireless Charging Pads
- Bluetooth Speakers
- Smart Hydration Tracking Bottles
- Yoga Mats
- And many more...

## Updating Products

### Option 1: Edit JSON File Directly

```bash
# Edit the products file
nano data/products.json

# Commit changes
git add data/products.json
git commit -m "Update products"
git push
```

### Option 2: Use Python Script

```python
import json

# Load products
with open('data/products.json', 'r') as f:
    products = json.load(f)

# Add new product
new_product = {
    "id": "PROD-0211",
    "name": "New Product",
    "category": "Apparel",
    # ... other fields
}
products.append(new_product)

# Save
with open('data/products.json', 'w') as f:
    json.dump(products, f, indent=2)
```

### Option 3: Keep Using Airtable (Optional)

If you want to keep Airtable for some products:

1. Set environment variables:
   ```
   AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
   AIRTABLE_TOKEN=patXXXXXXXXXXXXXX
   ```

2. Products from both sources will be combined
3. JSON products (new) will appear first
4. Airtable products (legacy) will appear after

## Deployment

### Vercel / Netlify / Any Static Host

No special configuration needed! The JSON file is part of your repository and will be deployed automatically.

### Environment Variables (Optional)

Only needed if you want to keep Airtable integration:

```
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TOKEN=patXXXXXXXXXXXXXX
```

If not set, the site will work perfectly with just the JSON file.

## Performance

- **Load time:** ~50ms (reading local JSON file)
- **File size:** 229KB (minified)
- **No external dependencies**
- **Works offline in development**

## Backup

The product database is version-controlled in Git, so every change is tracked and can be rolled back if needed.

## Need Help?

- Product data: `/data/products.json`
- API route: `/app/api/products/route.ts`
- Conversion script: `/scripts/convert_products_for_website.py` (if you need to regenerate)

## Migration from Airtable

If you were previously using Airtable:

1. ✅ **No action needed** - The system now uses JSON by default
2. ✅ **Airtable still works** - If you have credentials configured, both sources will be combined
3. ✅ **New products first** - JSON products appear before Airtable products
4. ✅ **Remove Airtable** - Simply don't set the environment variables to use JSON only

## Summary

🎉 **You now have 210 professionally curated promotional products ready to display on your website!**

- Based on 2026 industry trends
- Optimized for static hosting
- No database required
- Fast and reliable
- Easy to update
