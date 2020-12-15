const RequestService = require('./RequestService')
const requestService = new RequestService()
const axios = require('axios')

class FilmService {
    /**
     * @param {*} path (string)
     * @param {*} param (number)
     * @param {*} enrichFields (array <string>)
     */
    async consultFilm(path, param, enrichFields) {
        console.log('consultando um filme')

        try {
            let film = await requestService.webRequestSwapi(path, param)
            return this.enriquecaOsCampos(film, enrichFields)
        } catch (err) {
            console.log('Ocorreu um erro ao consultar o Swapi', err)
            return null
        }
    }

    async enriquecaOsCampos(film, enrichFields) {
        try {
            // map pra pesquisar no promise
            let listEnrichFields = film[enrichFields]
            let res = await Promise.all(
                listEnrichFields.map(async (element) => {
                    return (await axios.get(element)).data
                })
            )
            // console.log('result de promise', res)
            film[enrichFields] = res
        } catch (err) {
            console.log('Erro ao enriquecer campos', err)
        }
        return film
    }
}

module.exports = FilmService
