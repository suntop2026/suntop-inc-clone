#!/usr/bin/env python3.11
import json
import pandas as pd
import os

def verify_products():
    # Load the JSON data
    with open("/home/ubuntu/suntopify/data/products.json", "r") as f:
        json_data = json.load(f)

    # Load the Excel data
    excel_data = pd.read_excel("/home/ubuntu/upload/独立站产品资料.xlsx")

    # Create sets of product numbers for comparison
    json_product_numbers = {product["specs"]["Product Number"] for product in json_data}
    excel_product_numbers = set(excel_data["Product_Number"])

    # --- Verification Steps ---

    # 1. Verify the total number of products
    print(f"Total products in JSON: {len(json_data)}")
    print(f"Total products in Excel: {len(excel_data)}")
    if len(json_data) != len(excel_data):
        print("Error: Product count mismatch!")
        return

    # 2. Verify that all product numbers match
    if json_product_numbers == excel_product_numbers:
        print("Success: All product numbers match between JSON and Excel.")
    else:
        print("Error: Product number mismatch!")
        missing_in_json = excel_product_numbers - json_product_numbers
        missing_in_excel = json_product_numbers - excel_product_numbers
        if missing_in_json:
            print(f"Missing in JSON: {missing_in_json}")
        if missing_in_excel:
            print(f"Missing in Excel: {missing_in_excel}")
        return

    # 3. Identify products with missing images or incorrect image paths
    products_with_missing_images = []
    image_dir = "/home/ubuntu/suntopify/public"
    for product in json_data:
        image_path_relative = product.get("image")
        if not image_path_relative:
            products_with_missing_images.append(product["specs"]["Product Number"])
            continue
        
        full_image_path = os.path.join(image_dir, image_path_relative.lstrip("/"))
        if not os.path.exists(full_image_path):
            products_with_missing_images.append(product["specs"]["Product Number"])

    print(f"\nFound {len(products_with_missing_images)} products with missing images or incorrect paths:")
    for product_number in products_with_missing_images:
        print(product_number)

if __name__ == "__main__":
    verify_products()
