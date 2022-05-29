var busStops = [[10,0], [3,5],[5,8]]


    function number(busStops){
    var totalPeople = 0;
    for (var i=0; i<busStops.length; i++) {
      totalPeople += busStops[i][0];
      totalPeople -= busStops[i][1];
    }
    return totalPeople;
  }

  console.log(number(busStops))

