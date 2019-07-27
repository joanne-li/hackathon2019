from flask import Flask, render_template, request
from flask_restplus import Resource, Api, fields, reqparse
from models.business import Business_Model
from models.stock import Stock_Model
from models.user import User_Model
from models.product import Product_Model
from models.brand import Brand_Model
from sustain_score import determine_score
import json
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

business_model = api.model('business',{
    'full_name': fields.String,
    'description': fields.String,
    'industry': fields.String,
    'address': fields.String,
    'suburb': fields.String,
    'post_code': fields.Integer,
    })


stock_model = api.model('stock',{
    'stock_level': fields.Integer,
    'business_key': fields.String,
    'product_key': fields.String,
    'price': fields.Integer,
})

product_model = api.model('product',{
    'product_name': fields.String,
    'product_industry': fields.String,
    'product_img': fields.String,
    'brand_name': fields.String
})



parser = reqparse.RequestParser()
parser.add_argument('name', type=str, help='name', location='json')
parser.add_argument('full_name', type=str, help='name', location='json')
parser.add_argument('description', type=str, help='name', location='json')
parser.add_argument('industry', type=str, help='name', location='json')
parser.add_argument('address', type=str, help='name', location='json')
parser.add_argument('suburb', type=str, help='name', location='json')
parser.add_argument('post_code', type=int, help='name', location='json')
parser.add_argument('product_name', type=str, help='name', location='json')
parser.add_argument('product_industry', type=str, help='name', location='json')
parser.add_argument('product_img', type=str, help='name', location='json')
parser.add_argument('brand_name', type=str, help='name', location='json')






@api.route('/create/user')
class User(Resource):
    @api.doc(description="Creates the user") # Adds Documentation
    @api.expect(user_model) # Tells class to expect a "user_model"
    def post(self): # Function: Executes for Post Requests
        args = parser.parse_args() # Grabs POST request data and parses it to create dictionary.
        User_Model.create_user(args) # Instantiates User Class from Model
        return {'message': 'User has been created', 'user_key': person.key.urlsage()}, 200


@api.route('/create/business')
class Business(Resource):
    @api.doc(description="Creates the business profile")
    @api.expect(business_model)
    def post(self):
        args = parser.parse_args()
        company = Business_Model.create_business(args)
        return {'message': 'Business has been created', 'business_key': company.key.urlsafe()}, 200


@api.route('/create/stock')
class Stock(Resource):
    @api.doc(description="Creates the Stock profile")
    @api.expect(stock_model)
    def post(self):
        args = parser.parse_args()
        new_stock = Stock_Model.create_stock(args)
        return {'message': 'Stock has been created','stock_key':new_stock.key.urlsafe() }, 200

@api.route('/create/product')
# "Resource" parameter is required simply due to implementation of Flask-Api (e.g. 'Must Have Just Cos')
class Create_Product(Resource):
    @api.doc(description="Creates Product, Currently for industry only works for: Meat, Dairy, Confectionary, Vegetables") # Adds documentation
    @api.expect(product_model)
    def post(self):
        args = parser.parse_args() # Grabs POST request data and parses it to create dictionary
        industry = args.get('product_industry')
        brand_name = args.get('brand_name')
        brand = Brand_Model.query(Brand_Model.name == brand_name).get()
        score = determine_score(brand.score,industry)
        Product_Model.create_product(args,score,brand)
        return {'message':'Product has been created', 'name':args.get('product_name')}, 200

@api.route('/product/<product_name>')
class Each_Product(Resource):
    def get(self, product_name):
        product = Product_Model.query(Product_Model.product_name == product_name).get()
        if product:
            return {'message': 'Successfully found', 'product': json.dumps(product.to_dict())},200
        else:
            return {'message': 'failed'},400

@api.route('/product')
class All_Product(Resource):
    def get(self):
        list_product = Product_Model.query().fetch()
        dict_format = list()
        for product in list_product:
            dict_format.append(product.to_dict())
        return json.dumps(dict_format), 200

@api.route('/create/brand')
class Brand(Resource):
    @api.doc(description="Creates Brand") # Adds documentation
    def get(self):
        Brand_Model.create_brand("Steggles",7)
        Brand_Model.create_brand("Magnum", 4)
        Brand_Model.create_brand("Woolworths", 5)
        Brand_Model.create_brand('Cooks Cuts', 4)
        Brand_Model.create_brand("Cadbury", 6)
        return {'message': 'Brand has been created'}, 200
