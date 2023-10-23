let express = require('express');

let app = express();
    app.use(express.urlencoded({extended: false}));
    app.use(express.static('public'))
    app.get("/", function(req, res) {
    res.send("Kaixo mundua!");
    });

app.listen( 3000, function() {
console.log("Zerbitzaria 3000 portuan entzuten");
})

app.post("/bezeroa",function(req,res){

    res.send("Bezero izena:"+ $(req.body.izena) + " " + $(req.body.abizena));
});


app.get('/bezero',function(req, res){
    res.send(`Kaixo ${req.body.izena} ${req.query.abizena}`);
});
//app.post("/bezeroa",function(req,res){

   // res.send("POST eskaera jasu dut");
//});