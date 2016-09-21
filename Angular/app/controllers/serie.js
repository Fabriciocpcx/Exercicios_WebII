module.exports = function (app) {
  var controller = {};
  var Series = app.models.serie;

  /**
   * fucao que listas todos os contato
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
   * funcao que lista o contato pelo id 
   */
  controller.listaSerieId = function (req, res) {
    var _id = req.params.id;
    Series.findById(_id).exec()
      .then(function (series) {
        if (!series) throw new Error('Serie não encontrado');
        res.json(series);
      },
        function (erro) {
          console.log(erro);
          res.status(404).json(erro);
        }
    );
  }

  controller.addSerie = function (req, res) {
    var series = req.body;
    Series.create(series,
      function (erro, series) {
        if (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
        res.status(201).json(series);
      });
  };

  controller.deleteSerie = function (req, res) {
    var query = {'_id': req.params.id};
    Series.remove(query, function (erro) {
      if (erro) {
        console.error(erro);
        res.status(500).json(erro);
      } else {
        res.status(204).end();

      }
    });
  };

  controller.updateSerie = function (req, res) {
    var id = req.params.id;
    Series.findByIdAndUpdate(id, req.body,
      function (erro, series) {
        if (erro) {console.error(erro);
          res.status(500).json(erro);} else {
          res.json(series);
        }
      });

  };

  return controller;
};

