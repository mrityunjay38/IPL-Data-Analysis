function top10Batsman2016(matches,deliveries){

    let filterById = matches.filter(match => match.season == 2016)
                          .map(match => match.id);

    let filterbyMatch =[];

    filterById.forEach(id => {
    filterbyMatch.push(deliveries.filter(match =>  match.match_id == id));
    });

  filterbyMatch = filterbyMatch.flat(Infinity);

    let result = filterbyMatch.reduce( (acc,match) => {

        if(match.batsman in acc){
            acc[match.batsman] += Number(match.batsman_runs);
        }
        else{
            acc[match.batsman] = Number(match.batsman_runs);
        }

        return acc;
        
    },{} );

    let top10SortedBatsman = Object.fromEntries(Object.entries(result).sort( (a,b) => b[1] - a[1]).slice(0,10));

    // return result;
    return top10SortedBatsman;

}

module.exports = top10Batsman2016;