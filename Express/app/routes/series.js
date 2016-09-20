module.exports = function (app) {
    var controller = app.controllers.serie;
    

    //organizacao das rotas
    app.route('/api/series')
        .get(controller.listaSeries);

    app.route('/api/series/:id')
        .get(controller.listaSeriesId);

    app.route('/api/series/:')
        .get(controller.listaNomeSerie);

        
}