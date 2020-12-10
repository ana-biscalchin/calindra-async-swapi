const FilmService = require("../services/FilmService")
const filmService = new FilmService()

//  recebe a requisicao, monta o objeto e manda para service resolver
searchControllers = (id) => {
    return filmService.consultFilm(id)
}

module.exports = searchControllers