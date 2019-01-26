calculate date 4 months from input date

calculate date 17 weeks from input date

calculate date 120 days from input date


---

## Original Instructions

1. Go to requirebin.com

2. Make the “package.json” tab look like this

```json
{
  "name": "requirebin-sketch",
  "version": "1.0.0",
  "dependencies": {
    "moment": "2.17.1"
  }
}
```

3. Paste code in the “Code" tab

```js
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
```

4. Update the date on the very last line

5. Open "Console" tools with command + option + i

6. Navigate to "Console"

7. "Run Code" in browser

