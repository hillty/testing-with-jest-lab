const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions')

describe('Return Two test', () => {
    test('should return 2', () => {
        expect(returnTwo()).toBe(2)
    })
})

describe('Greeting tests', () => {
    test('should show Hello, Ty.', () => {
        let greetings = greeting('Ty')
        expect(greetings).toBe("Hello, Ty.")
    })

    test('should show Hello, Jill.', () => {
        let greetings = greeting('Jill')
        expect(greetings).toBe('Hello, Jill.')
    })
})

describe('Addition test', () => {
    test('should add 1 and 2 to equal 3', () => {
        let added = add(1, 2)
        expect(added).toBe(3)
    })

    test('should add 5 and 9 to equal 14', () => {
        let added = add(5, 9)
        expect(added).toBe(14)
    })
})

describe('Multiplication test', () => {
    test('should mulitply 5 and 8 to equal 40', () => {
        let multiplied = multiply(5, 8)
        expect(multiplied).toBe(40)
    })
})

describe('Division test', () => {
    test('should divid 40 by 8 to equal 5', () => {
        let divided = divide(40, 8)
        expect(divided).toBe(5)
    })
})

describe('Subtraction test', () => {
    test('should subtract 5 from 10 to equal 5', () => {
        let subtracted = subtract(10, 5)
        expect(subtracted).toBe(5)
    })
})

