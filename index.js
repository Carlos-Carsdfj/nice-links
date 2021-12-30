require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./utils/mongodb.js')
const Weburl = require('./models/Weburl.js')
const uniqueUrl = require('./utils/urlGenerator.js')
const app = express()
db.connected()
app.use(cors())
app.use(express.json())

app.use('/', express.static(__dirname + '/public'))

app.get('/',(request,response)=>{
  response.render('index.html')
})

app.get('/:route', async(req,res)=>{
  const { route } = req.params
  try{
    let url = await Weburl.findOne({shortLink:route})
    res.redirect(url.urlOriginal)
  }catch(error){
    res.status(404).json({error:'url not saved'})
  }  
})

app.post('/create', async(req, res)=>{
  const { urlOriginal } = req.body
  const { hostname } = req

  if(urlOriginal ===''){
    return res.status(400).json({error: 'url is missing '})
  }
  try{
    let url = await Weburl.findOne({ urlOriginal })
    if(url){
      return res.json({ shortLink: `${hostname}/${url.shortLink}` })
    }
    url = new Weburl({ urlOriginal, shortLink: uniqueUrl() })  
    url.save()
    return res.json({shortLink: `${hostname}/${url.shortLink}` })
  }catch(error){
    res.status(500).json({ error:error.message })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, function() {
  console.log(`Servidor web escuchando en el puerto ${PORT}`)
})
