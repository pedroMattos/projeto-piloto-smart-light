const baseApi = '/api';

module.exports = app => {
    app.route(baseApi + '/power/:id')
        .post(app.api.power.set)
        .get(app.api.power.get)

    app.route(baseApi + '/dimmable/:id')
        .post(app.api.dimmable.set)
        .get(app.api.dimmable.get)

    app.route(baseApi + '/color/:id')
        .post(app.api.color.set)
        .get(app.api.color.get)
}