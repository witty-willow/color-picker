var currentTime = new Date();
var today = currentTime.getDate();
var db = require('./db.js');
var ColorFamily = db.ColorFamily;
var CopyCount = db.CopyCount;

var summery = function(dates, start, end) {
  var sum = {};
  start = start || 1;
  end = end || 31;
  if(start < 1) {
    var newStart = 32 + start;
    sum = summery(dates, newStart, 31);
    start = 1;
  }
  // console.log('date', dates, 'start', start, 'end', end)
  for(var i=start; i<=end; i++) {
    var oneDay = dates[i];
    if(oneDay !== undefined && oneDay.length !== 0){
      for(var familyId in oneDay){
        if(sum.hasOwnProperty(familyId)){
          sum[familyId] = sum[familyId] + oneDay[familyId];
        } else {
          sum[familyId] = oneDay[familyId];
        }
      }
    }
  }
  return sum;
}

module.exports = {
  increaseCount: function(req, res) {
    var familyId = req.body.familyId
    // CopyCount.remove({}, function(){
    //   console.log('removed')
    // })
    CopyCount.findOne({}, function(err, result) {
      console.log(result)
      if(err){
        throw err;
      } else {

        // Update data
        var data = result.data;
        if(data.hasOwnProperty(familyId)) {
          data[familyId]++;
        } else {
          data[familyId] = 0;
        }

        //Update date
      var date = result.date;
      if(result.dailyUpdated !== today) {
        date[today] = {};
        result.dailyUpdated = today;
        CopyCount.update({_id: result._id}, {$set: {dailyUpdated: result.dailyUpdated}},{multi: true}, function (err, something) {
          if(err) {throw err}
        })
      }
        if(date.hasOwnProperty(today) && date[today].hasOwnProperty(familyId)) {
          date[today][familyId]++;
        } else {
          date[today][familyId] = 0;
        }

        CopyCount.update({_id: result._id}, {$set: {data: data, date: date}}, {multi: true}, function (err, something) {
          if(err) {throw err}
            console.log(something)
        })
      }
    });
    res.end();
  },

  getDaily: function(req, res) {
    CopyCount.findOne({}, function(err, result) {
      if(err){
        throw err;
      } else {
        res.send(result.date[today]);
      }
    });
  },

  getWeekly: function(req, res) {
    CopyCount.findOne({}, function(err, result) {
      if(err){
        throw err;
      } 
      // else if (result.weeklyUpdated === today){
      //   res.send(result.weekly);
      // } 
      else {
        var weekly = summery(result.date, today - 8, today - 1)
        console.log('weekly', weekly)
        CopyCount.update({_id: result._id}, {$set: {weeklyUpdated: today, weekly:weekly}}, function (err, something) {
          if(err) {throw err}
        })
        res.send(result.weekly);
      }
    });
  },

  getMonthly: function(req, res) {
    CopyCount.findOne({}, function(err, result) {
      if(err){
        throw err;
      } 
      // else if (result.monthlyUpdated === today){
      //   res.send(result.monthly);
      // } 
      else {
        var monthly = summery(result.date)
        CopyCount.update({_id: result._id}, {$set: {monthlyUpdated: today, monthly:monthly}}, function (err, something) {
          if(err) {throw err}
        })
        res.send(result.monthly);
      }
    });
  }
}