from google.appengine.ext import ndb
# from model import Model
from stock import Stock
'''
    Creates the business
'''
class Business(ndb.Model):
    full_name = ndb.StringProperty()
    description = ndb.StringProperty()
    industry = ndb.StringProperty()
    address = ndb.StringProperty()
    suburb = ndb.StringProperty()
    post_code = ndb.IntegerProperty()

    @staticmethod
    def create_business(self, user_data):
        company = Business()
        company.full_name = user_data.get("full_name")
        company.description = user_data.get("description")
        company.industry = user_data.get("industry")
        company.address = user_data.get("address")
        company.suburb = user_data.get("suburb")
        company.post_code = user_data.get("post_code")
        company.put()

    @staticmethod
    def create_stock(self, stock_data):
        stock = Stock()
        stock.level = stock_data.get("stock_level")
        stock.business_key = self.key.urlsafe()
        stock.product_key = stock_data.get("product_key")
        stock.price = stock_data.get("price")
        stock.put()

    #
    # {
    #     "Naked Foods Organic & Health Foods Bulk": {
    #         "general": {
    #             "full_name": "",
    #             "description": "",
    #             "industry": "",
    #             "address": "195 King St",
    #             "suburb": "Newtown",
    #             "2042"
    #         },
    #         "stock": {
    #             "A2 milk": "",
    #         }
    #     },
    #     "Dr Earth Newtown": {
    #
    #     }
    # }