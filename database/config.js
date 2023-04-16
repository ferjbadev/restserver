const mongoose = require('mongoose');
const {colors} = require('colors')

const dbConection = async() => {

  try{

    await mongoose.connect(process.env.ferbDB);

    console.log('La base de datos esta online!!'.green)
    
  } catch(error){
      throw new Error('Error a la hora de iniciar la base de datos'.red)
  }
}

module.exports = {
  dbConection
}