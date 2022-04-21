const ord = (string) => {
  try {
    if(typeof string === 'string'){
      return string.charCodeAt()
    } else{
      return 'Invalid format. Expected string.'
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = ord