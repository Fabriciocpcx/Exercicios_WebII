module.exports = function (app) {
    var controller = app.controllers.serie;

    //organizacao das rotas
    app.route('/api/series')
        .get(controller.listaSeries)
        .post(controller.addSerie);

      app.route('/api/series/:id')
        .get(controller.listaSerieId)
        .delete(controller.deleteSerie)
        .put(controller.updateSerie);

}
