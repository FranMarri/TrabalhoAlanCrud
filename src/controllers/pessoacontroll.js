const PessoaModel = require ('../models/pessoa')
const listpessoas =  async (req, res) => {
    try {
        const pessoas = await PessoaModel.findAll();
        res.json(pessoas);
    } catch (err) {
        res.status(500).json(err);
    }
};

const createpessoas= async (req, res) => {
    console.log(req.body)
    try {
        const pessoa = await PessoaModel.create(req.body);
        res.status(201).json(pessoa);
    } catch (err) {
        res.status(400).json(err);
    }
};

const listpessoasbyCPF = async (req, res) => {
    try {
        const pessoa = await PessoaModel.findOne({ where: { cpf: req.params.cpf } });
        if (pessoa) {
            res.json(pessoa);
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {listpessoas ,createpessoas,listpessoasbyCPF}