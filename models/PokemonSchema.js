var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PokemonSchema = new Schema({
    "pokedex_Number": Number,
    "name": String,
    "hp": String,
    "attack": String,
    "defense": String,
    "speed": Number,
    "sp_atk": String,
    "sp_def": String,
    "main_type": String,

});

module.exports = mongoose.model('Pokemon', PokemonSchema);
