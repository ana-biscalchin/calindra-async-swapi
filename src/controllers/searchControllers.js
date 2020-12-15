const FilmService = require("../services/FilmService")
const filmService = new FilmService()

//  recebe a requisicao, monta o objeto e manda para service resolver
// TODO - conectar com a requisiçao node 
searchControllers = (path, filmId, enrichFiels) => {
    return filmService.consultFilm(path, filmId, enrichFiels)
}

module.exports = searchControllers