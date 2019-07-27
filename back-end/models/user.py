from google.appengine.ext import ndb
# from model import Model
'''
    Creates the user
'''
class User_Model(ndb.Model):
    name = ndb.StringProperty()
    reward = ndb.IntegerProperty()
    # shoppingList =

    @staticmethod
    def create_user(user_data):
        print(user_data.get('name'))
        person = User_Model()
        person.name = user_data.get("name")
        person.reward = 0
        person.put()


