const express = require('express')
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
app.use(cors())
app.use(bodyParser.json())

const ColorlibModel = mongoose.model('Colorlib', new mongoose.Schema({
  name: String,
  title: String,
  image: String
}));

app.get('/api', (req, res) => {
    res.send('Hello World!')
  })
///Get All
  app.get('/api/robotics', async(req,res)=>{
    const {name} = req.query;
    const rooobots = await ColorlibModel.find()
    if(!name){
        res.status(200).send(rooobots)
    }else{
        const filterName = rooobots.filter(m=>m.name.toLocaleLowerCase().trim().includes(name.toLocaleLowerCase().trim()))
        res.status(200).send(filterName)
    }
  })
////GEt  All By ID
app.get('/api/robotics/:id', async(req,res)=>{
    const id = req.params.id;
    const Robotoid = await ColorlibModel.findById(id);
    res.status(203).send(Robotoid)
})

//POST
app.post('/api/robotics', async(req,res)=>{
    const {name,title,image} = req.body;
    const newRoobot = new ColorlibModel({
        name:name,
        title:title,
        image:image
    })
    await newRoobot.save();
    res.status(201).send(newRoobot)
})
///Put 
app.put('/api/robotics/:id', async(req,res)=>{
      const id = req.params.id;
      const {name, title,image} = req.body
      const updateRoobot ={
        name:name,
         title:title,
         image:image
      }
      await ColorlibModel.findByIdAndUpdate(id,updateRoobot)
      res.status(200).send(`${updateRoobot.name} updated succes!`)
})


////Delete
app.delete('/api/robotics/:id', async(req,res)=>{
    const id =req.params.id;
    const deleteId =await ColorlibModel.findByIdAndDelete(id);
    res.status(203).send(deleteId)
})


PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`HERSEY YAXSIDIR ${PORT}`)
  })

  mongoose.connect(process.env.MY_CONNECTION).then(()=>{
    console.log("HERSEY YAXSIDI");
  });