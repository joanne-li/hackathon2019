from flask import Flask, render_template, request
from flask_restplus import Resource, Api, fields, reqparse
from models.business import Business
from models.stock import Stock
from models.user import User_Model
from models.product import Product_Model
#Sets up api token and where it should be
authorizations = {
    'apikey': {
        'type': 'apiKey',
        'in': 'header',
        'name': 'API-KEY'
    }
}

app = Flask(__name__)
api = Api(app,authorizations=authorizations)


user_model = api.model('user',{
    'name': fields.String,
})


parser = reqparse.RequestParser()
parser.add_argument('name', type=str, help='name', location='json')

@api.route('/user')
class User(Resource):
    @api.doc(description="Creates the user") # Adds Documentation
    @api.expect(user_model) # Tells class to expect a "user_model"
    def post(self): # Function: Executes for Post Requests
        args = parser.parse_args() # Grabs POST request data and parses it to create dictionary.
        User_Model.create_user(args) # Instantiates User Class from Model
        return {'message':'User has been created', 'name':args.get('name')}, 200
    def get(self): # Function: Executes for Get requests
        return {'message': 'This works'},200


@api.route('/product')
# "Resource" parameter is required simply due to implementation of Flask-Api (e.g. 'Must Have Just Cos')
class Product(Resource):
    @api.doc(description="Creates Product") # Adds documentation
    # Function: Handles POST requests
    def post(self):
        args = parser.parse_args() # Grabs POST request data and parses it to create dictionary
        Product_Model.create_product(args)
        return {'message':'Product has been created', 'name':args.get('productName')}, 200
    # Function: Handles GET requests
    def get(self):
        return {'message':'This works'}, 200
