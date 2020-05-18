/*
function getBestTime(dailyRun) {
  return dailyRun.sort((runA, runB) => getRunTime(runA) - getRunTime(runB))[0]
    .day;
}

function getRunTime(run) {
  return parseFloat(run.time) / parseFloat(run.distance);
}
/*
As we know, Lauren is putting Mo Farah in a spot of discomfort at the
moment with her incredible running skills. While Strava has been
reliable up until this point, Lauren noticed that last week her weekday
runs only recorded the distance she ran each day, and the time it took.
Could you create a function that finds out the average pace for each 
day, and then return the day with the best average pace?

console.log(
  getBestTime([
    {
      day: "Monday",
      time: "36.54 minutes",
      distance: "7 kilometers",
    },
    {
      day: "Tuesday",
      time: "32.82 minutes",
      distance: "6 kilometers",
    },
    {
      day: "Wednesday",
      time: "35.35 minutes",
      distance: "6 kilometers",
    },
    {
      day: "Thursday",
      time: "35 minutes",
      distance: "7 kilometers",
    },
    {
      day: "Friday",
      time: "27.15 minutes",
      distance: "5 kilometers",
    },
  ])
);
*/
