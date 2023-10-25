const mongoose = require("../DB/config");

const SettingSchema = new mongoose.Schema({
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
    type:Boolean,
    required:true
}
 
});

const Setting = mongoose.model("Setting", SettingSchema);
module.exports = Setting;
