from flask import Flask, render_template, request, jsonify
from flask_restplus import Resource, Api, fields, reqparse
from models.business import Business_Model
from models.stock import Stock_Model
from models.user import User_Model
from models.product import Product_Model
from models.brand import Brand_Model
from sustain_score import determine_score
import json
import random
import requests
import requests_toolbelt.adapters.appengine


requests_toolbelt.adapters.appengine.monkeypatch()

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
    'brand_name': fields.String,
    'stock_level': fields.Integer,
    'business_key': fields.String,
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
parser.add_argument('product_name', type=str, help='name', location='json')
parser.add_argument('product_industry', type=str, help='name', location='json')
parser.add_argument('product_img', type=str, help='name', location='json')
parser.add_argument('brand_name', type=str, help='name', location='json')
parser.add_argument('stock_level', type=int, help='name', location='json')
parser.add_argument('business_key', type=str, help='name', location='json')
parser.add_argument('price', type=int, help='name', location='json')





@api.route('/create/user')
class User(Resource):
    @api.doc(description="Creates the user") # Adds Documentation
    @api.expect(user_model) # Tells class to expect a "user_model"
    def post(self): # Function: Executes for Post Requests
        args = parser.parse_args() # Grabs POST request data and parses it to create dictionary.
        person = User_Model.create_user(args) # Instantiates User Class from Model
        response = jsonify({"message": 'User has been created', 'user_key': person.key.urlsafe()})
        response.headers.add('Access-Control-Allow-Origin', '*')
        # return {'message': 'User has been created', 'user_key': person.key.urlsage()}, 200
        return response

@api.route('/create/business')
class Business(Resource):
    @api.doc(description="Creates the business profile")
    @api.expect(business_model)
    def post(self):
        args = parser.parse_args()
        company = Business_Model.create_business(args)
        response = jsonify({'message': 'Business has been created', 'business_key': company.key.urlsafe()})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


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
        response = jsonify({'message':'Product has been created', 'name':args.get('product_name')})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

@api.route('/product/<product_name>')
class Each_Product(Resource):
    def get(self, product_name):
        product = Product_Model.query(Product_Model.product_name == product_name).get()
        if product:
            response = jsonify({'message': 'Successfully found', 'product': product.to_dict()})
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        else:
            response = jsonify({'message': 'failed'})
            response.headers.add('Access-Control-Allow-Origin', '*')
            response.status_code = 400
            return response

@api.route('/product')
class All_Product(Resource):
    def get(self):
        list_product = Product_Model.query().fetch()
        dict_format = list()
        for product in list_product:
            dict_format.append(product.to_dict())

        response = jsonify(dict_format)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


'''
Parses in the km radius
Filters all the business in the area and returns all products in the area
'''
@api.route('/filter/<float:km>')
class Filter_location(Resource):
    def get(self, km):
        #distance = km
        print(km)
        distance = km*1000 #distance in metres
        business_list = Business_Model.query().fetch()
        business_within = list()
        for businessObj in business_list:
            addr_key_words = businessObj.address + " " + businessObj.suburb
            api_key = "AIzaSyCaDAqjsE4idap5H2XNOcZu5BE-GXBGRnA"
            # UNSW Geo Coords
            lat = -33.917329664
            long = 151.225332432
            api_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"
            api_url += "location=" + str(lat) + "," + str(long)
            api_url += "&" + "radius=" + str(distance)
            api_url += "&keyword=" + addr_key_words
            api_url += "&key=" + api_key
            r = requests.get(api_url)
            myDict = json.loads(r.content)

            if myDict.get('status') == "OK":
                bus_key = businessObj.key.urlsafe()
                product_list =Product_Model.query(Product_Model.business_key == bus_key).fetch()
                if product_list:
                    for i in product_list:
                        business_within.append(i.to_dict())

        response = jsonify(business_within)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response





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

@api.route('/dummydata')
class DummyData(Resource):
    def get(self):
        Brand_Model.create_brand("Steggles",7)
        Brand_Model.create_brand("Magnum", 4)
        Brand_Model.create_brand("Woolworths", 5)
        Brand_Model.create_brand('Cooks Cuts', 4)
        Brand_Model.create_brand("Cadbury", 6)


        business_list = list()
        business_data1 = {
            'full_name': 'Vinnies',
            'description': 'Best place to buy clothes',
            'industry': 'Confectionary',
            'suburb': 'Kingsford',
            'address': '381 Anzac Pde.',
            'post_code': 2032
        }


        business_data2 = {
            'full_name': 'The Market',
            'description': 'Best place to buy fresh vegetables',
            'industry': 'Confectionary',
            'suburb': 'Kingsford',
            'address': '125A Houston Rd',
            'post_code': 2032
        }
        business_data3 = {
            'full_name': "Amber's Meat",
            'description': 'Best place to buy Meat',
            'industry': 'Meat',
            'suburb': 'Kingsford',
            'address': '12 Rainbow St',
            'post_code': 2032
        }
        business_data4 = {
            'full_name': 'Somedays Milk',
            'description': 'Best place to buy yummy milk',
            'industry': 'Dairy',
            'suburb': 'Barangaroo',
            'address': 'Shop 14/200 Barangaroo Avenue',
            'post_code': 2000
        }

        business_list.append(Business_Model.create_business(business_data1))
        business_list.append(Business_Model.create_business(business_data2))
        business_list.append(Business_Model.create_business(business_data3))
        business_list.append(Business_Model.create_business(business_data4))

        brand_list = Brand_Model.query().fetch()
        product_name_list = ["Chocolate", "Beef", "Snickers",  "Chicken","Celery","Carrot"]
        product_image_list = ["https://www.britishcornershop.co.uk/img/large/BRK024.jpg",
                            "http://www.cargillgroundbeef.com/images/img-learn-packaging-overwrap.jpg",
                              "https://www.packworld.com/sites/default/files/field/image/snickers001.jpg",
                              "https://www.addmaster.co.uk/file/2tdlbcn8-xnyxhavo-chickenpackaging.jpg?width=679&height=496&fill=true",
                              "https://cdn2.hubspot.net/hubfs/240798/p-main-2.3oz%20Snack%20Pack%20main%20photo.jpg",
                              "https://www.nnz.com/upload/cache/4C71948FBDE65F5DDF44308CDCA559BB.jpg"
                              ]
        length_product = len(product_name_list) - 1

        for i in range(20):
            brand = random.choice(brand_list)
            business = random.choice(business_list)
            score = determine_score(brand.score, business.industry)
            product_index = random.randint(0,length_product)
            product_data = {
                "product_name": product_name_list[product_index],
                "product_industry": business.industry,
                "product_img": product_image_list[product_index],
                "stock_level": random.randint(1,50),
                "business_key": business.key.urlsafe(),
                "price": random.randint(1,20)
            }
            Product_Model.create_product(product_data, score, brand)
        response = jsonify({'message': 'Completed'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response