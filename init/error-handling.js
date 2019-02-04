module.exports = function(){

process.on("uncaughtException", (ex) => {
    console.log("ex poza pipeline");
    console.log(ex);
//     // dobra praktyka zamknac apke, i proces manager powinien odpalic ja od nowa z czytym state. exit inne niz 0 to blad
    // process.exit(1);
});

process.on("unhandledRejection", (ex) => {
console.log("Promise ex");
console.log(ex);
// console.log("ex promise reject poza pipeline bez then catcha albo try catcha");
// winston.error(ex.message, ex)
// // dobra praktyka zamknac apke, i proces manager powinien odpalic ja od nowa z czytym state. exit inne niz 0 to blad
// process.exit(1);
//
// throw ex;
});

}
