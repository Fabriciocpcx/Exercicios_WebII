var series = [

    { _id: 1, nome: 'Tagima' },
    { _id: 2, nome: 'Ibanez' },
    { _id: 3, nome: 'Takamine' },
    { _id: 4, nome: 'Fender' },
    { _id: 5, nome: 'Taylor' },
]

module.exports = function () {

    var controller = {};
    /**
     * fucao que listas todas as Series
     */
    controller.listaSeries = function (req, res) {
        res.json(series);
    }

    controller.listaSeriesId = function (req, res) {
        return controller;
    }

    controller.buscaPorNome = function (req, res) {
        var nomeSerie = req.params.nome;
        var serie = series.filter(function (serie) {
            return serie.nome == nomeSerie;
        })[0];
        serie ?
            res.json(serie) :
            res.status(404).send('Serie não encontrada');
    }

    controller.buscaPorId = function (req, res) {
        var idSerie = req.params.id;
        var serie = series.filter(function (serie) {
            return serie._id == idSerie;
        })[0];
        serie ?
            res.json(serie) :
            res.status(404).send('Serie não encontrada');
    };

    return controller;
};
