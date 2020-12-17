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
    return axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=:${query}`)
        .then(function (response) {
            // handle success
            console.log(query)
            console.log(response.data.results);
            return 'hola'
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

//1st endpoint
app.get('/api/items/:query', function(req, res) {
});


app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});