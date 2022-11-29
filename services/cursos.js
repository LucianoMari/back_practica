const db = require('./db');
const config = require('../config');

async function getAll(){
    const rows = await db.query(
        `SELECT id, name FROM curso`
    );
    const data = rows;
        
    return {
        data
    }
}

async function create(curso){
    const result = await db.query(
        `INSERT INTO curso (name) FROM VALUES ("${curso.name}")`
    );
    let message = 'Error al crear el curso';
    if(result.affectedRows){
        message = 'Curso creado con exito';
    }
    return { message };
}

async function update(id, curso){
    const result = await db.query(
        `UPDATE curso SET name="${curso.name}"
        WHERE id=${id}`
    );
    let message = 'Error al actualizar un curso';
    
    if(result.affectedRows){
        message = 'Curso actualizado con exito';
    }
    
    return { message };
}

async function remove(id){
    const result = await db.query(
        `DELETE FROM curso WHERE id=${id}`
    );
    let message = 'Error al eliminar un curso';
    
    if(result.affectedRows){
        message = 'Curso eliminado con exito';
    }
    
    return { message };
}

async function get(id){
    const rows = await db.query(
        `SELECT * FROM curso WHERE id=${id}`
    );
    const data = rows;    
    return { 
        data };
}

module.exports = {
    getAll,
    get, 
    create,
    update,
    remove
}
