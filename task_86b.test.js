const {sum} = require('./task')
// знайти суму

describe("Sum of Numbers", () => {
    it("given number - show the result", () => {
        expect(sum(57230)).toEqual(17);
    });

    it("given a string - show the result ", () => {
        expect(sum("13312")).toEqual(10);
    });

    it("given a letters should return - NaN", () => {
    expect(sum('word')).toBe(NaN);
    });

    it("given -number - should return result", () => {
        const negativeNum = -5456456
        expect(sum(negativeNum)).toEqual(25);
    });
});
