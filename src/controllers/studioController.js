const mongoose = require('mongoose');
const Studio = require('../models/studio')

const createStudio = async (req, res) => {
    const studio = new Studio ({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        createdAt: req.body.createdAt
    })

    const alreadyExists = await Studio.findOne({ name: req.body.name})
    if(alreadyExists) {
        return res.status(409).json({ error: 'Estúdio já cadastrado!'})
    }

    try {
        const newStudio = await studio.save()
        res.status(201).json(newStudio)
    } catch(err) {
        res.status(500).json({ message: err.message})
    }
}

const getAll = async (req, res) => {
    try {
    const studios = await Studio.find()
    return res.status(200).json(studios);
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
}

const updateStudio = async (req,res) => {
    const findStudio = await Studio.findById(req.params.id);
    
    if (findStudio == undefined) {
        return res.status(404).json({message: 'Estudio não encontrado'})
    }  

    if(req.body.name != undefined){
        findStudio.name = req.body.name
    }

    try {
        const updatedStudio = await findStudio.save()
        res.status(200).send(updatedStudio)
    } catch(err) {
        res.status(500).json({ message: err.message})
    }
}


const remove = async (req, res) => {

    const findStudio = await Studio.findById(req.params.id);
    
    if (findStudio == undefined) {
        return res.status(404).json({message: 'Estudio não encontrado'})
    }    

   try{
       await findStudio.remove()
        res.status(200).send({ message: "Deletado com sucesso!"})
   } catch(err) {
       res.status(500).json({ message: err.message})
   }
}


module.exports = {
    createStudio,
    getAll,
    updateStudio,
    remove
}