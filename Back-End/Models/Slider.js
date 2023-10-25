const mongoose = require("../DB/config");

const SliderSchema = new mongoose.Schema({
Setting_name:{
    type:String,
    required:true
},
Setting_type:{
    type:String,
    enum:["Slider"],
    required:true
},
value:{
    type:Number,
    required:true
}
 
});

const Slider = mongoose.model("Slider", SliderSchema);
module.exports = Slider;
