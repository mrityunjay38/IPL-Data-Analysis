function mostRunsInSingleOver2017(matches,deliveries){

    const filterBySeason = matches.filter( match => match.season == 2017);
    // console.log(filterBySeason);

    let filterByMatches = [];

    filterBySeason.reduce( (acc,match) => {
        filterByMatches.push(...deliveries.filter( season => season.match_id == match.id));
    },[] );

    // console.log(filterByMatches);

    let result = {};
    let temp = {};

    for(let i=0;i<filterByMatches.length-1;i++){

        if(typeof temp[filterByMatches[i].batsman] == 'undefined'){
            temp[filterByMatches[i].batsman] = 0;
        }

        if(filterByMatches[i].over == filterByMatches[i+1].over){
            temp[filterByMatches[i].batsman] += Number(filterByMatches[i].batsman_runs);
            
        }
        else{
            
            temp[filterByMatches[i].batsman] += Number(filterByMatches[i].batsman_runs);
            
            if(typeof result[filterByMatches[i].batsman] == 'undefined'){
                result[filterByMatches[i].batsman] = temp[filterByMatches[i].batsman];
            }
            else if(result[filterByMatches[i].batsman] < temp[filterByMatches[i].batsman]){
                    result[filterByMatches[i].batsman] = temp[filterByMatches[i].batsman];
            }

            temp = {};

        }

    }
    
    // return temp;

    return Object.fromEntries(Object.entries(result).sort( (a,b) => b[1] - a[1] ));
    
}

module.exports = mostRunsInSingleOver2017;

