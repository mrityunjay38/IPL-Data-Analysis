let mostRunsInSingleOver = require('../ipl/mostRunsInSingleOver2017');

let matches = [
    {
        season : '2017',
        id : '1'
    }
];

let delivery = [
    {
        match_id : '1',
        batsman: 'KL Rahul',
        batsman_runs: '1',
        over: '1'
    },
    {
        match_id : '1',
        batsman: 'KL Rahul',
        batsman_runs: '0',
        over: '1'
    },
    {
        match_id : '1',
        batsman: 'KL Rahul',
        batsman_runs: '6',
        over: '1'
    },
    {
        match_id : '1',
        batsman: 'KL Rahul',
        batsman_runs: '0',
        over: '1'
    },
    {
        match_id : '1',
        batsman: 'KL Rahul',
        batsman_runs: '0',
        over: '1'
    },
    {
        match_id : '1',
        batsman: 'KL Rahul',
        batsman_runs: '2',
        over: '1'
    },
    {
        match_id : '1',
        batsman: 'V Kohli',
        batsman_runs: '1',
        over: '2'
    },
    {
        match_id : '1',
        batsman: 'V Kohli',
        batsman_runs: '0',
        over: '2'
    },
    {
        match_id : '1',
        batsman: 'V Kohli',
        batsman_runs: '0',
        over: '2'
    },
    {
        match_id : '1',
        batsman: 'V Kohli',
        batsman_runs: '0',
        over: '2'
    },
    {
        match_id : '1',
        batsman: 'V Kohli',
        batsman_runs: '0',
        over: '2'
    },
    {
        match_id : '1',
        batsman: 'V Kohli',
        batsman_runs: '0',
        over: '3'
    }
];

let expectedOutput = {
    "KL Rahul" : 9,
    "V Kohli" : 1
}

describe("most runs in a single over", () => {
    it("should return empty object for empty input", () => {
      expect(mostRunsInSingleOver([])).toEqual({});
    });
    it("should return players with most runs in a single over.", () => {
        expect(mostRunsInSingleOver(matches,delivery)).toEqual(expectedOutput);
    });
  
  })