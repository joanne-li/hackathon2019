from google.appengine.ext import ndb
'''Class to store product information '''

class Product_Model(ndb.Model):
    product_name = ndb.StringProperty()
    product_industry = ndb.StringProperty()
    product_img = ndb.StringProperty() # Stores Image link as string
    brand_key= ndb.StringProperty()
    score = ndb.FloatProperty()

    """ Initialises Product Object """
    @staticmethod
    def create_product(product_data, score,brand):
        product = Product_Model()
        print(product_data.get("product_name"))
        product.product_name = product_data.get("product_name")
        product.product_industry = product_data.get("product_industry")
        product.product_img = product_data.get("product_img")
        product.brand_key = brand.key.urlsafe()
        product.score = score
        product.put()
        return product


