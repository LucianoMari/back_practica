const e = require('express');
const express = require('express');
const router = express.Router();
const cursos = require('../services/cursos');

/*** GET CURSOS */
router.get('/', async function(req, res, next){
    try {
        res.json(await cursos.getAll());
    } catch (error) {
        console.error("Erros al traer los cursos");
        next(error);
    }
});
/*** DETAIL CURSOS */
router.get('/:id', async function(req, res, next){
    try {
        res.json(await cursos.get(req.params.id));
    } catch (error) {
        console.error("Erros al consultar un cursos", error.message);
        next(error);
    }
});

/*** POST CURSOS */
router.post('/', async function (req, res, next){
    try {
        res.json(await cursos.create(req, body));
    } catch (error) {
        console.error('Error al traer un curso', error.message)
    }
})

/*** PUT CURSOS */
router.put('/:id', async function (req, res, next){
    try {
        res.json(await cursos.update(req.params.id, req.body));
    } catch (error) {
        console.error('Error al actualizar un curso', error.message);
        next(error);
    }
})

/*** DELETE CURSOS */
router.delete('/:id', async function(req, res, next){
    try {
        res.json(await cursos.remove(req.params.id));
    } catch (error) {
        console.error('Error al eliminar un curso', error.message);
        next(error);
    } 
})

module.exports = router;