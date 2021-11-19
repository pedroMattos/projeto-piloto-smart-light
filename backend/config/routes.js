const baseApi = '/api';

module.exports = app => {
    app.route(baseApi + '/power')
        .post(app.api.power.set)

    app.route(baseApi + '/dimmable')
        .post(app.api.dimmable.set)

    app.route(baseApi + '/device')
        .post(app.api.device.status)

    app.route(baseApi + '/color')
        .post(app.api.color.set)
}