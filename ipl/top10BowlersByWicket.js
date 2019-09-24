function top10BowlersByWicket(matches,deliveries){

    // console.log(matches[0]);
    // console.log(deliveries[0]);

    let result = matches.reduce( (acc,match) => {

        let filterById = deliveries.filter( season => season.match_id == match.id );

        if(typeof acc[match.season] == 'undefined'){
            acc[match.season] = {};

            filterById.reduce( (bcc,subMatch) => {

                if(typeof acc[match.season][subMatch.bowler] == 'undefined'){
                    acc[match.season][subMatch.bowler] = 0;
                    if(subMatch.dismissal_kind == 'caught' || subMatch.dismissal_kind == 'caught and bowled' || subMatch.dismissal_kind == 'bowled' || subMatch.dismissal_kind == 'lbw'){
                        acc[match.season][subMatch.bowler] = 1;
                    }
                }
                else{
                    if(subMatch.dismissal_kind == 'caught' || subMatch.dismissal_kind == 'caught and bowled' || subMatch.dismissal_kind == 'bowled' || subMatch.dismissal_kind == 'lbw'){
                        acc[match.season][subMatch.bowler] += 1;
                    }
                }

                return bcc;
            },{} );

        }
        else{

            filterById.reduce( (bcc,subMatch) => {
                if(typeof acc[match.season][subMatch.bowler] == 'undefined'){
                    acc[match.season][subMatch.bowler] = 0;
                    if(subMatch.dismissal_kind == 'caught' || subMatch.dismissal_kind == 'caught and bowled' || subMatch.dismissal_kind == 'bowled' || subMatch.dismissal_kind == 'lbw'){
                        acc[match.season][subMatch.bowler] = 1;
                    }
                }
                else{
                    if(subMatch.dismissal_kind == 'caught' || subMatch.dismissal_kind == 'caught and bowled' || subMatch.dismissal_kind == 'bowled' || subMatch.dismissal_kind == 'lbw'){
                        acc[match.season][subMatch.bowler] += 1;
                    }
                }
                return bcc;
            },{} ); 

        }
        // console.log(acc);
        return acc;

    },{} );

    let topBowlers = Object.entries(result).flat(Infinity);

    let top10Bowlers = {};

    for(let i=0;i<topBowlers.length;i+=2){
        top10Bowlers[topBowlers[i]] = Object.fromEntries(Object.entries(topBowlers[i+1]).sort( (a,b) => b[1] - a[1] ).slice(0,10)); 
    }

  return top10Bowlers;

}

module.exports = top10BowlersByWicket;