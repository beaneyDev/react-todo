var moment = require('moment');

console.log(moment().format());

//January 1st 1970 @ 12:00AM -> 0
//January 1st 1970 @ 12:01AM -> 60

var now = moment();
console.log('Current time stamp: ', now.unix());

var timestamp = 1483815540;

var currentMoment = moment.unix(timestamp);

console.log('Current moment: ', currentMoment.format('MMM D, YY @ h:mm a'));

// January 3rd, 2017 @ 12:13 AM

console.log('Current formatted moment: ', currentMoment.format('MMMM Do, YYYY @ hh:mm A'))
