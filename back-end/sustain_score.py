def determine_score(brand_score=5, product_industry=5):
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

    unique_industry = industry_type_score.get(product_industry)
    return round(weight_brand * brand_score + weight_industry * unique_industry,2)
