from google.appengine.ext import ndb
from model import Model

class Product_Model(ndb.Model):
    """ Class to store product information """
    productName = ndb.StringProperty();
    productType = ndb.StringProperty();
    productImg = ndb.StringProperty(); # Stores Image link as string
    brandKey = ndb.StringProperty();

    @staticmethod
    def create_product(self, product_data):
    """ Initialises Product Object """
        product = Product()
        print(product_date.get("productName"))
        product.productName = product_data.get("productName")
        product.productType = product_data.get("productType")
        product.productImg = product_data.get("productImg")
        product.brandKey = product_data.get("brandKey")
        product.put()
