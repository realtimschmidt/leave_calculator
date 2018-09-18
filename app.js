const moment = require('moment')

const calculateLeave = (month, day, year) => {
  const dateObj = {4:{},6:{}}
  const monthIndex = month - 1
  const inputDate = new Date(year, monthIndex, day)
  dateObj[4]['122 days'] = moment(inputDate).add(122, 'days').calendar()
  dateObj[4]['17.3 weeks'] = moment(inputDate).add(17.3, 'weeks').calendar()
  dateObj[4]['4 months'] = moment(inputDate).add(4, 'months').calendar()
  dateObj[6]['182 days'] = moment(inputDate).add(182, 'days').calendar()
  dateObj[6]['26 weeks'] = moment(inputDate).add(26, 'weeks').calendar()
  dateObj[6]['6 months'] = moment(inputDate).add(6, 'months').calendar()
  return dateObj
}


console.log(calculateLeave(9, 7, 2018))