const rewire = require("rewire")
const _07_08 = rewire("./07-08")
const Person = _07_08.__get__("Person")
// @ponicode
describe("Person", () => {
    test("0", () => {
        let callFunction = () => {
            Person("Edmond", 25)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Person("Jean-Philippe", 35)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Person("Pierre Edouard", 25)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Person("Michael", 18)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Person("Pierre Edouard", 75)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Person("", -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
