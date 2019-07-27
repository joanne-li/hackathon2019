from google.appengine.ext import ndb
from model import Model

class Product(ndb.Model):
    """ Class to store product information """
    productName = ndb.StringProperty();
    productType = ndb.StringProperty();
    productImg = ndb.StringProperty(); # Stores Image link as string
    brandKey = ndb.StringProperty();

    @staticmethod
    def init_product(self, product_data):
    """ Initialises Product Object """
        product = Product()
        product.productName = product_data.get("productName")
        product.productType = product_data.get("productType")
        product.productImg = product_data.get("productImg")
        product.brandKey = product_data.get("brandKey")
