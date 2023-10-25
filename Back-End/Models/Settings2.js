const mongoose = require("../DB/config");

const Setting2Schema = new mongoose.Schema({
Setting_name:{
    type:String,
    required:true
},
Setting_type:{
    type:String,
    enum:["Toggle"],
    required:true
},
value:{
    type:Object,
    required:true
}
 
});

const Setting2 = mongoose.model("Setting2", Setting2Schema);
module.exports = Setting2;
