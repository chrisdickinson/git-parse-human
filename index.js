module.exports = function(str) {
  var rex = /(.*) <([^>]+)> (\d+) ([+-]{1}\d{4})/
    , match = rex.exec(str)

  if(!match) {
    return null
  }

  var timestamp = +match[3]
    , offset = match[4]

  offset = (offset.charAt(0) === '-' ? -1 : 1) * (offset.slice(1, 3) * 60 + (+offset.slice(3, 5)))

  return {
    name: match[1].replace(/(^\s+|\s+$)/, '')
  , time: timestamp * 1000
  , tzoff: offset * 60 * 1000
  , email: match[2]
  }
}

