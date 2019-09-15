let mostEconomicalBowlers = require("../ipl/mostEconomicalBowlers");

const matches = [
  {id: '1',season:'2015'},
  {id: '1',season:'2016'},
  {id: '1',season:'2016'},
  {id: '1',season:'2017'},
  {id: '2',season:'2015'},
  {id: '3',season:'2007'},
];
const deliveries = [
  {match_id:'1',bowler: 'UT Yadav',bye_runs:0,legbye_runs:0,wide_runs:0,noball_runs:1,batsman_runs:4},
  {match_id:'1',bowler: 'UT Yadav',bye_runs:0,legbye_runs:0,wide_runs:0,noball_runs:0,batsman_runs:0},
  {match_id:'1',bowler: 'UT Yadav',bye_runs:0,legbye_runs:0,wide_runs:0,noball_runs:0,batsman_runs:1},
  {match_id:'1',bowler: 'UT Yadav',bye_runs:1,legbye_runs:0,wide_runs:1,noball_runs:0,batsman_runs:0},
  {match_id:'1',bowler: 'UT Yadav',bye_runs:0,legbye_runs:0,wide_runs:0,noball_runs:1,batsman_runs:1},
  {match_id:'1',bowler: 'UT Yadav',bye_runs:1,legbye_runs:1,wide_runs:0,noball_runs:0,batsman_runs:0},
  {match_id:'1',bowler: 'UT Yadav',bye_runs:0,legbye_runs:0,wide_runs:0,noball_runs:0,batsman_runs:0},
  {match_id:'1',bowler: 'UT Yadav',bye_runs:0,legbye_runs:0,wide_runs:0,noball_runs:0,batsman_runs:0},
  {match_id:'1',bowler: 'UT Yadav',bye_runs:0,legbye_runs:0,wide_runs:0,noball_runs:0,batsman_runs:0},
  {match_id:'2',bowler: 'V Kohli',bye_runs:0,legbye_runs:0,wide_runs:0,noball_runs:0,batsman_runs:0},
  {match_id:'2',bowler: 'V Kohli',bye_runs:0,legbye_runs:0,wide_runs:0,noball_runs:0,batsman_runs:1},
  {match_id:'2',bowler: 'V Kohli',bye_runs:0,legbye_runs:0,wide_runs:0,noball_runs:0,batsman_runs:0},
  {match_id:'2',bowler: 'V Kohli',bye_runs:0,legbye_runs:0,wide_runs:0,noball_runs:0,batsman_runs:1},
  {match_id:'2',bowler: 'V Kohli',bye_runs:0,legbye_runs:1,wide_runs:0,noball_runs:1,batsman_runs:1},
  {match_id:'2',bowler: 'V Kohli',bye_runs:0,legbye_runs:0,wide_runs:0,noball_runs:0,batsman_runs:0},
  {match_id:'2',bowler: 'V Kohli',bye_runs:0,legbye_runs:0,wide_runs:0,noball_runs:0,batsman_runs:0}
];

const expectedOutput = {
  "V Kohli": "4.00",
  "UT Yadav": "9.00"
};

describe("computes most economical bowlers", () => {
  it("computes top 10 most economical bowlers", () => {
    expect(mostEconomicalBowlers(matches,deliveries)).toEqual(expectedOutput);
  });
  it("computes top 10 most economical bowlers", () => {
    expect(mostEconomicalBowlers([],[])).toEqual({});
  });
})
