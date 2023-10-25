const mongoose = require("../DB/config");

const SliderObjectSchema = new mongoose.Schema({
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
    type:Object,
    required:true
}
 
});

const SliderObject = mongoose.model("SliderObject", SliderObjectSchema);
module.exports = SliderObject;
