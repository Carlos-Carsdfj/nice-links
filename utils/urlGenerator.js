const  Weburl = require('../models/Weburl')

const ALPHANUMERIC = '0123456789abcdefghijklmnopqwrstuvwxyz'
const CODE_LENGTH = 8
const TOTAL_ATTEMPTS = 10

const generateCode = () => {
  let result = ''
  for (let i = 0; i < CODE_LENGTH; i++) {
    result += ALPHANUMERIC.charAt(Math.floor(Math.random() * ALPHANUMERIC.length))
  }
  return result
}

const uniqueUrl = () => {
  let attempts = 0, code = ''
  while (!code && attempts <= TOTAL_ATTEMPTS) {
    code = generateCode()
    Weburl.findOne({ code }, (error, res) => {
      if (error) return generateCode()
      if (res) {
        attempts++
        code = ''
      }
    })
  }
  return `${code}`
}

module.exports =  uniqueUrl
