#!/usr/bin/env python3.11
import json
import re

def verify_nav_data():
    # 加载产品数据
    with open("/home/ubuntu/suntopify/data/products.json", "r") as f:
        products_data = json.load(f)
    product_lookup = {p["id"]: p for p in products_data}

    # 预期的8个主分类
    expected_categories = {
        "Promotional Gifts", "Bags & Totes", "Health & Wellness", "Drinkware",
        "Office & Stationery", "Writing Instruments", "Apparel & Accessories", "Tech Accessories"
    }

    # 读取 nav-data.ts 文件内容
    with open("/home/ubuntu/suntopify/lib/nav-data.ts", "r") as f:
        content = f.read()

    # 使用正则表达式提取 NAV_DATA 对象字符串
    match = re.search(r"export const NAV_DATA = (\{.*\});", content, re.DOTALL)
    if not match:
        print("错误: 在 nav-data.ts 中未找到 NAV_DATA。")
        return

    nav_data_str = match.group(1)
    # 移除注释
    nav_data_str = re.sub(r"//.*", "", nav_data_str)
    # 将 JS 对象键转换为 JSON 字符串键 (e.g., id: -> "id":)
    nav_data_str = re.sub(r"([a-zA-Z0-9_]+):", r'"\1":', nav_data_str)
    # 将带空格的键名加上引号
    nav_data_str = re.sub(r'"([A-Za-z ]+)":', r'"\1":', nav_data_str)
    # 将单引号替换为双引号
    nav_data_str = nav_data_str.replace("'", '"')
    # 移除数组或对象中末尾多余的逗号
    nav_data_str = re.sub(r",(\s*[}\]])", r"\1", nav_data_str)

    try:
        nav_data = json.loads(nav_data_str)
    except json.JSONDecodeError as e:
        print(f"解析 nav-data.ts 内容时发生 JSON 错误: {e}")
        # 打印出问题字符串附近的内容以便调试
        print(f"问题字符串: ...{nav_data_str[e.pos-30:e.pos+30]}...")
        return

    # 1. 验证分类
    nav_categories = set(nav_data.keys())
    if nav_categories == expected_categories:
        print("成功: nav-data.ts 中的所有分类均与8个主分类匹配。")
    else:
        print("错误: nav-data.ts 中的分类不匹配!")
        if missing := expected_categories - nav_categories:
            print(f"  nav-data.ts 缺失分类: {missing}")
        if extra := nav_categories - expected_categories:
            print(f"  nav-data.ts 多出分类: {extra}")

    # 2. 验证每个分类下的产品
    all_nav_product_ids = set()
    errors = []
    for category, products in nav_data.items():
        for product in products:
            p_id = product.get("id")
            all_nav_product_ids.add(p_id)
            if p_id not in product_lookup:
                errors.append(f"  - 错误: 产品 ID '{p_id}' (在分类 '{category}'下) 在 products.json 中未找到。")
                continue
            
            source_product = product_lookup[p_id]
            if source_product["name"] != product["name"]:
                errors.append(f"  - 警告: 产品 {p_id} 名称不匹配。源: '{source_product['name']}', 导航: '{product['name']}'")
            if source_product["image"] != product["image"]:
                errors.append(f"  - 警告: 产品 {p_id} 图片路径不匹配。源: '{source_product['image']}', 导航: '{product['image']}'")
            if source_product["category"] != product["category"]:
                errors.append(f"  - 警告: 产品 {p_id} 分类不匹配。源: '{source_product['category']}', 导航: '{product['category']}'")

    if not errors:
        print("成功: nav-data.ts 中的所有产品均有效, 且与 products.json 中的信息 (名称, 图片, 分类) 一致。")
    else:
        print("\n发现以下问题:")
        for error in errors:
            print(error)

    print(f"\nnav-data.ts 中包含 {len(all_nav_product_ids)} 个独立产品。")

if __name__ == "__main__":
    verify_nav_data()
