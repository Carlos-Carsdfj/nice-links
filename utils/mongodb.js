const mongoose = require('mongoose')

const connected = () =>{
  const {MONGO_DB_URI} = process.env

  if (!MONGO_DB_URI) {
    console.error('Recuerda que tienes que tener un archivo .env con las variables de entorno definidas y el MONGO_DB_URI que servirá de connection string. En las clases usamos MongoDB Atlas pero puedes usar cualquier base de datos de MongoDB (local incluso).')
  }

  mongoose.connect(MONGO_DB_URI, {
  })
    .then(() => {
      console.log('Database connected')
    }).catch(err => {
      console.error(err)
    })
}

const db = { connected }
module.exports = db

