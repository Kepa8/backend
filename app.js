
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.get("/", function(req, res) {
    res.send("Kaixo mundua!");
});

app.post("/bezeroa", function (req, res) {
    // datuak eskuratu req.body-tik
    let izena = req.body.izena;
    let email = req.body.email;
    let password = req.body.password;
    let confpassword = req.body.confpassword;
    let gender = req.body.gender;
    let data = req.body.date
    let address = req.body.address;
    let city = req.body.city;
    let zip = req.body.zip;
    let agree = req.body.agree;
    let newsletter = req.body.newsletter;


    // Datuekin JSON bat sortu
    let datuakJSON = {
        "izena": izena,
        "email": email,
        "password" : password,
        "confirm-password": confpassword,
        "gender": gender,
        "dob" : data,
        "address": address,
        "city": city,
        "zip": zip,
        "agree": agree,
        "newsletter": newsletter

    };

    // Bidali erantzun bat bezeroari datuekin
    res.json(datuakJSON);
});

app.listen(3000, function() {
    console.log("Zerbitzaria 3000 portuan entzuten");
});