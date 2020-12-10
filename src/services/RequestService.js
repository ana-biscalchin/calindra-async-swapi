const axios = require('axios')


class RequestService {

    async webRequestSwapi(path, param) {
        let res = await axios.get(`https://swapi.dev/api/${path}/${param}`)
        console.log(res.data)
        return res.data
    }
}

module.exports = RequestService