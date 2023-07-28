const axios = require('axios')

const urls = ['https://www.ejemplo1.com', 'https://www.ejemplo2.com', 'https://www.example.org']

urls.forEach(url => {

    axios.get(url)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error(`Unable to get content from ${url}:`, error)
        })
})
