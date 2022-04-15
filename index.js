const ord = (string) => {
  return string.charCodeAt()
}

const ordFrom = (int) => {
  return String.fromCharCode(int)
}

module.exports = { ord, ordFrom }