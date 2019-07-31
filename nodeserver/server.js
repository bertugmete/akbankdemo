var express = require("express");
var uniqid = require('uniqid');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(3010, () => {
 console.log("Server running on port 3010");
 
});
const cors = require('cors');
app.use(cors());
const fs = require('fs');

app.get("/products", (req, res, next) => {
    fs.readFile('./api/db.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
   });

   app.post('/products', function(req, res) {
    const newProduct = {
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
      id: uniqid()
    };

    fs.readFile('./api/db.json', (err, json) => {
        let obj = JSON.parse(json);
        var newArray = [];
        newArray = obj.products;
        newArray.push(newProduct);
        var object = {products : newArray}
        fs.writeFileSync('./api/db.json', JSON.stringify(object));
    });
    res.setHeader('Content-Type', 'application/json');
    res.json(newProduct);
  });

   app.get('/products/:id', function(req, res) {
        fs.readFile('./api/db.json', (err, json) => {
            let obj = JSON.parse(json);
            const value = obj.products.filter(x=> x.id == req.params.id);
            res.setHeader('Content-Type', 'application/json');
            res.json(value[0]);
        });
    });