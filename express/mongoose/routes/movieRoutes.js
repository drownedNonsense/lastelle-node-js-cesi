const express = require("express")
const router = express.Router()
const Movie = require("./../models/movie")

router.post('/', async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (_, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:title', async (req, res) => {
    try {
        const movies = await Movie.findOne({ title: req.params.title });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        if (await Movie.findByIdAndUpdate(req.params.id, req.body))
             res.status(200).send("Edité avec succès !");
        else res.status(404).send("Aucun film correspondant !");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        if (await Movie.findByIdAndDelete(req.params.id))
             res.status(200).send("Supprimé avec succès !");
        else res.status(404).send("Aucun film correspondant !");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;