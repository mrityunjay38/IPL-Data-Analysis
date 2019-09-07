let matchesPlayedPerYear = require("../ipl/matchesPlayedPerYear");

let inputData = [
    { id : 1, season : 2007 },
    { id : 2, season : 2008 },
    { id : 3, season : 2007 },
    { id : 4, season : 2008 },
    { id : 5, season : 2007 },
    { id : 6, season : 2011 }
];

let expectedOutput = 
    { 
      2007 : 3, 
      2008 : 2, 
      2011 : 1 
    };

describe("matches player per year.", () => {
  it("should return empty object for empty input", () => {
    expect(matchesPlayedPerYear([])).toEqual({});
  });
  it("should return object matches played per year.", () => {
    expect(matchesPlayedPerYear(inputData)).toEqual(expectedOutput);
  });

})
