let router = require('express').Router();
var propiedadesController = require('./propiedadesApi');

router.route('/propiedades')
    .get(propiedadesController.list)
    .post(propiedadesController.add);


router.route('/propiedades/:id')
    .get(propiedadesController.listOne)
    .put(propiedadesController.update)
    .delete(propiedadesController.delete);

module.exports = router;
