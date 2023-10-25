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