'use strict'
const moment = require('moment')

function convert (query) {
  if (query === null || query === undefined || query === '' || query === 'now') {
    return output(moment(), 'now')
  } else if (!isNaN(query)) {
    query = query.length === 10 ? query + '000' : query
    return output(moment(parseInt(query)))
  } else {
    return output(moment(query))
  }
}

function output (m, f) {
  const format = m.format('YYYY-MM-DD hh:mm:ss.SSS')
  const zh = m.format('YYYY年MM月DD日 hh时mm分ss秒SSS')
  const iso = m.toISOString()
  const unix = m.unix()
  const date = m.format('YYYY-MM-DD')
  const time = m.format('hh:mm:ss')
  return [{
    title: format,
    subtitle: f,
    arg: format
  }, {
    title: +m,
    subtitle: 'unix timestamp(milliseconds)',
    arg: +m
  }, {
    title: unix,
    subtitle: 'unix timestamp(seconds)',
    arg: unix
  }, {
    title: iso,
    subtitle: 'ISO',
    arg: iso
  }, {
    title: zh,
    subtitle: 'chinese',
    arg: zh
  }, {
    title: date,
    subtitle: 'date',
    arg: date
  }, {
    title: time,
    subtitle: 'time',
    arg: time
  }]
}

export { convert }
