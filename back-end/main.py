from flask import Flask, render_template, request
from flask_restplus import Resource, Api, fields, reqparse
from models.business import Business
# from models.stock import Stock
# from models.user import User
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
parser = reqparse.RequestParser()


@api.route('/user')
class User(Resource):
    @api.doc(description="Creates the user")
    def post(self):
        args = parser.parse_args()
        User.create_user(args)
        return {'message':'User has been created', 'name':args.get('name')}, 200
    def get(self):
        return {'message': 'This works'},200



