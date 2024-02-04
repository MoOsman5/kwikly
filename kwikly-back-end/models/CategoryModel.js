const mongoose = require('mongoose')

const CategorySchema =new mongoose.Schema({
  categoryName:{
    type :String,
    required:[true,'Category required'],
    unique:[true,'Category must be unique'],
    minLength:[3,'Too short Name'],
    maxLength: [32 ,'Too long name'],
  },
  slug:{
    type:String,
    lowercase:true,
  }
},
{timestamps:true}
)

const CategoryModel =mongoose.model('Category',CategorySchema)

module.exports =CategoryModel