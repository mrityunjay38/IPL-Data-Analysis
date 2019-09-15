function mostEconomicalBowlers(matches,deliveries) {

  let filterById = matches.filter(match => match.season == 2015)
                          .map(match => match.id);

  let filterbyMatch =[];

  filterById.forEach(id => {
    filterbyMatch.push(deliveries.filter(match =>  match.match_id == id));
  });

  filterbyMatch = filterbyMatch.flat(Infinity);

  let result = filterbyMatch.reduce( (acc,match) => {

    // console.log(match);
    let bowler = match.bowler;
    // let totalRuns = match.total_runs - (match.bye_runs + match.legbye_runs);
    let totalRuns = Number(match.wide_runs) + Number(match.noball_runs) + Number(match.batsman_runs);

    if(typeof acc[bowler] == 'undefined'){
      acc[bowler] = {};
      acc[bowler]['runs'] = totalRuns;
      acc[bowler]['balls'] = 0;
      if(match.wide_runs == 0 && match.noball_runs == 0){
        acc[bowler].balls += 1;
      }
    }
    else{
      acc[bowler].runs += totalRuns;
      if(match.wide_runs == 0 && match.noball_runs == 0){
      acc[bowler].balls += 1;
      }
    }

    return acc;

  },{} );


  let calcEconomy = Object.entries(result).reduce((acc,index) => {
    acc[index[0]] = ((index[1].runs / index[1].balls)*6).toFixed(2);
    return acc;
  },{});

  // console.log(calcEconomy);

  let top10sorted = Object.fromEntries(Object.entries(calcEconomy)
                          .sort( (a,b) => a[1] - b[1] ).slice(0,10));
  // console.log(top10sorted);

  return top10sorted;

}

module.exports = mostEconomicalBowlers;