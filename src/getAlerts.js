const request = require('superagent')
const URL = 'https://api.warframestat.us/pc/alerts'

const getAlerts = (callback) => {
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

module.exports = getAlerts
