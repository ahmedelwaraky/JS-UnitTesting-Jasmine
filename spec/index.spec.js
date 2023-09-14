const { MathUtils, obj, sayHelloWorld } = require("../index .js");

xdescribe("MathUtils fun", () => {
    var math1;
    beforeEach(() => {
        math1 = new MathUtils()
    });

    //test for sum
    it("test sum inside MathUtils", () => {
        expect(math1.sum(2, 3)).toEqual(5)
        expect(math1.sum(2, 3)).toEqual(jasmine.any(Number))
        expect(math1.sum(2, 3)).toBe(5)
        expect(()=> math1.sum(4)).toThrowError("Arg must be Two Num")
    })
    //test for substract
    it("test substract inside Mathulis", ()=>{
        expect(math1.substract(2 , 3 )).toEqual(-1)
        expect(math1.substract(3 , 2 )).toEqual(1)
        expect(math1.substract(2, 3)).toEqual(jasmine.any(Number))
        expect(()=> math1.substract(4)).toThrowError("Arg must be Two Num")
    })
    //test for multiply
    it("test Multiplu inside Mathulis", ()=>{
        expect(math1.multiply(2,3)).toEqual(6)
        expect(math1.multiply(2,3)).toEqual(jasmine.any(Number))
        expect(()=> math1.multiply(4)).toThrowError("Arg must be Two Num")
    })
    //test for divide
    it("test divide inside Mathulis", ()=>{
        expect(math1.divide(9 , 3)).toEqual(3)
        expect(math1.divide(6 , 2)).toEqual(jasmine.any(Number))
        expect(()=> math1.divide(4)).toThrowError("Arg must be Two Num")
        expect(()=> math1.divide('a' , "b")).toThrowError("Arg must be a Num")
        expect(()=> math1.divide(3 , 0)).toThrowError("sec Arg must be != 0")
    })
    //test for average
    it("test average inside Mathulis", ()=>{
        expect(math1.average(2,3)).toEqual(3)
        expect(math1.average(2,3)).toEqual(jasmine.any(Number))
        expect(()=> math1.average(2)).toThrowError("Arg must be Two Num")
        expect(()=> math1.average("a", "b")).toThrowError("Arg must be a Num")
    })
    // test for factorial
    it("test factorial inside Mathulis", ()=>{
        expect(math1.factorial(3)).toEqual(6)
        expect(math1.factorial(3)).toEqual(jasmine.any(Number))
        expect(()=> math1.factorial(2 , 4)).toThrowError("Arg must be one Num")
        expect(()=> math1.factorial('a')).toThrowError("Arg must be a Num")
    })
    //test for positivity
    it("test checkPositivity", () => {
        expect(math1.checkPositivity(4)).toBeTruthy()
        expect(math1.checkPositivity(-4)).toBeFalsy()
        expect(()=> math1.checkPositivity("a" , "b")).toThrowError("Arg Must be a Num")
    })
})

xit("study diff btn toEqual and tobe", () => {
    var user = { id: 1 };
    var a = { x: user }
    var b = { x: user }
    expect(a).toEqual(b) //? check value only
    // expect(a).toBe(b) //? check ref and value
});


//? service /spy ////////////////////////////////////////////////////////////////////
xdescribe("study spyOn", () => {
    it("spyOn hello", () => {
        spyOn(obj, "hello")
        sayHelloWorld(obj)
        sayHelloWorld(obj)
        expect(obj.hello).toHaveBeenCalled()
        // expect(obj.hello).toHaveBeenCalledOnceWith(3)
        expect(obj.hello).toHaveBeenCalledTimes(2)
    })
})
//? //////////////custom matcher///////////////////
xdescribe("create custom matcher", () => {
    beforeEach(() => {
        jasmine.addMatchers({
            toBeGreater: function () {
                return {
                    compare: function (actual) {
                        var result = {}
                        result.pass = actual > 100;
                        result.message = "actual should be more than 100"
                        return result;
                    }
                }
            }
        })
    })
    it("test custom matcher", () => {
        expect(200).toBeGreater()
    })
})
//?   ///////////////////clock///////////////////////////
describe("study clock",()=>{
    beforeAll(()=>{
        jasmine.clock().install();
    });

    afterAll(()=>{
        jasmine.clock().uninstall();
    })

    it("test var",()=>{
        var x = 5;
        setTimeout(()=>{
            x = 10;
        },1000)

        expect(x).toEqual(5);
        jasmine.clock().tick(1000);
        expect(x).toEqual(10)
    })

})