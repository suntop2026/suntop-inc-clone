# Airtable CMS Integration Guide

This project uses Airtable as a Content Management System (CMS) for product data.

## Quick Setup

1. **Get your Airtable credentials:**
   - Go to https://airtable.com/api and select your base
   - Copy your Base ID (starts with `app...`)
   - Note your table name (default: `Products`)
   - Create a Personal Access Token at https://airtable.com/create/tokens

2. **Configure environment variables in v0:**
   
   **Add these in the Vars section of the v0 in-chat sidebar (left side of screen):**
   
   Required variables:
   ```
   AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
   AIRTABLE_TOKEN=patXXXXXXXXXXXXXXXXXXXXXXXX
   ```
   
   **IMPORTANT:** Do NOT use `NEXT_PUBLIC_` prefix. These are server-side only variables for security.

3. **For Local Development:**
   
   Create a `.env.local` file in your project root:
   ```env
   AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
   AIRTABLE_TOKEN=patXXXXXXXXXXXXXXXXXXXXXXXX
   ```

4. **Redeploy** your application to apply the changes

## Security

- ✅ API token is kept secure on the server side
- ✅ No sensitive credentials exposed to the client
- ✅ API route handles all Airtable authentication
- ✅ Client fetches from `/api/products` (not directly from Airtable)

## Airtable Table Structure

Your Airtable table should have these fields:

| Field Name | Field Type | Description |
|------------|------------|-------------|
| `Name` | Single line text | Product title/name |
| `Category` | Single select | Product category (Apparel, Drinkware, Tech, etc.) |
| `Image` | Attachment | Product image (first image will be used) |
| `MOQ` | Number | Minimum Order Quantity |
| `Price` | Currency | Starting price per unit |

### Image Field Structure

Airtable's attachment field returns a nested JSON structure:
```json
{
  "Image": [
    {
      "id": "attXXXXXXXXXXXXXX",
      "url": "https://dl.airtable.com/.attachments/...",
      "filename": "product.jpg",
      "size": 123456,
      "type": "image/jpeg"
    }
  ]
}
```

The code automatically extracts the first image's URL: `record.fields.Image[0].url`

## How It Works

1. **API Route:** `/api/products` route handles Airtable API calls server-side
2. **Authentication:** Server-side environment variables keep your token secure
3. **Data Transformation:** Airtable records are transformed into Product objects
4. **Image Handling:** First attachment URL is extracted automatically
5. **Client Fetch:** Component fetches from `/api/products` (not Airtable directly)
6. **Fallback:** If Airtable is unavailable, sample products are shown

## Features

- ✅ Secure server-side API calls
- ✅ Automatic image URL extraction from Airtable attachments
- ✅ Category filtering
- ✅ Loading states
- ✅ Error handling with fallback data
- ✅ Price and MOQ formatting
- ✅ Real-time product updates

## Troubleshooting

**Products not loading?**
- Open browser console and check for `[v0]` debug messages
- Verify environment variables are set in **Vars section** (left sidebar)
- Verify the Base ID starts with `app`
- Verify the token starts with `pat` (Personal Access Token)
- Check that the table is named exactly "Products" (case-sensitive)
- Redeploy your app after adding environment variables

**Images not displaying?**
- Verify the Image field is an "Attachment" type in Airtable
- Check that at least one image is uploaded to each record
- Images must be publicly accessible

**Still showing sample data?**
- Check if the error message appears at the top of the product grid
- Look at browser console for detailed error logs
- Verify your Airtable token has permissions to read the base

## Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `AIRTABLE_BASE_ID` | Yes | Your Airtable base ID | `appXXXXXXXXXXXXXX` |
| `AIRTABLE_TOKEN` | Yes | Your Personal Access Token | `patXXXXXXXXXXXXXX` |

**Note:** Alternative variable names `AIRTABLE_API_KEY` is also supported for the token.

## Need Help?

- Airtable API Documentation: https://airtable.com/api
- Create Personal Access Token: https://airtable.com/create/tokens
- v0 Documentation: Check the in-chat sidebar for environment variable setup
