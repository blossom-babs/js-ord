const isUpper = string => {
  try {
    if (typeof string === 'string') {
      if (string === string.toUpperCase()) return true
      return false
    } else{
      return 'Invalid format. Expected string input'
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = isUpper