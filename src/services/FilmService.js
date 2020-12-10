const RequestService = require("./RequestService")
const requestService = new RequestService()

class FilmService {

    async consultFilm(param) {
        console.log('consultando um filme')

        try {
            let film = await requestService.webRequestSwapi('films', param)
            return film
        } catch (err) {
            console.log('Ocorreu um erro ao consultar o Swapi')
            return []
        }
    }

}

module.exports = FilmService