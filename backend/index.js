const app = require('express')();
const consign = require('consign');
const jsonParser = require('body-parser').json();

app.use(jsonParser);

consign()
    .include('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(7070, () => {
    console.log("Backend executando...")
})