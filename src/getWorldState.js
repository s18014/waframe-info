const request = require('superagent')
// require('superagent-proxy')(request)
// const proxy = process.env.http_proxy || null
const URL = 'https://api.warframestat.us/pc'

const getWorldState = (callback) => {
  console.log('Getting source from ' + URL)
  request
    .get(URL)
    .end((err, res) => {
      if (err) {
        console.error(err)
        return
      }
      callback(res.body)
    })
}

module.exports = getWorldState
