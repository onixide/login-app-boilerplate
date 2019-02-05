const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res, next) => {
    // const allUsers = await User.getAllUsers();
//   res.status(200).send(allUsers);

  // User.getAllUsers((err, users) => {
  //   if(err){
  //     res.json({success: false, msg:'Something failed'});
  //   } else {
  //     res.json({success: true, msg:`All users : ${users}`});
  //   }
  // });
  let xxx = await User.getAllUsers();
  console.log(xxx);
    res.json(xxx);

});

router.post("/", async (req, res, next) => {

    try {

//         // let user = await Users.findOne({email: req.body.email}) || await Users.findOne({login: req.body.login});
        
//         // if(user) return res.status(400).send("Login lub email istnieje już w bazie");
//         //tworzenie nowego dokumentu

       user = new User ( {login, email, password} = req.body );

//         //bez lodasha
        // user = new Users({
        //     login: req.body.login,
        //     email: req.body.email,
        //     password: req.body.password
        // });

//         // z lodashem
//         // user = new Users(_.pick(req.body, ["login", "password", "email", "scope"]));

//         // let salt = await bcrypt.genSalt(10);
//         // user.password = await bcrypt.hash(user.password, salt);


//         //zapis i nadpisanie zmienna zapisanymi danymi asynchronicznie
        user = await user.save();
//         //zwrotka do klienta zapisanymi danymi z bazy ( z key itd)
        
//         //bez lodasha
//         // res.send({
//         //     login: user.login,
//         //     email: user.email
//         // });


//         //takie jakby logowanie odrazu po rejestracji
//         // const token = user.generateJWTToken();

//         // res.header('x-auth-token', token).send(_.pick(user, ['login', 'email']));
        res.send(JSON.stringify(user));
    }
    catch (ex) { 
        next(ex);
     }

  });

module.exports = router;
