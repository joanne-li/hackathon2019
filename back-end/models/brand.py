from google.appengine.ext import ndb
'''Class to store product information '''

class Brand_Model(ndb.Model):
    name = ndb.StringProperty()
    score = ndb.IntegerProperty()

    """ Initialises Product Object """
    @staticmethod
    def create_brand(name, score):
        new_brand = Brand_Model()
        new_brand.name = name
        new_brand.score = score
        new_brand.put()
        return new_brand
