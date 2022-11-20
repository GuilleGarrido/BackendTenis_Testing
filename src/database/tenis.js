const DB = require('./db.json');
const {saveToDatabase} = require('./utils');

const getAllMatch = () => {
    return DB.partidoActual;
};

const getAllMatchResueltos = () => {
    return DB.historialPartido;
}

const createMatch = (newMatch) => {
    DB.partidoActual.push(newMatch);
    saveToDatabase(DB);
}

const updateMatch = (changes) => {
    const updatedMatch = {
        ...DB.partidoActual,
        ...changes
    };

    DB.partidoActual = updatedMatch;
    saveToDatabase(DB);
    return updatedMatch;
}


module.exports = {getAllMatch, updateMatch, createMatch};