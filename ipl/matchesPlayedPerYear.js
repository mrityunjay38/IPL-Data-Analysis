function matchesPlayedPerYear(matches) {

   let result =  matches.map(year => year.season)
                 .reduce((acc,count) => {

                    if (typeof acc[count] == 'undefined') {
                        acc[count] = 1;
                      } else {
                        acc[count] += 1;
                      }
                    
                      return acc;

                 },{});


    return result;
    
}


module.exports = matchesPlayedPerYear;