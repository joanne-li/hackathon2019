from flask import Flask, render_template, request
from flask_restplus import Resource, Api, fields, reqparse

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


@api.route('/user')
class User(Resource):
    @api.doc(description="Creates the user")
    # @api.response(200, 'Successful determined the revenue')
    # @api.response(400, 'One or more of the input parameters is invalid')
    # @login_required
    # @api.doc(security='apikey')
    # @api.expect(features_model)
    # def post(self):
    #     args = predict_parser.parse_args()
    #     args['english'] = True if args['english'] == 'True' else False
    #     cast = []
    #     if args.get('budget') < 0:
    #         api.abort(400,'Budget has to be greater or equal to 0')
    #     elif args.get('release_month') < 1 or args.get('release_month') > 12:
    #         api.abort(400,"Month is not valid, it has to be between 1 - 12")
    #     elif args.get('runtime') <= 0:
    #         api.abort(400,"Runtime has to be larger than 0")
    #     for i in range(1,6):
    #         key = 'cast' + str(i)
    #         if args.get(key) is not None and args[key] != 'Option' and args[key] != '':
    #             cast.append(args[key])
    #         args.pop(key, None)
    #     args['actors'] = cast
    #     revenue = int(predict_revenue(args))
    #     return {'message':'Successfully determined the revenue based on features', 'revenue':revenue}, 200
    def get(self):
        return {'message': 'This works'},200



