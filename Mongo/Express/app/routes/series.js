module.exports = function (app) {
    var controller = app.controllers.serie;

    //organnizacao das rotas
    app.route('/series')
        .get(controller.listaSeries);

    app.route('series/:id')
        .get(controller.listaSeriesId);

    app.route('/series/:')
        .get(controller.listaNomeSerie);
}