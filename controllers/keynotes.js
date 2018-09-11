const dao = require('../dao/keynote.dao');

module.exports = app => {
    app.get('/api/keynote', dao.listKeynotes );
    app.put('/api/keynote', dao.addKeynote);
    app.delete('/api/keynote/:id', dao.removeKeynote);
}