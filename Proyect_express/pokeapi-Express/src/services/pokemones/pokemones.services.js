const axios = require('axios')

class pokemonesServices {
    constructor() {

    }

    async getAll() {
        const res = await  axios ('http://localhost:3000/pokemons')
        const data = res.data
        return data
    }
}

module.exports = pokemonesServices