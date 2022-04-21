const isLower = string => {
  try {
    if (typeof string === 'string') {
      return string === string.toLowerCase() || false
    } else{
      return 'Invalid format. Expected string'
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = isLower