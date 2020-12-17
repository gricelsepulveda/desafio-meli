const express = require('express')
const app = express();
const axios = require('axios');
const { response } = require('express');

const setSearchResults = () => {
    let results = ['0', '1']
    let formattedResults = []
    for (let i = 0; i < results.length; i++){
        formattedResults.push({
            author: {
                name: '',
                lastname: '',
            },
            categories: [], 
            items: [
                {
                    id: '',
                    title: '', 
                    price: {
                        currency: '', 
                        amount: 0, 
                        decimals: 0
                    },
                    picture: '', 
                    condition: '',
                    free_shipping: false
                }
            ]
        })
    }
    return formattedResults
}

async function fetch(query) {
    return await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then(function (response) {
            // handle success
            console.log(response.data.results);
            return response.data.results
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

//1st endpoint
app.get('/api/items/:query', async function(req, res) {
    const products = await fetch(req.params.query)
    res.send(products)
});


app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});