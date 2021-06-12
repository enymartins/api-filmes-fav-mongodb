const mongoose = require('mongoose');
const Title = require('../models/title');

const createTitle = async(req, res) => {
    const title = new Title({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        genre: req.body.genre,
        description: req.body.description,
        studio: req.body.studio,
        createdAt: req.body.createdAt
    })

    const alreadyExists = await Title.findOne({ name: req.body.name})
    if(alreadyExists) {
        return res.status(409).json({ error: 'Título já cadastrado!'})
    }

    try{
        const newTitle = await title.save()
        return res.status(201).json(newTitle)
    } catch(err) {
        res.status(500).json({ message: err.message})
    }
}

const getAll = async(req, res) => {
    try {
        const titles = await Title.find().populate('studio')
        return res.status(200).json(titles);
    } catch(err) {
        return res.status(500).json({ message: err.message})
    }
}

const getTitleMarvel = async (req, res) => {
    const titles = await Title.find().populate('studio');
    const getByTitle = titles.filter(title => title.studio.name == "Marvel")
    return res.status(200).json(getByTitle);
}

const getTitleGhibli = async (req, res) => {
    const titles = await Title.find().populate('studio');
    const getByTitle = titles.filter(title => title.studio.name == "Ghibli")
    return res.status(200).json(getByTitle);
}

const getTitlePixar = async (req, res) => {
    const titles = await Title.find().populate('studio');
    const getByTitle = titles.filter(title => title.studio.name == "Pixar")
    return res.status(200).json(getByTitle);
}

const updateTitle = async (req,res) => {
    const findTitle = await Title.findById(req.params.id);
    
    if (findTitle == undefined) {
        return res.status(404).json({message: 'Estudio não encontrado'})
    }  

    if(req.body.name != undefined){
        findTitle.name = req.body.name
    }

    try {
        const updatedTitle = await findTitle.save()
        res.status(200).send(updatedTitle)
    } catch(err) {
        res.status(500).json({ message: err.message})
    }
}

const remove = async (req, res) => {

    const findTitle = await Title.findById(req.params.id);
    
    if (findTitle== undefined) {
        return res.status(404).json({message: 'Título não encontrado'})
    }    

   try{
       await findTitle.remove()
        res.status(200).send({ message: "Deletado com sucesso!"})
   } catch(err) {
       res.status(500).json({ message: err.message})
   }
}

module.exports = {
    createTitle, 
    getAll,
    getTitleMarvel,
    getTitleGhibli,
    getTitlePixar,
    updateTitle,
    remove
}