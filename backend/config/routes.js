const baseApi = '/api';

module.exports = app => {
    app.route(baseApi + '/power')
        .post(app.api.power.switch)
        .get(app.api.power.get)

    app.route(baseApi + '/dimmable')
        .post(app.api.dimmable.dimerize)
        .get(app.api.dimmable.get)

    app.route(baseApi + '/color')
        .post(app.api.color.set)
        .get(app.api.color.get)
}