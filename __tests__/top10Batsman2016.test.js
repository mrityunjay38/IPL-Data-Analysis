let top10Batsman2016 = require("../ipl/top10Batsman2016");

let matches = [
  {id:1,season:2016},
  {id:1,season:2016},
  {id:2,season:2016},
  {id:1,season:2016},
  {id:2,season:2016},
  {id:1,season:2016},
  {id:2,season:2016},
  {id:1,season:2016},
  {id:2,season:2016},
  {id:2,season:2016}
];

let delivery = [
    {match_id:1,batsman:'V Kohli',batsman_runs:5,noball_runs:1,bye_runs:1,legbye_runs:0},
    {match_id:1,batsman:'V Kohli',batsman_runs:1,noball_runs:0,bye_runs:0,legbye_runs:0},
    {match_id:1,batsman:'V Kohli',batsman_runs:0,noball_runs:0,bye_runs:0,legbye_runs:0},
    {match_id:1,batsman:'V Kohli',batsman_runs:3,noball_runs:0,bye_runs:1,legbye_runs:0},
    {match_id:1,batsman:'SK Raina',batsman_runs:0,noball_runs:0,bye_runs:0,legbye_runs:0},
    {match_id:1,batsman:'SK Raina',batsman_runs:6,noball_runs:0,bye_runs:0,legbye_runs:0},
    {match_id:2,batsman:'SK Raina',batsman_runs:4,noball_runs:0,bye_runs:0,legbye_runs:0},
    {match_id:2,batsman:'SK Raina',batsman_runs:1,noball_runs:0,bye_runs:0,legbye_runs:0},
    {match_id:2,batsman:'David Warner',batsman_runs:6,noball_runs:6,bye_runs:0,legbye_runs:0},
    {match_id:2,batsman:'David Warner',batsman_runs:4,noball_runs:0,bye_runs:0,legbye_runs:0},
    {match_id:2,batsman:'David Warner',batsman_runs:1,noball_runs:0,bye_runs:0,legbye_runs:0},
    {match_id:2,batsman:'David Warner',batsman_runs:0,noball_runs:0,bye_runs:0,legbye_runs:0},
    {match_id:2,batsman:'David Warner',batsman_runs:1,noball_runs:0,bye_runs:0,legbye_runs:0}
    ];
    
    let expectedOutput = {
      "David Warner": 60,
      "SK Raina": 55,
      "V Kohli": 45
    };


describe("computes most economical bowlers", () => {
    it("computes top 10 most economical bowlers", () => {
          expect(top10Batsman2016(matches,delivery)).toEqual(expectedOutput);
        });
    it("computes top 10 most economical bowlers", () => {
          expect(top10Batsman2016([])).toEqual({});
        });
})      
