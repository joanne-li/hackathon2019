from flask import Flask, render_template, request
from flask_restplus import Resource, Api, fields, reqparse
from models.business import Business_Model
from models.stock import Stock_Model
from models.user import User_Model
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

parser = reqparse.RequestParser()
parser.add_argument('name', type=str, help='name', location='json')
parser.add_argument('full_name', type=str, help='name', location='json')
parser.add_argument('description', type=str, help='name', location='json')
parser.add_argument('industry', type=str, help='name', location='json')
parser.add_argument('address', type=str, help='name', location='json')
parser.add_argument('suburb', type=str, help='name', location='json')
parser.add_argument('post_code', type=int, help='name', location='json')




@api.route('/create/user')
class User(Resource):
    @api.doc(description="Creates the user profule")
    @api.expect(user_model)
    def post(self):
        args = parser.parse_args()
        person = User_Model.create_user(args)
        return {'message':'User has been created', 'user_key': person.key.urlsage()}, 200

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

