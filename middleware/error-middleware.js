// /For errors returned from asynchronous functions invoked by route handlers
//  and middleware, you must pass them to the next() function, where
//   Express will catch and process them. 

module.exports = function (app) {
    //middleware do bledow, musi byc na k0ncu, pamietac o next w handlerze,
    //  chwyta TYLKO Z REQUEST PROCESIN PIPELINE wyjatki, ignoruje wszystko poza
    //   kontekstem expressa (pipeline chyba jest z ekspresa w takim razie ;p)
    app.use(function (err, req, res, next) {
        console.log(`Błąd serwera z ostatniego middleware - ${err.message}`);
        res.status(500).send(`Błąd serwera z ostatniego middleware - ${err.message}`);
    });
}