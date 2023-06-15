const Tickets = require('./controller/tickets.js')

const routes = (app) => {
    app.get('/', Tickets.getTickets)
}

module.exports = routes;
