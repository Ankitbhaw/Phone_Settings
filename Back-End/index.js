const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()

const Setting = require('./Models/Settings');
const Setting2 = require('./Models/Settings2');
const Slider = require('./Models/Slider');
const SliderObject = require('./Models/SliderObject');

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.json("success");
})

app.route('/settings/:id').get(async(req,res)=>{
    const _id = req.params.id;
    const data = await Setting.findById(_id);
    res.send(data);

}).patch(async(req, res)=>{
const _id = req.params.id;
const data = await Setting.findByIdAndUpdate(_id,req.body);
res.send(data);
})
app.route('/settings2/:id').get(async(req,res)=>{
    const _id = req.params.id;
    const data = await Setting2.findById(_id);
    res.send(data);

}).patch(async(req, res)=>{
const _id = req.params.id;

const data = await Setting2.findByIdAndUpdate(_id,req.body);
res.send(data);
})
app.route('/settings/slider/:id').get(async(req,res)=>{
    const _id = req.params.id;
    const data = await Slider.findById(_id);
    res.send(data);

}).patch(async(req, res)=>{
const _id = req.params.id;

const data = await Slider.findByIdAndUpdate(_id,req.body);
res.send(data);
})
app.route('/settings/slider_object/:id').get(async(req,res)=>{
    const _id = req.params.id;
    const data = await SliderObject.findById(_id);
    res.send(data);

}).patch(async(req, res)=>{
const _id = req.params.id;

const data = await SliderObject.findByIdAndUpdate(_id,req.body);
res.send(data);
})

app.listen(5000,()=>{
    console.log("listening on port 5000");  
})  