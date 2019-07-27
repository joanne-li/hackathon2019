from google.appengine.ext import ndb
from model import Model
'''
    Creates the user
'''
class User(Model):
    name = ndb.StringProperty()
    reward = ndb.IntegerProperty()
    # shoppingList =

    @staticmethod
    def create_user(self, user_data):
        person = User()
        person.name = user_data.get("name")
        if user_data.get("reward"):
            person.reward = int(user_data.get("reward"))


