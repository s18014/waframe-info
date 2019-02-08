const getWorldState = require('./getWorldState.js')

getWorldState((e) => {
  console.log(e['alerts'])
})
