module.exports = function (app) {

    app.get('/', (req, res, next) => {
        res.status(200).send("GET DZIAŁA");
    })


  //middleware do bledow, musi byc na k0ncu, pamietac o next w handlerze,
//    chwyta TYLKO Z REQUEST PROCESIN PIPELINE wyjatki, ignoruje wszystko
//  poza kontekstem expressa 
    app.use(function (error, req, res, next) {
        console.log("Błąd serwera. Z ostatniego middleware. ");
        res.status(500).send("Błąd serwera. Z ostatniego middleware. ");
    })
}
