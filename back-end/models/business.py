from google.appengine.ext import ndb
from model import Model
'''
    Creates the business
'''
class Business(Model):
    full_name = ndb.StringProperty()
    description = ndb.StringProperty()
    industry = ndb.StringProperty()
    address = ndb.StringProperty()
    suburb = ndb.StringProperty()
    post_code = ndb.IntegerProperty()

    def add_photo(self, description, url):

        photo = PropertyPhoto()
        photo.description = description
        photo.url = url
        photo.property = self.key
        photo.put()
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