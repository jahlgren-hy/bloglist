const app = require('../server/server')

const PORT=3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
