from google.appengine.ext import ndb
'''Class to store product information '''

class Product_Model(ndb.Model):
    product_name = ndb.StringProperty()
    product_industry = ndb.StringProperty()
    product_img = ndb.StringProperty() # Stores Image link as string
    brand_key= ndb.StringProperty()
    score = ndb.FloatProperty()
    level = ndb.IntegerProperty()
    price = ndb.IntegerProperty()
    business_key = ndb.StringProperty()


    """ Initialises Product Object """
    @staticmethod
    def create_product(product_data, score,brand):
        product = Product_Model()
        product.product_name = product_data.get("product_name")
        product.product_industry = product_data.get("product_industry")
        product.product_img = product_data.get("product_img")
        product.brand_key = brand.key.urlsafe()
        product.score = score
        product.level = product_data.get("stock_level")
        product.business_key = product_data.get("business_key")
        product.price = product_data.get("price")
        product.put()
        return product


