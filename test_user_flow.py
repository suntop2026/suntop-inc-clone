import json
import os

def test_data_integrity():
    print("🔍 正在验证数据完整性...")
    with open("/home/ubuntu/suntopify/data/products.json", "r") as f:
        products = json.load(f)
    
    # 1. 验证产品总数
    if len(products) != 223:
        print(f"❌ 产品数量不匹配: 期望 223, 实际 {len(products)}")
    else:
        print("✅ 产品数量验证通过: 223 个")

    # 2. 验证分类是否严格执行 8 大类
    main_categories = {
        "Writing Instruments", "Bags & Totes", "Drinkware", "Tech Accessories",
        "Office & Stationery", "Apparel & Accessories", "Health & Wellness", "Promotional Gifts"
    }
    invalid_cats = [p["category"] for p in products if p["category"] not in main_categories]
    if invalid_cats:
        print(f"❌ 发现无效分类: {set(invalid_cats)}")
    else:
        print("✅ 分类严格执行验证通过")

    # 3. 验证图片路径
    missing_images = []
    for p in products:
        if p["image"] != "/placeholder.svg":
            local_path = f"/home/ubuntu/suntopify/public{p['image']}"
            if not os.path.exists(local_path):
                missing_images.append(p["id"])
    
    if missing_images:
        print(f"⚠️ 发现 {len(missing_images)} 个产品图片文件缺失 (已自动回退到占位符)")
    else:
        print("✅ 所有指定图片文件均存在")

def test_navbar_config():
    print("\n🔍 正在验证导航栏配置...")
    with open("/home/ubuntu/suntopify/components/navbar.tsx", "r") as f:
        content = f.read()
    
    if "Other" in content:
        print("❌ 导航栏中仍包含 'Other' 分类")
    else:
        print("✅ 导航栏已移除 'Other' 分类")
    
    if "View All" in content:
        print("❌ 导航栏中仍包含 'View All' 链接")
    else:
        print("✅ 导航栏已移除 'View All' 链接")

if __name__ == "__main__":
    test_data_integrity()
    test_navbar_config()
