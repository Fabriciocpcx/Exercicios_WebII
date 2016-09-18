module.exports = function (app) {
    var controller = {};
    var Series = app.models.serie;

    /**
     * fucao que listas todas as Series
     */
    controller.listaSeries = function (req, res) {
        Series.find().exec()
            .then(
            function (series) {
                res.json(series);
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
            );

    };

    /**
     * funcao que lista a Serie pelo id 
     */
    controller.listaSeriesId = function (req, res) {
        var _id = req.params.id;
        Series.findById(_id).exec()
            .then(function (serie) {
                if (!serie) throw new Error('Serie não encontrada');
                res.json(serie);
            },
            function (erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
            );
    }


    controller.listaNomeSerie = function (req, res) {


    }

    return controller;
};
