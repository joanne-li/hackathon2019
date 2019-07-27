from google.appengine.ext import ndb
# from model import Model
'''
    Creates the business
'''
class Stock(ndb.Model):
    level = ndb.IntegerProperty()
    price = ndb.IntegerProperty()
    product_key = ndb.StringProperty()
    business_key = ndb.StringProperty()