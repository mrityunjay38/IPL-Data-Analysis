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


    return Object.entries(result).flat(Infinity);
    // return result;

}

module.exports = top10BowlersByWicket;