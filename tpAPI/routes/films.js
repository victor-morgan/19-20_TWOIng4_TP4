// ./routes/users.js
var express = require('express');
var router = express.Router();
const API_URL = "http://www.omdbapi.com/";

var _ = require('lodash');

const API_KEY = "c28f877a";

const axios = require("axios"); //pour utiliser axios

// /* GET users listing. */
// router.get('/', function(req,res,next) {
//     res.send('respond with a ressource');
// });

// module.exports = router;



var films = [{

    id: "jkbefkfb",
    movie: "dzefe",
    yearOfRelease: "45",
    duration: "444" ,
    actors: ["bczefj", "fdczhbdjh"],
    poster: "bjbjbj",
    boxOffice: "45",
    rottenTomatoesScore: "VHVG",
}]

/* GET one user. */
router.get('/', (req, res) => {
  res.status(200).json({ films }) ;
  });
  
  router.get('/:id', (req, res) => {
    
    const{id} = req.params;
    const film = _.find(films, ["id", id]);
    console.log(film);
    res.status(200).json({
      message: 'Film found!',
      film: film
    })
    
    });
  
  /* PUT new user. */
  router.put('/:film', (req, res) => {
  
    const id = _.uniqueId();
    const {film} = req.params;
    films.push({id,film});
    res.json({
      message: `Just added ${id}`,
      film: film
    });
  
  });
  
  /* DELETE user. */
  router.delete ('/:id', (req, res) => {
    const { id } = req.params;
    _.remove(films, ["id",id]);
    res.json({
      message : `Just removed ${id}`
    });
  });

  /* UPDATE user. */
  router.post('/:id', (req, res) => {
    const { id } = req.params;
    const { film } = req.body;
    const userToUpdate = _.find(films, ["id", id]);
    console.log(userToUpdate);
    userToUpdate.film = film;
  
    res.json({
      message: `Just updated ${id} with ${film}`,
      film: id, film
    });
  
  });
    


module.exports = router;
