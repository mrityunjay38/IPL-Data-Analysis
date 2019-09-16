function top10Batsman2016(matches,deliveries){

    let result = deliveries.reduce( (acc,match) => {

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

// Number(match.batsman_runs) + Number(match.noball_runs) + Number(match.legbye_runs) + Number(match.bye_runs);