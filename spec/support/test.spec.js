describe("A set of tests to test jasmine", function() {
    let a = true;
    let foo = 0;

    beforeEach(function() {
        foo += 1;
    });

    afterEach(function() {
        foo = 0;
    });

    it("this is a simple boolean test", function() {

        expect(a).toBe(true);
    });

    it("this is a test for the beforeEach function", function() {
        // As this is the second test, it should be 1
        expect(foo).toBe(1);
    });

    it("this is a test for the beforeEach function", function() {
        // As this is the second test, it should be 2
        expect(foo).toBe(1);
    });
});