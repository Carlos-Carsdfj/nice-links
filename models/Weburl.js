const { Schema, model } = require('mongoose')

const WeburlSchema = new Schema({
  urlOriginal:{
    type: String,
    required: true
  },
  shortLink: String,
},{timestamps: true} )

const Weburl = model('Weburl',WeburlSchema)

module.exports = Weburl 
