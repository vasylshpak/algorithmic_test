const {ab} = require('./task')


describe("number", () => {
    it("given number - show the result", () => {
        expect(ab(234)).toEqual([ 6, 28 ]);
    });

    it("given a number - show the result ", () => {
        expect(ab(2003)).toEqual([6, 28, 496]);
    });

    it("given a letters should return - NaN", () => {
    expect(ab('word')).toBe(NaN);
    });

});
