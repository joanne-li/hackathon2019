def determine_score(brand, product_industry):
    '''
    The higher the score, the better it is
    '''
    weight_industry = 0.4
    weight_brand = 0.6

    industry_type_score = {
        'Meat': 5,
        'Dairy': 8,
        'Vegetables': 9,
        'Confectionary': 1
    }
    brand_score = {
        'Steggles': 7,
        'Magnum': 4,
        'Woolworths': 5,
        'Cooks Cuts': 4,
        'Cadbury': 6
    }
    unique_brand_score = brand_score.get(brand)
    unique_industry = industry_type_score.get(product_industry)
    return weight_brand * unique_brand_score + weight_industry * unique_industry
