from google.appengine.ext import ndb
# from model import Model
from stock import Stock_Model
'''
    Creates the business
'''
class Business_Model(ndb.Model):
    fullname = ndb.StringProperty()
    description = ndb.StringProperty()
    industry = ndb.StringProperty()
    address = ndb.StringProperty()
    suburb = ndb.StringProperty()
    post_code = ndb.IntegerProperty()

    @staticmethod
    def create_business(user_data):
        company = Business_Model()
        company.full_name = user_data.get("full_name")
        company.description = user_data.get("description")
        company.industry = user_data.get("industry")
        company.address = user_data.get("address")
        company.suburb = user_data.get("suburb")
        company.post_code = user_data.get("post_code")

        company.put()
        return company



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
