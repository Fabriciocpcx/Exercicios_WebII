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

    /**
     * funcao que lista a Serie pelo id 
     */
    controller.listaSeriesId = function (req, res) {
        return controller;
    }

    controller.listaNomeSerie = function (req, res) {

    }

    app.get('/series/:id', controller.obtemSerie);
    controller.obtemSerie = function (req, res) { 
        var idSerie = req.params.id; 
        var serie = series.filter(function (serie) { 
            return serie._id == idSerie; 
        })[0]; 
        serie ? 
        res.json(serie) : 
        res.status(404).send('Serie não encontrada'); 
    };
};
