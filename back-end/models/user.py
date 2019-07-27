from google.appengine.ext import ndb
from model import Model
'''
    Creates the user
'''
class User(Model):
    name = ndb.StringProperty()
    reward = ndb.IntegerProperty()
    # shoppingList =

    def add_photo(self, description, url):

        photo = PropertyPhoto()
        photo.description = description
        photo.url = url
        photo.property = self.key
        photo.put()