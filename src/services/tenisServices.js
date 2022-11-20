const { v4: uuid } = require('uuid');
const tenis = require('../database/tenis');

const getAllMatch = () => {
    const allMatch = tenis.getAllMatch();
    return allMatch;
}

const updateMatch = (changes) => {
    const updatedMatch = tenis.updateMatch(changes);
    return updatedMatch;
}

const createNewMatch = (newMatch) => {
    const matchToInsert = {
        ...newMatch,
        id: uuid()
    };
    const createdMatch = tenis.createMatch(matchToInsert);
    return createdMatch;
}

module.exports = {
    getAllMatch,
    updateMatch,
    createNewMatch
}