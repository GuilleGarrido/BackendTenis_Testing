const tenisServices = require('../services/tenisServices');

const getAllMatch = (req, res) => {
    const allMatch = tenisServices.getAllMatch();
    res.send({status: 'OK', data: allMatch});
}

const updateMatch = (req, res) => {
    const {
        body,
        params,
    } = req;

    const updatedMatch = tenisServices.updateMatch(body);
    res.send({status:'OK', data: updatedMatch});
}

const createMatch = (req, res) => {
    const {body} = req;
    if(
        !body.nombreJugador1 ||
        !body.nombreJugador2 ||
        !body.nombreTorneo ||
        !body.rondaPartido ||
        !body.urlJugador1 ||
        !body.urlJugador2
    ) {
        return;
    }

    const newMatch =  {
        nombreJugador1: body.nombreJugador1,
        nombreJugador2: body.nombreJugador2,
        nombreTorneo: body.nombreTorneo,
        rondaPartido: body.rondaPartido,
        urlJugador1: body.urlJugador1,
        urlJugador2: body.urlJugador2
    };

    const createdMatch = tenisServices.createNewMatch(newMatch);
    res.status(201).send({status:'OK', data: createdMatch});
}

module.exports = {getAllMatch, updateMatch, createMatch};