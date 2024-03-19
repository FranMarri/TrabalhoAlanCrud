const express = require('express');
const router = express.Router();

const { listpessoas, createpessoas, listpessoasbyCPF } = require('../controllers/pessoacontroll');



//lista pessoa

router.get("/", listpessoas)
    

// criar
router.post('/', createpessoas)

// buscar cpf
router.get('/cpf/:cpf', listpessoasbyCPF)


// atualiza cpf
router.put('/:id', async (req, res) => {
   
});

// deleta
router.delete('/cpf/:cpf', async (req, res) => {
   
});

module.exports = router;
//faltar um put