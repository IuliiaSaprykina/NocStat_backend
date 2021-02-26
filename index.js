var Db  = require('./dbOperations');
var Patient = require('./models/patients');
const dboperations = require('./dbOperations');

dboperations.getAllPatients().then(result => {
    console.log(result)
})

// var express = require('express');
// var bodyParser = require('body-parser');
// var cors = require('cors');
// const { request, response } = require('express');
// var app = express();
// var router = express.Router();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());
// app.use('/index', router);

// router.use((request,response,next)=>{
//    console.log('middleware');
//    next();
// })

// app.get('/', function (request, response) {
//     console.log("Route is working")
// })

// app.get('/patients', (request,response) => {

//     dboperations.getAllPatients().then(result => {
//         console.log(response)
//         response.json({ patients: result });
//     })

// })

// router.route('/patients/:id').get((request,response)=>{

//     dboperations.getAllPatient(request.params.id).then(result => {
//        response.json(result[0]);
//     })

// })

// router.route('/patients').post((request,response)=>{

//     let patient = {...request.body}

//     dboperations.addOrder(patient).then(result => {
//        response.status(201).json(result);
//     })

// })




// var port = process.env.PORT || 3000;
// app.listen(port);
// console.log('The app is runnning at ' + port);

