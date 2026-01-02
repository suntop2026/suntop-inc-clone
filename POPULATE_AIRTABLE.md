# Populate Airtable with Products

This script adds 32 popular promotional products to your Airtable database.

## Products Included

### Apparel (4 items)
- Premium Cotton T-Shirts - $4.99
- Performance Polo Shirts - $12.99
- Embroidered Baseball Caps - $6.49
- Fleece Hoodies - $18.99

### Drinkware (4 items)
- Stainless Steel Water Bottles - $8.99
- Ceramic Coffee Mugs - $3.49
- Insulated Tumblers - $11.99
- Collapsible Water Bottles - $7.49

### Tech (5 items)
- Custom USB Flash Drives - $5.99
- Wireless Power Banks - $15.99
- Bluetooth Speakers - $19.99
- Phone PopSockets - $2.99
- Wireless Earbuds - $24.99

### Office (4 items)
- Metal Pens with Stylus - $1.99
- Hardcover Notebooks - $4.49
- Desk Organizers - $8.99
- Sticky Note Sets - $2.49

### Bags (4 items)
- Canvas Tote Bags - $3.99
- Drawstring Backpacks - $2.99
- Laptop Backpacks - $16.99
- Insulated Cooler Bags - $9.99

### Wellness (4 items)
- Yoga Mats with Strap - $14.99
- Resistance Bands Set - $7.99
- Hand Sanitizer Bottles - $1.49
- Stress Relief Balls - $1.99

### Home & Garden (4 items)
- Fleece Blankets - $12.99
- Scented Candles - $6.99
- Cork Coaster Sets - $3.99
- BBQ Tool Sets - $19.99

### Other (4 items)
- Metal Keychains - $1.49
- Badge Reels - $2.49
- Lanyards - $0.99
- Enamel Pins - $2.99

## How to Run

### Option 1: Using Environment Variables (Recommended)

```bash
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX AIRTABLE_TOKEN=patXXXXXXXXXXXXXX node scripts/populate-airtable.js
```

### Option 2: Modify the Script

Edit `scripts/populate-airtable.js` and replace:
- `YOUR_BASE_ID_HERE` with your Airtable Base ID
- `YOUR_TOKEN_HERE` with your Airtable Personal Access Token

Then run:
```bash
node scripts/populate-airtable.js
```

## Getting Your Credentials

1. **Base ID**: Found in your Airtable API documentation at https://airtable.com/api
2. **Token**: Create at https://airtable.com/create/tokens
   - Required scopes: `data.records:write`
   - Add access to your specific base

## Expected Output

```
[v0] Starting Airtable population...
[v0] Base ID: appXXXXXXXXXXXXXX
[v0] Table: Products
[v0] Total products to upload: 32
[v0] ✓ Batch 1: Added 10 products
[v0] ✓ Batch 2: Added 10 products
[v0] ✓ Batch 3: Added 10 products
[v0] ✓ Batch 4: Added 2 products

[v0] ========================================
[v0] Population complete!
[v0] Successfully added: 32 products
[v0] Failed: 0 products
[v0] ========================================
```

## Troubleshooting

### Error: "Missing environment variables"
- Make sure you've set `AIRTABLE_BASE_ID` and `AIRTABLE_TOKEN`

### Error: "Invalid token"
- Check your token has the correct scopes (`data.records:write`)
- Ensure the token has access to your specific base

### Error: "Table not found"
- Verify your table is named exactly "Products" (case-sensitive)
- Or modify the `TABLE_NAME` variable in the script

### Rate Limiting
- The script includes a 250ms delay between batches
- If you hit rate limits, increase the delay in the `setTimeout` call

## Note

- This script will ADD products to your existing table
- It will NOT delete or update existing products
- You may want to clear your table before running if you want a fresh start
- All image URLs use high-quality Unsplash images
