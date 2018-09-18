const moment = require('moment')

const calculateLeave = (month, day, year) => {
  var dateObj = {}
  const monthIndex = month - 1
  const inputDate = new Date(year, monthIndex, day)
  dateObj['122 days'] = moment(inputDate).add(122, 'days').calendar()
  dateObj['17.3 weeks'] = moment(inputDate).add(17.3, 'weeks').calendar()
  dateObj['4 months'] = moment(inputDate).add(4, 'months').calendar()
  dateObj['182 days'] = moment(inputDate).add(182, 'days').calendar()
  dateObj['26 weeks'] = moment(inputDate).add(26, 'weeks').calendar()
  dateObj['6 months'] = moment(inputDate).add(6, 'months').calendar()
  return dateObj
}


console.log(calculateLeave(5, 7, 2018))