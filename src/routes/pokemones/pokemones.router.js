const express = require('express');
const res = require('express/lib/response');
const pokemonRouter = express.Router();
const PokemonesServices = require('../../services/pokemones/pokemones.services');

const servicePokemonObject = new PokemonesServices()

pokemonRouter.get("/", async (req, res) => {
	const data = await servicePokemonObject.getAll()
	res.json(data);
})

pokemonRouter.get("/:id", async (req, res) => {
	const {id} = req.params
	const pokemon = await servicePokemonObject.findOne(id)
	res.json(pokemon)
} )

pokemonRouter.post("/", async(req, res) => {
	const {body} = req;
	const pokemonCreado = await servicePokemonObject.createPokemon(body)
	console.log(pokemonCreado.data);
	res.status(200)	({
		message: 'pokemon created',
		data: pokemonCreado.data
	})
})

pokemonRouter.patch("/:id", async(req, res) => {
	const {id} = req.params
	const {body} = req
	await servicePokemonObject.editPokemonPartial(id, body)
	res.json({
		message: 'update partial successfully',
		id,
		data: body
	})
})

pokemonRouter.put("/:id", async(req, res) => {
	const {id} = req.params
	const {body} = req
	await servicePokemonObject.editCompletePokemon(id, body)
	res.json({
		message: "update complete pokemon successfully",
		id,
		data: body
	})
})

module.exports = pokemonRouter
