const ordFrom = (int) => {
  try {
    if (typeof int === 'number') {
      return String.fromCharCode(int)
    } else {
      return 'Invalid format. Expected integer'
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = ordFrom