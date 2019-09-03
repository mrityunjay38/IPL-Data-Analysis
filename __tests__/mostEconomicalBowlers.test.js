let mostEconomicalBowlers = require("../ipl/mostEconomicalBowlers");

describe("computes most economical bowlers", () => {
  it("computes top 10 most economical bowlers", () => {
    const deliveries = [

    ]
    const expectedOutput = [
      {
        name: "Muttiah Muralitharan",
        economy: 6.67
      },
      {
        name: "Sunil Narine",
        economy: 6.67
      }
    ];
    expect(mostEconomicalBowlers(deliveries)).toEqual(expectedOutput);
  });
})
