from flask import Flask, render_template, request
from flask_restplus import Resource, Api, fields, reqparse
from models.business import Business
from models.stock import Stock
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


parser = reqparse.RequestParser()
parser.add_argument('name', type=str, help='name', location='json')

@api.route('/user')
class User(Resource):
    @api.doc(description="Creates the user")
    @api.expect(user_model)
    def post(self):
        args = parser.parse_args()
        User_Model.create_user(args)
        return {'message':'User has been created', 'name':args.get('name')}, 200
    def get(self):
        return {'message': 'This works'},200



