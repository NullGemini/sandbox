describe("tests 1 for reverse int", function() {
    
    let reverseInt = (n) =>{
        n = n.toString().split("").reverse().join("")
        return parseInt(n);
    }

    it("test 1: 123", function() {
        let test = reverseInt(123);
        expect(test).toBe(321);
    });

    it("test 2: 123", function() {
        let test = reverseInt(10);
        expect(test).toBe(1);
    });

    it("test 3: -14", function() {
        let test = reverseInt(-13);
        expect(test).toBe(31);
    });

});