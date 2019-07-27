from google.appengine.ext import ndb
# from model import Model
'''
    Creates the user
'''
class User(ndb.Model):
    name = ndb.StringProperty()
    reward = ndb.IntegerProperty()
    # shoppingList =

    @staticmethod
    def create_user(self, user_data):
        person = User()
        person.name = user_data.get("name")
        person.reward = 0
        person.put()


