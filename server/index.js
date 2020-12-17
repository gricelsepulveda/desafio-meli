const express = require('express')
const app = express();
const axios = require('axios');

const formatSearchProductsResults = (data) => {
    function getCategories(){
        let categories = []
        let catParent = data.filters.filter(x => x.id == 'category')
        for (let n = 0; n < catParent[0].values[0].path_from_root.length; n++){
            categories.push(catParent[0].values[0].path_from_root[n].name)
        }
        return categories
    }

    function getCondition(__data){
        let condition = __data.filter(x => x.id == 'ITEM_CONDITION')[0].values[0].name
        return condition
    }
    function getItems(){
        let formattedItems = []
        for (let i = 0; i < data.results.length; i++){ 
            let result = data.results[i]
            formattedItems.push({
                id: result.id,
                title: result.title, 
                price: {
                    currency: result.currency_id, 
                    amount: result.price, 
                    decimals: 0
                },
                picture: result.thumbnail, 
                condition: getCondition(result.attributes),
                free_shipping: result.shipping.free_shipping
            })
        }
        return formattedItems
    }

    const dataFormated = {
        author: {
            name: 'Gricel',
            lastname: 'Sepulveda',
        },
        categories: getCategories(), 
        items: getItems()
    }

    return dataFormated
}

const formatProduct = (dataId, dataDescription) => {
    const translateCondition = (cond) => {
        let condition = cond
        switch (condition) {
            case 'new':
                condition = 'nuevo'
                break
            case 'used':
                condition = 'usado'
                break
            default:
                condition = ''
                break
        }
        return condition
    }

    const getMainPicture = (pictureArr) => {
        let pictureUrl = ''
        if (pictureArr[0] != undefined){
            pictureUrl = pictureArr[0].url
        }
        return pictureUrl
    }

    const dataFormated = {
        author: {
            name: 'Gricel',
            lastname: 'Sepulveda',
        },
        item: {
            id: dataId.id,
            title: dataId.title, 
            price: {
                currency: dataId.currency_id, 
                amount: dataId.price,
                decimals: 0
            },
            picture: getMainPicture(dataId.pictures), 
            condition: translateCondition(dataId.condition),
            free_shipping: dataId.shipping.free_shipping,
            sold_quantity: dataId.sold_quantity,
            description: dataDescription.plain_text
        }
    }
    return dataFormated
}

async function fetchSearch(query) {
    return await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then(function (response) {
            // handle success
            return response.data
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

async function fetchProductId(id){
    return await axios.get(`https://api.mercadolibre.com/items/${id}`)
        .then(function (response) {
        // handle success
        return response.data
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }
    
async function fetchProductDescription(id) {
    return await axios.get(`https://api.mercadolibre.com/items/${id}/description`)
    .then(function (response) {
        // handle success
        return response.data
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}

//1st endpoint
app.get('/api/items/search/:query', async function(req, res) {
    const _data = await fetchSearch(req.params.query)
    res.send(formatSearchProductsResults(_data))
})

//2st endpoint
app.get('/api/items/:id', async function(req, res) {
    const data_id = await fetchProductId(req.params.id)
    const data_description = await fetchProductDescription(req.params.id)
    res.send(formatProduct(data_id, data_description))
})

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
})