const {count} = require('./task')
// знайти кількість цифр числа

describe("number", () => {
    it("given number - show the result", () => {
        expect(count(5456456)).toEqual(7);
    });

    it("given a string - show the result ", () => {
        expect(count("1321312312")).toEqual(10);
    });

    it("given a letters should return - NaN", () => {
    expect(count('word')).toBe(NaN);
    });

    it("given -number - should return result", () => {
        const negativeNum = -5456456
        expect(count(negativeNum)).toEqual(7);
    });
});
