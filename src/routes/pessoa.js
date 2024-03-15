const express = require('express');
const router = express.Router();
const Pessoa = require('../models/pessoa');

//lista pessoa

router.get('/', async (req, res) => {
    try {
        const pessoas = await Pessoa.findAll();
        res.json(pessoas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const pessoas = await Pessoa.findAll();
        res.json(pessoas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// criar
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        const pessoa = await Pessoa.create(req.body);
        res.status(201).json(pessoa);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// buscar cpf
router.get('/cpf/:cpf', async (req, res) => {
    try {
        const pessoa = await Pessoa.findOne({ where: { cpf: req.params.cpf } });
        if (pessoa) {
            res.json(pessoa);
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// atualiza cpf
router.patch('/cpf/:cpf', async (req, res) => {
   
});

// deleta
router.delete('/cpf/:cpf', async (req, res) => {
   
});

module.exports = router;