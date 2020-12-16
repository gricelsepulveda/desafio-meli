const express = require('express')
// const router = express.Router()

const app = express();
const axios = require('axios');

// a middleware function with no mount path. This code is executed for every request to the router
// router.use('/a', myMiddleware, function (req, res, next) {
//     res.send('hello world')
// });
const myFuncion = async (req, res) => {
    req.params.keyword
    req.body
    const x = await myFetch(req.params.keyword)
    res.send(x);
}

app.get('/:keyword', myMiddleware, myFuncion);

app.post('/:ajhdka/:sdkajh', function(req, res) {
    const requestBody = req.body
});

async function  myFetch(keyword){
    return await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=:${keyword}`)
        .then(function (response) {
            // handle success
            console.log(response.data);
            return response.data
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return response
    });
    return results
}


//myMiddleware es el middleware que me permite hacer cosas en la data antes que llegue




function myMiddleware(req, res, next){


    //const req.body = ...body, 

    //aqui todo lo que voy a hacer
    next()
}




app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});