let sampleInput = [
  {
    batsman: "Warner",
    batsman_runs: 60,
    match_id: 1
  },
  {
    batsman: "Warner",
    batsman_runs: 40,
    match_id: 1
  },
  {
    batsman: "Amla",
    batsman_runs: 80,
    match_id: 2
  },
  {
    batsman: "Warner",
    batsman_runs: 60,
    match_id: 2
  },
  {
    batsman: "Warner",
    batsman_runs: 40,
    match_id: 2
  },
  {
    batsman: "Amla",
    batsman_runs: 20,
    match_id: 2
  }
];

let expectedOutput = {
  Warner: 2,
  Amla: 1
};

function matchIds(sampleInput) {

    let result = sampleInput.map( match => match.match_id);
    let uniqueMatchId = [... new Set(result)];
    return uniqueMatchId;

}

function calcRuns(matchDeliveries,batsman) {

    let deliveriesToBatsman = matchDeliveries.filter( delivery => delivery.batsman == batsman );
    
    let runs = deliveriesToBatsman.reduce( (acc,runs) => {
        return acc + runs.batsman_runs;
    },0 );

    return runs;

}



function mostCenturies(sampleInput) {

    const matchId = matchIds(sampleInput);

    let result = {};

    matchId.forEach( id => {

        let matchDeliveries = sampleInput.filter( match => match.match_id == id);

        console.log(matchDeliveries);

        let visited = {};

        for(let i in matchDeliveries){

            if(typeof result[matchDeliveries[i].batsman] == 'undefined'){

                result[matchDeliveries[i].batsman] = 0;

                visited[matchDeliveries[i].batsman] = 'true';

                let totalRuns = calcRuns(matchDeliveries,matchDeliveries[i].batsman);

                if(totalRuns >= 100){
                    result[matchDeliveries[i].batsman] += 1;
                }

            }
            else{
                if(visited[matchDeliveries[i].batsman] == 'true'){
                    continue;
                }

                let totalRuns = calcRuns(matchDeliveries,matchDeliveries[i].batsman);
                visited[matchDeliveries[i].batsman] = 'true';

                if(totalRuns >= 100){
                    result[matchDeliveries[i].batsman] += 1;
                }


            }

        }

    } );

    return result;

}



console.log(mostCenturies(sampleInput));