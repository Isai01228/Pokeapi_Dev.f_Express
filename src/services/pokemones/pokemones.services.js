const axios = require("axios");
class PokemonesService {
	constructor() {}

	async getAll() {
		const res = await axios("http://localhost:3000/pokemons");
		const data = res.data;
		return data;
	}

	async findOne(id) {
		const res = await axios.get(`http://localhost:3000/pokemons/${id}`);
		const data = res.data;
		return data;
	}

	async createPokemon(pokemon) {
		try {
			let newPokemon = await axios.post("http://localhost:3000/pokemons", pokemon);
			return newPokemon
		} catch (error) {
			return error.response
		}
	}

	async editPokemonPartial (id, body) {
		try {
			let updatePartialPokemon = await axios.patch(`http://localhost:3000/pokemons/${id}`, body)
			return updatePartialPokemon
		} catch (error) {
			console.log(error);
		}
	}

	async editCompletePokemon(id, body) {
		try {
			let updateCompletePokemon = await axios.post(`http://localhost:3000/pokemons/${id}`, body)
			return updateCompletePokemon
		} catch (error) {
			console.log(error);
		}
	}

}

module.exports = PokemonesService;
