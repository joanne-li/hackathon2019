from google.appengine.ext import ndb
# from model import Model
'''
    Creates the business
'''
class Stock_Model(ndb.Model):
    level = ndb.IntegerProperty()
    price = ndb.IntegerProperty()
    product_key = ndb.StringProperty()
    business_key = ndb.StringProperty()


    @staticmethod
    def create_stock(stock_data):
        stock = Stock_Model()
        stock.level = stock_data.get("stock_level")
        stock.business_key = stock_data.get("business_key")
        stock.product_key = stock_data.get("product_key")
        stock.price = stock_data.get("price")
        stock.put()
        return stock